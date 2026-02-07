export class Product {

/****************************************************
 * Product Model
 ****************************************************/
  public id: number; // Unique product identifier
  public title: string; // Product name|title
  public description: string; // Short product description
  public price: number; // Base price
  public discountPercentage: number; // Discount % applied to product
  public rating: number; // Product rating (0-5)
  public stock: number; // Available stock count
  public brand: string; // Product brand
  public category: string; // Product category
  public thumbnail: string; // Thumbnail image URL

/***************************************************************************
 * Constructor that initializes a Product instance using data from the API
 ***************************************************************************/
  constructor(
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string
  ) {
/****************************************************
 * Property Values
 ****************************************************/
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.discountPercentage = discountPercentage;
    this.rating = rating;
    this.stock = stock;
    this.brand = brand;
    this.category = category;
    this.thumbnail = thumbnail;
  }

/****************************************************
 * Calculate the final price after applying the discount
 ****************************************************/
  public getPriceWithDiscount(): number {
    const discountAmount = this.price * (this.discountPercentage / 100);
    const finalPrice = this.price - discountAmount;

/****************************************************
 * Return a currency-friendly number
 ****************************************************/
    return Number(finalPrice.toFixed(2));
  }

/****************************************************
 * Display formatted product details
 ****************************************************/
  public displayDetails(): void {
    console.log("Product Details");
    console.log("******************");
    console.log(`ID: ${this.id}`);
    console.log(`Title: ${this.title}`);
    console.log(`Brand: ${this.brand}`);
    console.log(`Category: ${this.category}`);
    console.log(`Price: $${this.price}`);
    console.log(`Discount: ${this.discountPercentage}%`);
    console.log(`Final Price: $${this.getPriceWithDiscount()}`);
    console.log(`Rating: ${this.rating}`);
    console.log(`Stock Available: ${this.stock}`);
    console.log(`Description: ${this.description}`);
  }
}
