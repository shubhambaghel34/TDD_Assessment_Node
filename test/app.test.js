
import { expect } from 'chai';  
import calculateTotalPrice from '../app.js';


describe('Product Price Calculator', () => {

    it('should apply a percentage discount correctly', () => {
      const result = calculateTotalPrice(100, 2, 0.1, 5);
      expect(result).to.equal(185);  // (100 - 10%) * 2 + 5 = 185
    });
  
    it('should apply a fixed amount discount correctly', () => {
      const result = calculateTotalPrice(50, 5, 20, 10);
      expect(result).to.equal(160);  // (50 - 20) * 5 + 10 = 160
    });
  
    it('should return 0 for zero quantity', () => {
      const result = calculateTotalPrice(100, 0, 0.1, 5);
      expect(result).to.equal(0);  // Invalid quantity (zero)
    });
  
    it('should return 0 for negative quantity', () => {
      const result = calculateTotalPrice(100, -2, 0.1, 5);
      expect(result).to.equal(0);  // Invalid quantity (negative)
    });
  
    it('should return 0 for negative base price', () => {
      const result = calculateTotalPrice(-100, 2, 0.1, 5);
      expect(result).to.equal(0);  // Invalid base price (negative)
    });
  
    it('should return correct total with no discount applied', () => {
      const result = calculateTotalPrice(100, 2, 0, 5);
      expect(result).to.equal(205);  // (100 * 2) + 5 = 205
    });
  
    it('should return correct total with 100% discount applied', () => {
      const result = calculateTotalPrice(100, 2, 1, 5);
      expect(result).to.equal(5);  // (100 - 100%) * 2 + 5 = 5
    });
  
    it('should return 0 when 100% discount is applied and no shipping fee is given', () => {
      const result = calculateTotalPrice(100, 2, 1, 0);
      expect(result).to.equal(0);  // (100 - 100%) * 2 + 0 = 0
    });
  
  });
