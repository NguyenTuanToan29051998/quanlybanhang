export const formatCurrency = (currency: string): string => {
  if (currency.length === 0) {
    return '0'
  }
  const value = currency.split(',').join('')
  console.log(value, 'cur')
  currency = parseFloat(value).toLocaleString('en-US', {
    style: 'decimal',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  })
  return currency
}
