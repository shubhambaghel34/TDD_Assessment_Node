
/**
 * Format error messages to make them more user-friendly.
 * @param {Error} error - The error object to format.
 * @returns {string} - The formatted error message.
 */
export function formatErrorMessage(error) {
    if (error.response) {
      return `${error.response.status} - ${error.response.statusText}`;
    }
    return error.message || 'Unknown error';
  }
  