
/**
 * Format API responses.
 * @param {Object} data - The raw data to format.
 * @returns {Object} - The formatted data.
 */
export function formatPostResponse(data) {
    return data.map(post => ({
      id: post.id,
      title: post.title,
      body: post.body,
    }));
  }
  