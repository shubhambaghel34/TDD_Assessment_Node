import { expect } from 'chai';
import { formatErrorMessage } from '../utils/errorHandler.js';

describe('Error Handler', () => {
  it('should format the error message correctly for network errors', () => {
    const error = new Error('Network error');
    const message = formatErrorMessage(error);
    expect(message).to.equal('Network error');
  });

  it('should format the error message correctly for HTTP response errors', () => {
    const error = {
      response: { status: 404, statusText: 'Not Found' },
    };
    const message = formatErrorMessage(error);
    expect(message).to.equal('404 - Not Found');
  });

  it('should return default message for unknown errors', () => {
    const error = {};
    const message = formatErrorMessage(error);
    expect(message).to.equal('Unknown error');
  });
});
