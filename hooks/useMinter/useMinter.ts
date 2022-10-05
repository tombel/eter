import React from 'react'
import { utils } from 'ethers'

import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'

import { useSignerGenerator } from '../../hooks/useSignerGenerator'

export interface IuseMinterValues {
  isLoading: boolean
  error: Error
  isSuccess: boolean
  data: {
    hash?: string
  }
  isError: boolean
  isPrepareError: boolean
  prepareError: Error
  mint: () => void
}

export function useMinter({ quantity }: { quantity: number }): IuseMinterValues {
  const { isConnected, address } = useAccount()
  const {
    status,
    data: signatureData,
    error: signatureError,
    generate,
  } = useSignerGenerator({
    address,
  })

  React.useEffect(() => {
    generate()
  }, [generate])

  const iface = new utils.Interface([
    'function mint(address _wallet, uint256 _amount, uint256 _signatureId, bytes memory _signature)',
  ])

  const isReady = isConnected && !signatureError && Boolean(address) && status == 'success'

  const dataContract = isReady
    ? iface.encodeFunctionData('mint', [
        address,
        quantity, // amount less or equal to max amount <= Max_Per_user - User_Tokens
        signatureData?.signatureId,
        signatureData?.signature,
      ])
    : null

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_SAND_CONTRACT_ADDRESS, // should be a env config
    contractInterface: [
      {
        constant: false,
        inputs: [
          {
            name: 'target',
            type: 'address',
          },
          {
            name: 'amount',
            type: 'uint256',
          },
          {
            name: 'data',
            type: 'bytes',
          },
        ],
        name: 'approveAndCall',
        outputs: [
          {
            name: '',
            type: 'bytes',
          },
        ],
        payable: true,
        stateMutability: 'payable',
        type: 'function',
      },
    ],
    functionName: 'approveAndCall',
    overrides: {
      gasLimit: 1_000_000,
    },
    args: [process.env.NEXT_PUBLIC_CONTRACT_ADDRESS, 0, dataContract], // sandAmount = nftsToMint * nftSandPrice
    enabled: isReady,
  })

  const { data, error, isError, write } = useContractWrite(config)

  const { isLoading, isSuccess } = useWaitForTransaction({
    hash: data?.hash,
  })

  return {
    isLoading,
    error,
    isSuccess,
    data,
    isError,
    mint: write,
    isPrepareError,
    prepareError,
  }
}
