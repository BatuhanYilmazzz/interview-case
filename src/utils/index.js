export const priceNormalize = (balance) => {
  const returnString = balance.toFixed(2).toString().replace('.', ',');
  return returnString;
};
