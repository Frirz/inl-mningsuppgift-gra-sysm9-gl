const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Lägg till namn"],
    },
    email: {
        type: String,
        required: [true, "Lägg till email"],
        unique: true,
    },
    password: {
        type: String,
        required: [true, "Lägg till lösenord"],
    },
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);