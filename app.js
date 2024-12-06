function calculateTotalPrice(basePrice, quantity, discount, taxRate) {
    if (basePrice <= 0 || quantity <= 0) {
      return 0;
    }
  
    // percentage discount
    let discountAmount = 0;
    if (discount < 1) {
      discountAmount = basePrice * discount;  // Percentage discount
    } else {
      discountAmount = discount; // Fixed amount discount
    }
  
    const discountedPrice = basePrice - discountAmount;
  
    // total price before tax
    const totalBeforeTax = discountedPrice * quantity;
  
    // tax
    const taxAmount = totalBeforeTax * (taxRate / 100);
  
    //final price after adding tax
    return totalBeforeTax + taxAmount;
  }
  
  export default calculateTotalPrice;
  
