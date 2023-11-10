// Importing required modules
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const ejsMate = require("ejs-mate");

// JOI Validation
const listingSchema = require("./schema");

// exporting wrapAsync function
const wrapAsync = require("./utils/wrapAsync");

// exporting expressError class
const expressError = require("./utils/expressError");

// inporting models
const listing = require("./models/listing");

// Initializing express app
const app = express();

// setting ejs view engine
app.set("view engine", "ejs");
// setting up ejs mate
app.engine("ejs", ejsMate);
// setting views and public paths
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

// reading post requests data using urlencoding
app.use(express.urlencoded({ extended: true }));
// setting method override variable to be able to override post request to put, patch, delete and others
app.use(methodOverride("_method"));

// Connecting MongoDB
main()
  .then((res) => {
    console.log("Connection established (Mongoose connection)");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

// validateListing function
const validateListing = (req, res, next) => {
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

// Get Requests

app.get("/", (req, res) => {
  res.send("Hey the server is working well!");
});

app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    let allListingData = await listing.find();
    console.log("Listing data fetched successfully");
    // console.log(allListingData);
    res.render("./listings/index", { allListings: allListingData });
  })
);

app.get("/listings/new", (req, res) => {
  res.render("./listings/new");
});

app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let listingData = await listing.findById(req.params.id);
    console.log("Listing data by id fetched successfully");
    // console.log(listingData);
    res.render("./listings/edit", { listingData: listingData });
  })
);

app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let listingData = await listing.findById(req.params.id);
    console.log("Listing data by id fetched successfully");
    // console.log(allListingData);
    res.render("./listings/show", { listingData: listingData });
  })
);

// Post Requests

app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const { title, description, image, price, location, country } = req.body;
    const newListing = new listing({
      title,
      description,
      image,
      price,
      location,
      country,
    });
    await newListing.save();
    console.log("New listing data saved successfully");
    res.redirect("/listings");
  })
);

// PUT Requests

app.put(
  "/listings/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { title, description, image, price, location, country } = req.body;
    await listing.findByIdAndUpdate(req.params.id, {
      title,
      description,
      image,
      price,
      location,
      country,
    });
    console.log("Listing data updated successfully");
    res.redirect("/listings");
  })
);

// DELETE Requests

app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    await listing.findByIdAndDelete(req.params.id);
    console.log("Listing data deleted successfully");
    res.redirect("/listings");
  })
);

// app.get('/testListing', async (req, res) => {
//     let list = new listing(
//         {
//             title: "Farm house",
//             description: "This is a farm house",
//             price: 1200,
//             location: "New York, NY",
//             country: "United States"
//         }
//     )
//     // await listing.findOneAndDelete({title: "Farm house"});
//     // res.send("ok")
//     // list.save().then((res) =>{
//     //     console.log(res)
//     // }).catch((err) => {
//     //     console.log(err);
//     // })
// })

// Creating an 404 page if none of the above conditions are met
app.all("*", (req, res, next) => {
  next(new expressError(404, "Page not found"));
});

// Creating a error handler
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  // res.status(status).send(message);
  res.status(status).render("error", { message });
});

// Listening on port 8080
const port = 8080;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
