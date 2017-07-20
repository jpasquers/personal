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
        var review = new Review({
            name: req.body.name,
            comment: req.body.comment,
            rating: req.body.rating
        })

        review.save(function(er, retReview) {
            if (err) {
                res.status(500).send('failed to create review');
            }

            res.status(200).send(retReview);
        })
    }
}