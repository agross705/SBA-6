export function calculateDiscount(
  price: number,
  discountPercentage: number,
): number {

/****************************************************
 * Guard against invalid price values
 ****************************************************/
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }

/****************************************************
 * Guard against invalid discount values
 ****************************************************/
  if (discountPercentage < 0 || discountPercentage > 100) {
    throw new Error("Discount percentage must be between 0 and 100");
  }

/*******************************************************
 * Calculate the discount amount of the returned price
 *******************************************************/
  const discountAmount = price * (discountPercentage / 100);
 
/****************************************************
 * Return a currency-friendly number
 ****************************************************/
  return Number(discountAmount.toFixed(2));
}
