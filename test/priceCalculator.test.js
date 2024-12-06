import { expect } from 'chai';
import { calculateTotalPrice } from '../services/priceCalculatorService.js';

describe('Price Calculator', () => {
  it('should calculate the total price with a percentage discount correctly', () => {
    const result = calculateTotalPrice(100, 2, 0.1, 5);
    expect(result).to.equal(185);  // (100 - 10%) * 2 + 5 = 185
  });

  it('should apply a fixed discount correctly', () => {
    const result = calculateTotalPrice(50, 5, 20, 10);
    expect(result).to.equal(160);  // (50 - 20) * 5 + 10 = 160
  });

  it('should return 0 for invalid quantity', () => {
    const result = calculateTotalPrice(100, 0, 0.1, 5);
    expect(result).to.equal(0);
  });

  it('should handle zero base price correctly', () => {
    const result = calculateTotalPrice(0, 2, 0.1, 5);
    expect(result).to.equal(0);
  });

  it('should handle 100% discount correctly', () => {
    const result = calculateTotalPrice(100, 2, 1, 5);
    expect(result).to.equal(5);  // 100% discount, only shipping fee
  });
});
