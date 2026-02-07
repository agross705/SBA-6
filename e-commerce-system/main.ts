/****************************************************
 * Import data
 ****************************************************/
import { fetchAllProducts } from "./src/services/apiService";
import { calculateDiscount } from "./src/utils/discountCalculator.ts";
import { calculateTax } from "./src/utils/taxCalculator.ts";
import { normalizeError, logError } from "./src/utils/errorHandler.ts";
import { Product } from "./src/models/Product.ts";

/****************************************************
 * Run the main application flow
 ****************************************************/
async function runApp(): Promise<void> {
  try {
    console.log("Fetching products...\n");

/****************************************************
 * Fetch products
 ****************************************************/
    const products: Product[] = await fetchAllProducts();

/****************************************************
 * Display a summary for each product
 ****************************************************/
    products.forEach((product) => {
      const discountAmount = calculateDiscount(
        product.price,
        product.discountPercentage
      );

      const discountedPrice = product.getPriceWithDiscount();

      const taxAmount = calculateTax(
        discountedPrice,
        product.category
      );

      const finalPrice = Number(
        (discountedPrice + taxAmount).toFixed(2)
      );

      console.log("*********************************");
      product.displayDetails();
      console.log(`Discount Amount: $${discountAmount}`);
      console.log(`Tax Amount: $${taxAmount}`);
      console.log(`Final Price (after tax): $${finalPrice}`);
      console.log("*********************************\n");
    });
  } catch (error) {

/*****************************************************
 * Convert unknown errors into a consistent AppError
 *****************************************************/
    const appError = normalizeError(error);
    logError(appError);
  }
}

runApp();
