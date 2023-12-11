const express = require("express");
const router = express.Router();
const upload = require("../utils/multer.js");

// exporting wrapAsync function
const wrapAsync = require("../utils/wrapAsync");

// middleware
const { isLoggedIn, isOwner, validateListing } = require("../middleware");

// controller
const {
  renderListing,
  editListing,
  renderAddListing,
  renderSpecificListing,
  addNewListing,
  editSpecificListing,
  deleteSpecificListing,
} = require("../controllers/listing");

// GET: listings route
router.get("/", wrapAsync(renderListing));

// GET: listings new add route
router.get("/new", isLoggedIn, wrapAsync(renderAddListing));

// GET: listings edit specific route
router.get("/:id/edit", isLoggedIn, isOwner, wrapAsync(editListing));

// GET: listings get specific route
router.get("/:id", isLoggedIn, wrapAsync(renderSpecificListing));

router.post(
  "/",
  isLoggedIn,
  upload.single("listingImage"),
  wrapAsync(addNewListing)
);

// PUT: edit specific listings
router.put(
  "/:id",
  isLoggedIn,
  isOwner,
  upload.single("listingImage"),
  validateListing,
  wrapAsync(editSpecificListing)
);

// DELETE: delete specific listings
router.delete("/:id", isLoggedIn, isOwner, wrapAsync(deleteSpecificListing));

// Exporting router for index.js main file
module.exports = router;
