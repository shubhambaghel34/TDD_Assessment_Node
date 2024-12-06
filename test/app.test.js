
import { expect } from 'chai';  
import calculateTotalPrice from '../app.js';


describe('Product Price Calculator', () => {

    // Apply a percentage discount correctly
    it('should apply a percentage discount correctly', () => {
      const result = calculateTotalPrice(100, 2, 0.1, 5);
      expect(result).to.equal(189);  // (100 - 10%) * 2 + 5 = 189
    });
    
    // Test: Apply a fixed amount discount correctly
    it('should apply a fixed amount discount correctly', () => {
        const result = calculateTotalPrice(50, 5, 20, 10);
        expect(result).to.equal(165);  // (50 - 20) * 5 + 10 = 165
      });
    
      // Test: Handle zero quantity
      it('should return 0 for zero quantity', () => {
        const result = calculateTotalPrice(100, 0, 0.1, 5);
        expect(result).to.equal(0);  // Invalid quantity (zero)
      });
    
      // Test: Handle negative quantity
      it('should return 0 for negative quantity', () => {
        const result = calculateTotalPrice(100, -2, 0.1, 5);
        expect(result).to.equal(0);  // Invalid quantity (negative)
      });
    
      // Test: Handle negative base price
      it('should return 0 for negative base price', () => {
        const result = calculateTotalPrice(-100, 2, 0.1, 5);
        expect(result).to.equal(0);  // Invalid base price (negative)
      });
    
      // Test: No discount applied, return correct total
      it('should return correct total with no discount applied', () => {
        const result = calculateTotalPrice(100, 2, 0, 5);
        expect(result).to.equal(210);  // (100 * 2) + 5 = 210
      });
    
      // Test: Handle a 100% discount (i.e., product is free)
      it('should return 0 when 100% discount is applied', () => {
        const result = calculateTotalPrice(100, 2, 1, 5);
        expect(result).to.equal(5);  // (100 - 100%) * 2 + 5 = 5
      });
    
      // Test: Handle 100% discount with no shipping fee
      it('should return 0 when 100% discount is applied and no shipping fee is given', () => {
        const result = calculateTotalPrice(100, 2, 1, 0);
        expect(result).to.equal(0);  // (100 - 100%) * 2 + 0 = 0
      });
  
  
  });
