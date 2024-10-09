const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const fetch = require('node-fetch'); 
const axios = require('axios');
const cors = require('cors');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, './front/build')));
app.use(cors());

// Route to handle pagination requests
app.get('/api/products', async (req, res) => {
    try {
      const page = parseInt(req.query.page) || 1;
      const pageSize = parseInt(req.query.pageSize) || 10;
      const CATEGORY = req.query.category || 'sports';
      // Fetch products from external API (Pixabay)
      const result = await axios.get(`https://pixabay.com/api/?key=25540812-faf2b76d586c1787d2dd02736&q=${CATEGORY}`);
      const products = result.data.hits; // Get the 'hits' array from Pixabay response
  
      // Calculate the start and end indexes for the requested page
      const startIndex = (page - 1) * pageSize;
      const endIndex = page * pageSize;
      
      // Paginate the products array based on the indexes
      const paginatedProducts = products.slice(startIndex, endIndex);
      
      // Calculate the total number of pages
      const totalPages = Math.ceil(products.length / pageSize);
      
      // Send the paginated products and total pages as the API response
      res.json({ products: paginatedProducts, totalPages });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).send({ error: 'Failed to fetch data' });
    }
  });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./front/build/index.html"));
});


app.listen(4000, () => {
  console.log('Server is running on port 4000');
});