const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Product = require("./models/productModels");
const connectDB = require("./config/dbConnection");

const products = [
    { name: "Big Sticker 1", price: 99, category: "Big Stickers", image: "/images/img2.png", description: "cool sticker" },
    { name: "Big Sticker 2", price: 99, category: "Big Stickers", image: "/images/img2.png", description: "cool sticker" },
    { name: "Smal Sticker 1", price: 199, category: "Smal Stickers", image: "/images/img1.png", description: "cool sticker" },
    { name: "Smal Sticker 2", price: 199, category: "Smal Stickers", image: "/images/img1.png", description: "cool sticker" },
    { name: "Smal Sticker 3", price: 299, category: "Smal Stickers", image: "/images/img2.png", description: "cool sticker" },
    { name: "Smal Sticker 4", price: 299, category: "Smal Stickers", image: "/images/img2.png", description: "cool sticker" },
];

const seedDB = async () => {
    try {
        await connectDB();
        await Product.deleteMany();
        console.log("Gamla produkter borttagna ✓");
        await Product.insertMany(products);
        console.log("Produkter inlagda i databasen! ✓");
        process.exit();
    } catch (error) {
        console.log("Något gick fel:", error);
        process.exit(1);
    }
};

seedDB();