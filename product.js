const express = require('express');
const app = express();
const axios = require('axios');
const PORT = 4000;

app.get('/products', async (req, res) => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/albums'
    );
    if (!data.length) throw new Error('No products found');
    res.status(200).send(data);
  } catch (err) {
    console.error(err.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is up and running on http://localhost:${PORT}`);
});
