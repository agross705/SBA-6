/****************************************************
 * Import data
 ****************************************************/
import { Product } from "../models/Product.ts";

/****************************************************
 * Base URL for the DummyJSON Products API
 ****************************************************/
const API = "https://dummyjson.com/products";

/*******************************************************************************
 * Fetch all products from API and return a promise array of product instances
 *******************************************************************************/
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const response = await fetch(API);

/****************************************************
 * Handle non-OK HTTP responses
 ****************************************************/
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    const data = await response.json();

/****************************************************
 * Map raw API data to Product instances
 ****************************************************/
    const products = data.products.map(
      (product: any) =>
        new Product(
          product.id,
          product.title,
          product.description,
          product.price,
          product.discountPercentage,
          product.rating,
          product.stock,
          product.brand,
          product.category,
          product.thumbnail
        )
    );

    return products;
  } catch (error) {
    console.error("Failed to fetch products:", error);
    throw error;
  }
}
