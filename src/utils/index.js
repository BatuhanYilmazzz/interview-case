export const priceNormalize = (balance) => {
  const returnString = balance.toFixed(2).toString().replace('.', ',');
  return returnString;
};

export const sumTotalPrice = (items) => {
  let totalPrice = items.reduce((a, b) => +a + +b.price, 0).toFixed(2);
  return totalPrice;
};
