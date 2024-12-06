import express from 'express';
import { calculateTotalPrice } from './services/priceCalculatorService.js';
import { fetchPosts } from './services/postsService.js';

const app = express();

app.get('/totalPrice', (req, res) => {
  const { basePrice, quantity, discount, shippingFee } = req.query;
  const price = calculateTotalPrice(
    parseFloat(basePrice),
    parseInt(quantity),
    parseFloat(discount),
    parseFloat(shippingFee)
  );
  res.json({ totalPrice: price });
});

app.get('/posts', async (req, res) => {
  try {
    const posts = await fetchPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});