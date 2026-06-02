const asyncHandler = require("express-async-handler");
const Order = require("../models/orderModels");

const createOrder = asyncHandler(async (req, res) => {
    const { items, totalPrice, paymentMethod } = req.body;

    if (!items || !totalPrice || !paymentMethod) {
        res.status(400);
        throw new Error("Fyll i alla fält!");
    }

    const order = await Order.create({
        user: req.user.id,
        items,
        totalPrice,
        paymentMethod,
    });

    if (order) {
        res.status(201).json(order);
    } else {
        res.status(400);
        throw new Error("Något gick fel med ordern!");
    }
});

const getOrder = asyncHandler(async (req, res) => {
    const orders = await Order.find({ user: req.user.id });
    res.status(200).json(orders);
});

module.exports = { createOrder, getOrder };