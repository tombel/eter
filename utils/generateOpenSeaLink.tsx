export function generateOpenSeaLink(address: string, tokenId: string, network: string): string {
  if (network === '5') {
    return `https://testnets.opensea.io/assets/goerli/${address}/${tokenId}`
  }

  return `https://opensea.io/assets/ethereum/${address}/${tokenId}`
}
