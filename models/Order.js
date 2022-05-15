const mongoose = require('mongoose')

const OrderSchema = new mongoose.Schema({
    title: { type: String, required: true, unique: true },
    desc: { type: String, required: true, unique: true },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: String },
    color: { type: String },
    price: { type: String, required: true }
},
    { timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);