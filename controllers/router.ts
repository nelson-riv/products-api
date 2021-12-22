import { Router } from "express";
import { Product } from "../models/product.model";
import { ProductController } from "./product.controller";

const routes = Router();

routes.get('/product', (_request, response) => {
    const products = ProductController.getAllProducts();
    response.status(200).send(products);
});

routes.get('/product/:productId', (request, response) => {
    const product = ProductController.getProduct(Number(request.params.productId));
    response.status(200).send(product);
});

routes.post('/product', (request, response) => {
    const parsedProduct = request.body as Product;
    ProductController.createProduct(parsedProduct);
    response.status(200).send();
});

routes.put('/product/:productId', (request, response) => {
    const parsedProduct = request.body as Product;
    const productId = Number(request.params.productId);
    const updatedProduct = ProductController.updateProduct(productId, parsedProduct);
    response.status(200).send(updatedProduct);
});
export default routes;