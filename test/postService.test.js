import { expect } from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import { fetchPosts } from '../services/postsService.js';

describe('Post Service', () => {
  let axiosGetStub;

  afterEach(() => {
    axiosGetStub.restore();
  });

  it('should fetch posts successfully with status 200', async () => {
    const mockPosts = [{ id: 1, title: 'Test Post' }];
    axiosGetStub = sinon.stub(axios, 'get').resolves({ status: 200, data: mockPosts });

    const posts = await fetchPosts();
    expect(posts).to.be.an('array').that.is.not.empty;
    expect(posts[0]).to.have.property('id', 1);
  });

  it('should handle a 404 error gracefully', async () => {
    axiosGetStub = sinon.stub(axios, 'get').resolves({ status: 404, data: [] });

    try {
      await fetchPosts();
    } catch (error) {
      
      expect(error.message).to.equal('Could not fetch posts');
    }
  });


  it('should handle a network error gracefully', async () => {
    axiosGetStub = sinon.stub(axios, 'get').rejects(new Error('Network error'));

    try {
      await fetchPosts();
    } catch (error) {
      expect(error.message).to.equal('Could not fetch posts');
    }
  });
});
