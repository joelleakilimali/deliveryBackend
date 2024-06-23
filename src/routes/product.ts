import express from 'express';

//const product = require("../models/product");
//const Product = require("../models/product");
import multer from 'multer';

export const productRouter = express.Router();
const upload = multer({ dest: 'uploads/' });
/**
 * @method: GET
 * @description: get all the products
 * @url : http://localhost:3001/products/
 */

// router.get("/", productController.product_get_all);

/**
 * @method: GET
 * @description: Getting a specific products
 * @url : http://localhost:3001/products/
 */
// router.get('/:productId', productController.product_get_by_id);

/**
 * @method: Patch
 * @description: updating a specific products
 * @url : http://localhost:3001/products/:productId
 */

// router.patch('/:productId', productController.product_updated);

/**
 * @method: Delete
 * @description: Delete a specific products
 * @url : http://localhost:3001/products/:productId
 */

// router.delete('/:productId', productController.product_deleted);

/**
 * @method: Post
 * @description: Create a products
 * @url : http://localhost:3001/products/
 */

// router.post(
//   '/',
//
//   upload.single('productImage'),
//   productController.product_created,
// );

/**
 * @method : Get
 * @description: get products by categories
 * @url : http://localhost:3001/products/categories
 */
// router.post('/cat', productController.product_getBycategory);
