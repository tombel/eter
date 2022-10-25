import { ethers } from 'ethers'

const provider = process.env.NEXT_PUBLIC_RPC_URL
  ? new ethers.providers.JsonRpcProvider(process.env.NEXT_PUBLIC_RPC_URL)
  : ethers.providers.getDefaultProvider(process.env.CHAIN_ID == '5' ? 'goerli' : null)

const getContract = (): ethers.Contract => {
  return new ethers.Contract(
    process.env.NEXT_PUBLIC_CONTRACT_ADDRESS ?? '',
    [
      'function indexWave() public view returns (uint256)',
      'function waveSingleTokenPrice() public view returns (uint256)',
      'function waveOwnerToClaimedCounts(address wallet, uint256 wave) public view returns (uint256)',
      'function checkMintAllowed(address _wallet, uint256 _amount) public view returns (bool)',
      'function waveMaxTokensToBuy() public view returns (uint256)',
    ],
    provider,
  )
}

const getSandContract = (): ethers.Contract => {
  return new ethers.Contract(
    process.env.NEXT_PUBLIC_SAND_CONTRACT_ADDRESS ?? '',
    ['function balanceOf(address) public view returns (uint)'],
    provider,
  )
}

export const getCurrentWaveIndex = async (): Promise<number> => {
  const contract: ethers.Contract = getContract()
  const currentWaveIndex = await contract.indexWave()
  return currentWaveIndex.toNumber()
}

export const getTokenPrice = async (): Promise<string> => {
  const contract: ethers.Contract = getContract()
  const tokenPrice = await contract.waveSingleTokenPrice()
  return ethers.utils.formatEther(tokenPrice)
}

export const getClaimedCount = async (address: string, waveIndex: number): Promise<number> => {
  const contract: ethers.Contract = getContract()
  const claimedCount = await contract.waveOwnerToClaimedCounts(address, waveIndex - 1)
  return claimedCount.toNumber()
}

export const checkMintAllowed = async (address: string, amount: number): Promise<boolean> => {
  const contract: ethers.Contract = getContract()
  return contract.checkMintAllowed(address, amount)
}

export const getWaveMaxTokensToBuy = async (): Promise<number> => {
  const contract: ethers.Contract = getContract()
  return (await contract.waveMaxTokensToBuy()).toNumber()
}

export const isValidAddress = (address: string): boolean => {
  return ethers.utils.isAddress(address)
}

const getSignatureId = (): string => {
  const randomUint256 = ethers.utils.randomBytes(32)
  return ethers.BigNumber.from(randomUint256)._hex
}

export const getSandBalance = async (address: string): Promise<string> => {
  const contract: ethers.Contract = getSandContract()
  const balance = await contract.balanceOf(address)
  return ethers.utils.formatEther(balance)
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
  const contractAddress = ethers.utils.getAddress(process.env.NEXT_PUBLIC_CONTRACT_ADDRESS)
  const chainId = process.env.CHAIN_ID
  const hash = getMessageHash(wallet, signatureId, contractAddress, chainId)
  const signature = await signer.signMessage(ethers.utils.arrayify(hash))
  return { signature, signatureId }
}
