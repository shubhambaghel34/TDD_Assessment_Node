
import axios from 'axios';
import { DEV_URL } from '../config/apiConfig.js';

/**
 * Fetch posts from the JSONPlaceholder API.
 * @returns {Promise<Object[]>} - A promise that resolves to an array of posts.
 */
export async function fetchPosts() {
    try {
        const response = await axios.get(DEV_URL);

        switch (response.status) {
            case 200:
                return response.data;
            case 404:
                throw new Error('Posts not found (404)');
            case 500:
                throw new Error('Internal server error (500)');
            case 403:
                throw new Error('Forbidden (403)');
            default:
                throw new Error(`Unexpected error occurred: ${response.status}`);
        }
    } catch (error) {
        throw new Error('Could not fetch posts');
    }
}
