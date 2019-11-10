const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

routes.get('/products',ProductController.index);
routes.get('/products/:id',ProductController.show);
routes.get('/products/destroy/:id',ProductController.destroy)
routes.post('/products',ProductController.store);
routes.put('/products/update/:id',ProductController.update)

module.exports = routes;

