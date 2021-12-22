import { Product } from "../models/product.model";
import { ProductRepository } from "../repository/product.repository";

export class ProductController {
    static productRepository = new ProductRepository();
    static getAllProducts = (): Array<Product> => {
        return ProductController.productRepository.getAll();
    };
    static getProduct = (productId: number) => {
        return ProductController.productRepository.getProduct(productId);
    };

    static createProduct = (product: Product) => {
        ProductController.productRepository.add(product);
    };

    static updateProduct = (productId: number, product: Product) => {
        return ProductController.productRepository.update(productId)(product);
    };
}

