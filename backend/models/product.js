const mongoose = require('mongoose');
const {Schema} = mongoose;

const ProductSchema = new Schema({
    code: {type: Number, required: true},
    name: {type: String, required: true},
    price: {type: Number, required: true},
    brand: {type: String, required: true},
    type: {type: String, required: true},
    lastPrice: {type: Number},
    offer: {type: Boolean},
    characteristics: {
        model: {type: String, required: true}
    },
    quantity: {type: Number, required: true},
    image: {type: String},
    description: {type:String, required: true}
});

module.exports = mongoose.model('Product', ProductSchema);