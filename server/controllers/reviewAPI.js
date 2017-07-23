var Review = require('../models/review');

module.exports = {
    getReviews: (req,res) => {
        Review.find({}, function(err,reviews) {
            if (err) {
                res.status(500).send('request failed');
            }
            res.send(reviews);
        });
    },

    postReview: (req,res) => {
        var review = new Review(Object.assign({}, req.body));
        review.save(function(err, retReview) {
            if (err) {
                res.status(500).send('failed to create review');
            }

            res.status(200).send(retReview);
        })
    }
}