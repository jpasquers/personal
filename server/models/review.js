var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var reviewSchema = new Schema({
    name: String,
    comment: String,
    rating: Number,
    date: {
        type: Date,
        default: Date.now
    }
})

var Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
