import express from "express"
import * as productController from "../controllers/product.controller"

const product_router = express.Router()

product_router
    .get("/", productController.getProducts)
    .post("/add-product", productController.addProduct)
    .put("/update-product/:id", productController.updateProduct)
    .delete("/delete-product/:id", productController.deleteProduct)

export default product_router