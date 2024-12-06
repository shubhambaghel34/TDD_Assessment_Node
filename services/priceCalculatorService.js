
/**
 * Calculate the total price for a product with discount and shipping fee.
 * @param {number} basePrice - The base price of the product.
 * @param {number} quantity - The quantity of the product being purchased.
 * @param {number} discount - The discount (percentage as a decimal or fixed discount).
 * @param {number} shippingFee - The shipping fee applied to the total price.
 * @returns {number} - The total price after applying the discount and adding the shipping fee.
 */
export function calculateTotalPrice(basePrice, quantity, discount, shippingFee) {
    if (basePrice <= 0 || quantity <= 0) return 0;  // Invalid base price or quantity
  
    if (discount === 1) {
      return shippingFee > 0 ? shippingFee : 0;  // 100% discount
    }
  
    if (discount < 1) {
      const discountAmount = basePrice * discount;
      return (basePrice - discountAmount) * quantity + shippingFee;  // Percentage discount
    }
  
    // Fixed discount (amount)
    return (basePrice - discount) * quantity + shippingFee;
  }
  