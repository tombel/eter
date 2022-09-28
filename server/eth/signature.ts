import { ethers } from 'ethers'

export const isValidAddress = (address: string): boolean => {
  return ethers.utils.isAddress(address)
}

const getSignatureId = (): string => {
  const randomUint256 = ethers.utils.randomBytes(32)
  return ethers.BigNumber.from(randomUint256)._hex
}

const getMessageHash = (
  wallet: string,
  signatureId: string,
  contractAddress: string,
  chainId: string,
): string => {
  return ethers.utils.keccak256(
    ethers.utils.defaultAbiCoder.encode(
      ['address', 'uint256', 'address', 'uint256'],
      [wallet, signatureId, contractAddress, chainId],
    ),
  )
}

export const getSignature = async (
  address: string,
): Promise<{ signature: string; signatureId: string }> => {
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY)
  const wallet = ethers.utils.getAddress(address)
  const signatureId = getSignatureId() //We don't require to keep track of the signatureId we have returned to each user as they can only mint as max as the amount configured for each wave
  const contractAddress = ethers.utils.getAddress(process.env.CONTRACT_ADDRESS)
  const chainId = process.env.CHAIN_ID
  const hash = getMessageHash(wallet, signatureId, contractAddress, chainId)
  const signature = await signer.signMessage(ethers.utils.arrayify(hash))
  return { signature, signatureId }
}
