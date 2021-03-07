import express from 'express';
import bodyParser from 'body-parser';

const app = express();

//bodyParser

app.use(express.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//midleware

app.use(express.json());

//Router

import Product from './router/product.js';
import Location from './router/location.js';
import ProductMovement from './router/productMovement.js';

app.use('/api/product', Product);
app.use('/api/location', Location);
app.use('/api/movement', ProductMovement);

//Port to listen

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});