const mongoose = require('mongoose');

const Products = mongoose.model('Product', {
    mark: String,
    image: String,
    name: String,
    description: String,
    price: Number,
})

module.exports = Products;