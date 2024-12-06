
import { expect } from 'chai';  
import { calculateTotalPrice, fetchPosts } from '../app.js'
import axios from 'axios';
import sinon from 'sinon';


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

  describe('JSONPlaceholder API - Successful Response', () => {
    let axiosGetStub;
  
    const mockPosts = [
      { id: 1, title: 'Post 1', body: 'This is the first post' },
      { id: 2, title: 'Post 2', body: 'This is the second post' }
    ];
  
    beforeEach(() => {
      axiosGetStub = sinon.stub(axios, 'get').resolves({ data: mockPosts });
    });
  
    afterEach(() => {
      axiosGetStub.restore();
    });
  
    it('should fetch posts from JSONPlaceholder and return valid data', async () => {
      const posts = await fetchPosts();
      expect(posts).to.be.an('array');
      expect(posts).to.have.lengthOf(2);
      expect(posts[0]).to.have.property('id', 1);
      expect(posts[0]).to.have.property('title', 'Post 1');
    });
  });
  
  describe('JSONPlaceholder API - Empty Response', () => {
    let axiosGetStub;
  
    beforeEach(() => {
      axiosGetStub = sinon.stub(axios, 'get').resolves({ data: [] });
    });
  
    afterEach(() => {
      axiosGetStub.restore();
    });
  
    it('should return an empty array if the API returns no posts', async () => {
      const posts = await fetchPosts();
      expect(posts).to.be.an('array');
      expect(posts).to.have.lengthOf(0);
    });
  });
  
  describe('JSONPlaceholder API - Error Handling', () => {
    let axiosGetStub;
  
    beforeEach(() => {
      axiosGetStub = sinon.stub(axios, 'get').rejects(new Error('Network error'));
    });
  
    afterEach(() => {
      axiosGetStub.restore();
    });
  
    it('should throw an error if the API request fails', async () => {
      try {
        await fetchPosts();
      } catch (error) {
        expect(error.message).to.equal('Could not fetch posts');
      }
    });
  });
  
  describe('JSONPlaceholder API - Unexpected Data', () => {
    let axiosGetStub;
  
    const mockMalformedData = [
      { randomField: 'Random value', anotherField: 123 }
    ];
  
    beforeEach(() => {
      axiosGetStub = sinon.stub(axios, 'get').resolves({ data: mockMalformedData });
    });
  
    afterEach(() => {
      axiosGetStub.restore();
    });
  
    it('should handle malformed data from the API gracefully', async () => {
      const posts = await fetchPosts();
      expect(posts).to.be.an('array');
      expect(posts[0]).to.not.have.property('id');
    });
  });