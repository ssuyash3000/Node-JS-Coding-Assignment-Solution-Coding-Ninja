// Import the necessary modules here

import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    //  Write your code here
    res.send(new ProductModel().fetchProducts());
  };
}
