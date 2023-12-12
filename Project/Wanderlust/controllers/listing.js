const listing = require("../models/listing");
const review = require("../models/review");
// const cloudinary = require("../utils/cloudnary");
const cloudinary = require("cloudinary").v2;

module.exports.renderListing = async (req, res) => {
  let allListingData = await listing.find();
  console.log("Listing data fetched successfully");
  res.render("./listings/index", { allListings: allListingData });
};

module.exports.editListing = async (req, res) => {
  let listingData = await listing.findById(req.params.id);
  if (!listingData) {
    req.flash("error", "The listing you requested does not exit!");
    res.redirect("/listings");
  }
  let originalImageUrl = listingData.image.url;
  originalImageUrl = originalImageUrl.replace("/upload", "/upload/h_300");
  console.log("Listing data by id fetched successfully");
  res.render("./listings/edit", { listingData: listingData, originalImageUrl });
};

module.exports.renderAddListing = (req, res) => {
  res.render("./listings/new");
};

module.exports.renderSpecificListing = async (req, res) => {
  let listingData = await listing
    .findById(req.params.id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("owner");
  console.log("Listing data by id fetched successfully");
  if (!listingData) {
    req.flash("error", "The listing you requested does not exit!");
    res.redirect("/listings");
  }
  res.render("./listings/show", { listingData: listingData });
};

module.exports.addNewListing = async (req, res, next) => {
  const { title, description, price, location, country } = req.body;
  if (!req.file) {
    req.flash("error", "Please upload an image");
    return res.redirect("/listings");
  }
  const image = { url: req.file.path, filename: req.file.filename };
  const newListing = new listing({
    title,
    description,
    image,
    price,
    location,
    country,
  });
  newListing.owner = req.user._id;
  await newListing.save();
  console.log("New listing data saved successfully");
  req.flash("success", "New Listing added");
  res.redirect("/listings");
};

module.exports.editSpecificListing = async (req, res) => {
  let { title, description, price, location, country } = req.body;
  let listing_ = await listing.findByIdAndUpdate(req.params.id, {
    title,
    description,
    price,
    location,
    country,
  });
  if (typeof req.file !== "undefined") {
    listing_.image = { url: req.file.path, filename: req.file.filename };
    listing_.save();
  }
  console.log("Listing data updated successfully");
  req.flash("success", "Listing updated");
  res.redirect("/listings");
};

module.exports.deleteSpecificListing = async (req, res) => {
  const { id } = req.params;
  let listingData = await listing.findById(id);
  try {
    const publicId = listingData.image.filename;
    console.log(publicId);
    await cloudinary.uploader.destroy(publicId);
    console.log(`Deleted image from Cloudinary with public ID: ${publicId}`);
  } catch (e) {
    console.log(e);
  }
  listingData.reviews.forEach(async (review_id) => {
    await review.findByIdAndDelete(review_id);
  });
  await listing.findByIdAndDelete(id);
  console.log("Listing data deleted successfully");
  req.flash("success", "Listing deleted");
  res.redirect("/listings");
};
