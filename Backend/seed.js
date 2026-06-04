const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Product = require("./models/productModels");
const connectDB = require("./config/dbConnection");

const products = [
    { name: "Big Tattoo 1", price: 99, category: "Big Tattoo", image: "/images/img2.png", description: "cool tattoo" },
    { name: "Big Tattoo 2", price: 99, category: "Big Tattoo", image: "/images/img2.png", description: "cool tattoo" },
    { name: "Smal Tattoo 1", price: 199, category: "Smal Tattoo", image: "/images/img1.png", description: "cool tattoo" },
    { name: "Smal Tattoo 2", price: 199, category: "Smal Tattoo", image: "/images/img1.png", description: "cool tattoo" },
    { name: "Smal Tattoo 3", price: 299, category: "Smal Tattoo", image: "/images/img2.png", description: "cool tattoo" },
    { name: "Smal Tattoo 4", price: 299, category: "Smal Tattoo", image: "/images/img2.png", description: "cool tattoo" },
];

const seedDB = async () => {
    try {
        await connectDB();
        await Product.deleteMany();
        console.log("Gamla produkter borttagna");
        await Product.insertMany(products);
        console.log("Produkter inlagda i databasen!");
        process.exit();
    } catch (error) {
        console.log("Något gick fel:", error);
        process.exit(1);
    }
};

seedDB();