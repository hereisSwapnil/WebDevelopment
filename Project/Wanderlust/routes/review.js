const express = require("express");
const router = express.Router({mergeParams: true});
// exporting wrapAsync function
const wrapAsync = require("../utils/wrapAsync");
// JOI Validation
const { reviewSchema } = require("../schema");
// exporting expressError class
const expressError = require("../utils/expressError");

// inporting models
const review = require("../models/review");
const listing = require("../models/listing")

// validateReview function
const validateReview = (req, res, next) => {
    const { rating, comment } = req.body;
    let result_ = reviewSchema.validate({
        rating,
        comment
    });
    if (result_.error) {
        throw new expressError(400, result_.error);
    } else {
        next();
    }
};

// POST: add review post request
router.post("/", validateReview, wrapAsync(async (req, res, next) => {
    const { rating, comment } = req.body;
    const newReview = new review({
        rating,
        comment
    })
    const listing_ = await listing.findById(req.params.id);
    listing_.reviews.push(newReview);
    await newReview.save();
    await listing_.save();
    console.log("New review saved successfully");
    res.redirect("/listings/" + req.params.id);
}))

// DELETE: delete review request
router.delete("/:review_id", wrapAsync(async (req, res) => {
    let { id, review_id } = req.params;
    await review.findByIdAndDelete(review_id);
    let listingData = await listing.findById(id);
    listingData.reviews = listingData.reviews.filter(review => review != review_id);
    await listingData.save();
    res.redirect(`/listings/${id}`);
}))

// Exporting router for index.js main file
module.exports = router;