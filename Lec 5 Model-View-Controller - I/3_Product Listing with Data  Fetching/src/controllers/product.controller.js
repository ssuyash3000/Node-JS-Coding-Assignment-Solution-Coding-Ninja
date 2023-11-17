// Please don't change the pre-written code
// Import the necessary modules here

import ProductModel from "../models/product.model.js";

export default class ProductController {
  getProducts = (req, res) => {
    // Write your code here
    const products = new ProductModel().fetchProducts();

    //const viewPath = path.join(path.resolve(), "src", "views", "product.ejs");
    //res.sendFile(viewPath);
    return res.render("product", { products });
  };
}
