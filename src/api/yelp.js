import axios from 'axios';

const YELP_API_KEY =
  'tDy8fQUc_xSUzNX3hHDip6gZskZlSO91gpQ3hBjvUubzHJq1EZr2kqFUirNYSDwzvVq8Cz8I2o_iUqNRkFzs1JiR45A4H9VtZXSmkKUZmE-GuxqwK28rEeV5E6_mXXYx';
export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: { Authorization: `Bearer ${YELP_API_KEY}` }
});
