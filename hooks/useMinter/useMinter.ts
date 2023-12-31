import { utils } from 'ethers'
import { useAccount, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from 'wagmi'
import { IMintData, useMintData } from '../../hooks/useMintData'

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
  isReady: boolean
  allowedToMint: number
  isAddressNotQualify: boolean
  isLoadingPrepare: boolean
  mint: () => void
  reset: () => void
  mintData: IMintData
  quantity: number
  enoughFounds: boolean
}

const iface = new utils.Interface([
  'function mint(address _wallet, uint256 _amount, uint256 _signatureId, bytes memory _signature)',
])

export function useMinter({ quantity }: { quantity: number }): IuseMinterValues {
  const { isConnected, address } = useAccount()
  const {
    isLoading: isLoadingPrepare,
    status,
    data: initialMintData,
    error: mintDataError,
  } = useMintData({
    address,
    amount: quantity,
  })

  const isAddressNotQualify = mintDataError?.message == 'ADDR_NOT_QUALIFY'

  const allowedToMint =
    initialMintData && initialMintData?.isMintAllowed
      ? Math.max(
          0,
          Number(initialMintData?.waveMaxTokensToBuy) - Number(initialMintData?.claimedCount),
        )
      : 0

  const enoughFounds = initialMintData
    ? utils
        .parseUnits(initialMintData?.balance, 18)
        .gte(utils.parseUnits(initialMintData?.tokenPrice, 18).mul(quantity))
    : false

  const isReady =
    isConnected &&
    !mintDataError &&
    Boolean(address) &&
    status == 'success' &&
    quantity <= allowedToMint &&
    enoughFounds

  const dataContract = isReady
    ? iface.encodeFunctionData('mint', [
        address,
        quantity, // amount less or equal to max amount <= Max_Per_user - User_Tokens
        initialMintData?.signatureId,
        initialMintData?.signature,
      ])
    : null

  const {
    config,
    error: prepareError,
    isError: isPrepareError,
  } = usePrepareContractWrite({
    addressOrName: process.env.NEXT_PUBLIC_SAND_CONTRACT_ADDRESS,
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
    args: [
      process.env.NEXT_PUBLIC_CONTRACT_ADDRESS,
      utils.parseUnits(initialMintData?.tokenPrice || '0', 18).mul(quantity),
      dataContract,
    ], // sandAmount = nftsToMint * nftSandPrice
    enabled: isReady,
  })

  const GAS_LIMIT_MULTIPLIER = 115 // 5% percent

  const {
    data,
    error,
    isError: isErrorWhite,
    write,
    isLoading,
    reset,
  } = useContractWrite({
    ...config,
    request: {
      ...config.request,
      // https://github.com/wagmi-dev/wagmi/discussions/1129
      gasLimit: config?.request?.gasLimit.mul(GAS_LIMIT_MULTIPLIER).div(100),
    },
  })

  const {
    isLoading: isLoadingTransation,
    isSuccess: isSuccessRequest,
    isError: isErrorRequest,
    data: transactionData,
  } = useWaitForTransaction({
    hash: data?.hash,
  })

  const isError = isErrorWhite || isErrorRequest || transactionData?.status == 0
  const isSuccess = isSuccessRequest && transactionData?.status == 1

  return {
    isLoading: isLoadingTransation || isLoading,
    error,
    isSuccess: isSuccess,
    data,
    isError,
    mint: write,
    isPrepareError,
    prepareError,
    isReady,
    reset,
    allowedToMint,
    isAddressNotQualify,
    isLoadingPrepare,
    mintData: initialMintData,
    quantity,
    enoughFounds,
  }
}
