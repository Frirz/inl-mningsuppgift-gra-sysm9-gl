const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Lägg till namn"],
    },
    price: {
        type: Number,
        required: [true, "Lägg till pris"],
    },
    category: {
        type: String,
        required: [true, "Lägg till kategori"],
    },
    image: {
        type: String,
    },
    description: {
        type: String,
        required: [true, "Lägg till beskrivning"],
    },
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);