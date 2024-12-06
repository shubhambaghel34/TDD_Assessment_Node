import { DEV_URL } from "./config/constant.js";
import axios from 'axios';
/**
 * Calculate the total price for a product with discount and shipping fee.
 * @param {number} basePrice - The base price of the product.
 * @param {number} quantity - The quantity of the product being purchased.
 * @param {number} discount - The discount (percentage as a decimal or fixed discount).
 * @param {number} shippingFee - The shipping fee applied to the total price.
 * @returns {number} - The total price after applying the discount and adding the shipping fee.
 */
  export function calculateTotalPrice(basePrice, quantity, discount, shippingFee) {
    // Early return for invalid inputs
    if (basePrice <= 0 || quantity <= 0) return 0;  // Invalid base price or quantity
  
    // If discount is 100% (discount = 1), return only shipping fee if provided, else return 0
    if (discount === 1) {
      return shippingFee > 0 ? shippingFee : 0;
    }
  
    // If discount is a percentage (0 <= discount < 1), apply the percentage discount
    if (discount < 1) {
      const discountAmount = basePrice * discount;
      return (basePrice - discountAmount) * quantity + shippingFee;
    }
  
    // If discount is >= 1, treat it as a fixed discount amount
    return (basePrice - discount) * quantity + shippingFee;
  }
  

  /**
 * Function to fetch posts from JSONPlaceholder API.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of posts.
 */
  export async function fetchPosts() {
    try {
      const response = await axios.get(DEV_URL);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error("Error fetching posts:", error);
      throw new Error("Could not fetch posts");
    }
  }
  
  
  