// utils/format.ts
export const formatCurrency = (amount: number): string => {
  // Format the amount using the 'en-IN' locale for appropriate number formatting
  const formattedAmount = new Intl.NumberFormat('en-IN').format(amount);
  
  // Prefix with "Rs." and return the formatted value
  return `Rs. ${formattedAmount}`;
};
