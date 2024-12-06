
import { expect } from 'chai';  
import calculateTotalPrice from '../app.js';


describe('Product Price Calculator', () => {

    // Apply a percentage discount correctly
    it('should apply a percentage discount correctly', () => {
      const result = calculateTotalPrice(100, 2, 0.1, 5);
      expect(result).to.equal(189);  // (100 - 10%) * 2 + 5 = 189
    });
  
  
  });
