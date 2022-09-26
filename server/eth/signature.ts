import { ethers } from 'ethers'

export const isValidAddress = (address: string): boolean => {
  return ethers.utils.isAddress(address)
}

const getSignatureId = (): ethers.BigNumber => {
  const randomUint256 = ethers.utils.randomBytes(32)
  return ethers.BigNumber.from(randomUint256)
}

const getEthSignedMessageHash = (
  wallet: string,
  signatureId: ethers.BigNumber,
  contractAddress: string,
  chainId: string,
): string => {
  const messageHash = ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(
      ['address', 'uint256', 'address', 'uint256'],
      [wallet, signatureId, contractAddress, chainId],
    ),
  )
  const ethSignedMessageHash = ethers.utils.solidityKeccak256(
    ['string', 'bytes32'],
    ['\x19Ethereum Signed Message:\n32', messageHash],
  )
  return ethSignedMessageHash
}

export const getSignature = async (): Promise<string> => {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY)
  const wallet = await signer.getAddress()
  const signatureId = getSignatureId()
  const contractAddress = ethers.utils.getAddress(process.env.CONTRACT_ADDRESS)
  const chainId = process.env.RPC_NETWORK
  const hash = getEthSignedMessageHash(wallet, signatureId, contractAddress, chainId)
  const signature = await signer.signMessage(hash)
  return signature
}
