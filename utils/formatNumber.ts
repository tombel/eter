export function formatNumber(number: string | number, precision = 0): string {
  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
    minimumFractionDigits: precision,
  }).format(Number(number))
}
