import { Product } from "../models/product.model";

export class ProductRepository {
    data: Array<Product>;

    constructor() {
        this.data = [];
    }

    getAll = () => {
        return [...this.data];
    };

    getProduct = (productId: number) => {

        const product = this.data.find((_product) => _product.id === productId);

        if (!product) {
            throw new Error(`Product with productId '${productId}' not found!!'`);
        }

        return product;

    };
    add = (product: Product): void => {
        this.data = [...this.data, product];
    };

    update = (productId: number) => {
        const productToUpdateIndex = this.data.findIndex((_product) => _product.id === productId);
        return (product: Product) => {
            this.data[productToUpdateIndex] = product;
            return this.data[productToUpdateIndex];
        };
    };

    commit = () => {
        //this.db.collection['product'].set(this.data);
    };
}