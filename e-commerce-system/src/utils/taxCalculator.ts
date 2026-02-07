/****************************************************
 * Tax Rates
 ****************************************************/
const StandardTaxRate = 4.75; // Applied to most products
const GroceryTaxRate = 3; // Applied to groceries

export function calculateTax(price: number, category: string): number {

/****************************************************
 * Guard against invalid price values
 ****************************************************/
  if (price < 0) {
    throw new Error("Price cannot be negative");
  }
 
/*******************************************************
 * Convert category to all lowercase and stores result
 *******************************************************/
  const normalizedCategory = category.toLowerCase();

/****************************************************
 * Determine which tax rate to apply
 ****************************************************/
  let taxRate;

  if (normalizedCategory === "groceries") {
    taxRate = GroceryTaxRate;
  } else {
    taxRate = StandardTaxRate;
  }

/****************************************************
 * Calculate the tax amount of the returned price
 ****************************************************/
  const taxAmount = price * (taxRate / 100);

/****************************************************
 * Return a currency-friendly number
 ****************************************************/
  return Number(taxAmount.toFixed(2));
}
