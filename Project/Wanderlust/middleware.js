// model
const listing = require("./models/listing");
const review = require("./models/review");
// JOI Validation
const { listingSchema, reviewSchema } = require("./schema");
// exporting expressError class
const expressError = require("./utils/expressError");

module.exports.isLoggedIn = (req, res, next) => {
  if (!req.isAuthenticated()) {
    req.session.redirectUrl = req.originalUrl;
    req.flash("error", "Not Logged in! Please login first");
    return res.redirect("/login");
  }
  next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

module.exports.isOwner = async (req, res, next) => {
  let id = req.params.id;
  let listing_ = await listing.findById(id);
  if (res.locals.currUser && !listing_.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not authorised");
    return res.redirect(`/listings/${id}`);
  }
  next();
};

module.exports.validateListing = (req, res, next) => {
  const { title, description, image, price, location, country } = req.body;
  let result = listingSchema.validate({
    title,
    description,
    image,
    price,
    location,
    country,
  });
  if (result.error) {
    throw new expressError(400, result.error);
  } else {
    next();
  }
};

module.exports.validateReview = (req, res, next) => {
  const { rating, comment } = req.body;
  let result_ = reviewSchema.validate({
    rating,
    comment,
  });
  if (result_.error) {
    throw new expressError(400, result_.error);
  } else {
    next();
  }
};

module.exports.isReviewAuthor = async (req, res, next) => {
  let { id, review_id } = req.params;
  let review_ = await review.findById(review_id);
  if (res.locals.currUser && !review_.author.equals(res.locals.currUser._id)) {
    req.flash("error", "You are not authorised");
    return res.redirect(`/listings/${id}`);
  }
  next();
};
