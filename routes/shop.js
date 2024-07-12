const express = require("express");

const { getShop, addProduct, getProducts, getCart, getOrders } = require("../controllers/shopController");

const router = express.Router();

router.get("/", getShop);
router.get("/add-product", addProduct);
router.get("/products", getProducts);
router.get("/cart", getCart);
router.get("/orders", getOrders);

module.exports = router;
