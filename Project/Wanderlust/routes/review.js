const express = require("express");
const router = express.Router({ mergeParams: true });
// exporting wrapAsync function
const wrapAsync = require("../utils/wrapAsync");

// middleware
const { validateReview, isReviewAuthor, isLoggedIn } = require("../middleware");

// importing controllers
const { addReview, deleteReview } = require("../controllers/review");

// POST: add review post request
router.post("/", isLoggedIn, validateReview, wrapAsync(addReview));

// DELETE: delete review request
router.delete(
  "/:review_id",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(deleteReview)
);

// Exporting router for index.js main file
module.exports = router;
