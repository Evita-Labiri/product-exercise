const mongoose = require('mongoose');

const Schema = mongoose.Schema;

let prodSchema = new Schema({
    product: {type: String, required: true},
    cost: {type: Number, require: true},
    description: {type: String, require: false},
    quantity: {type: Number, require: true} 
},
{
    collection: products
});

module.exports = mongoose.exports('Product', prodSchema);