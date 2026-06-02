const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Användare",
    },
    items: [{
        product: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Produkt",
        },
        name: { type: String, required: true },
        price: { type: Number, required: true },
        quantity: { type: Number, required: true },
    }],
    totalPrice: {
        type: Number,
        required: [true, "Lägg till totalpris"],
    },
    paymentMethod: {
        type: String,
        required: [true, "Lägg till betalningsmetod "],
    },
}, { timestamps: true });

module.exports = mongoose.model("Order", orderSchema);