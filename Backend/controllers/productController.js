const asyncHandler = require("express-async-handler");
const Product = require("../models/productModels");

const getAllProducts = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

const getProductById = asyncHandler(async (req, res) => {
    const product = await Product.findById(req.params.id);
    if (!product) {
        res.status(404);
        throw new Error("Produkten hittades inte!");
    }
    res.status(200).json(product);
});

module.exports = { getAllProducts, getProductById };