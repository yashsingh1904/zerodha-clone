const { Schema } = require("mongoose");

const OrderaSchema = new Schema({

    name: String,
    qty: Number,
    price: Number,
    mode: String,




}

);

module.exports=OrderaSchema;