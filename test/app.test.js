
import { expect } from 'chai';  
import calculateTotalPrice from '../app.js';

describe('Product Price Calculator', () => {
  it('should apply a percentage discount correctly', () => {
    const result = calculateTotalPrice(100, 2, 0.1, 5);
    expect(result).to.equal(189);
  });

  it('should apply a fixed amount discount correctly', () => {
    const result = calculateTotalPrice(50, 5, 20, 10);
    expect(result).to.equal(165);
  });

  it('should handle zero or negative quantity', () => {
    const result = calculateTotalPrice(100, 0, 0.1, 5);
    expect(result).to.equal(0);

    const result2 = calculateTotalPrice(100, -2, 0.1, 5);
    expect(result2).to.equal(0);
  });

  it('should return 0 for invalid input (negative base price)', () => {
    const result = calculateTotalPrice(-100, 2, 0.1, 5);
    expect(result).to.equal(0);
  });

  it('should return correct total with no discount applied', () => {
    const result = calculateTotalPrice(100, 2, 0, 5);
    expect(result).to.equal(210);
  });
});
