// Importing required modules
const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const path = require("path");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const User = require("./models/user.js");

dotenv.config();

// importing router
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const usersRouter = require("./routes/user.js");

// exporting expressError class
const expressError = require("./utils/expressError");

// Initializing express app
const app = express();

// creating a express session
app.use(
  session({
    secret: process.env.SECRET, // a secret string used to sign the session ID cookie
    resave: false, // don't save session if unmodified
    saveUninitialized: false, // don't create session until something stored
    cookie: {
      httpOnly: true,
      maxAge: Date.now() + 7 * 24 * 60 * 60 * 1000,
      expires: 7 * 24 * 60 * 60 * 1000,
    },
    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URI,
    }),
  })
);

// using flash
app.use(flash());

// initializing passport
app.use(passport.initialize());
app.use(passport.session());
// passport middleware
passport.use(new LocalStrategy(User.authenticate()));

// use static serialize and deserialize of model for passport session support
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

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

app.use((req, res, next) => {
  res.locals.success = req.flash("success");
  res.locals.error = req.flash("error");
  res.locals.currUser = req.user;
  next();
});

// Setting up routes
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", usersRouter);

// Connecting MongoDB
main()
  .then((res) => {
    console.log("Connection established (Mongoose connection)");
  })
  .catch((err) => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URI);
}

// GET: Root path request
app.get("/", (req, res) => {
  res.send("Hey the server is working well!");
});

// app.get('/test-session', (req, res) => {
//   if (req.session.views) {
//     req.session.views++;
//     res.send(`You visited this page ${req.session.views} times`);
//   } else {
//     req.session.views = 1;
//     res.send('Welcome to this page for the first time!');
//   }
// });

// Creating an 404 page if none of the above conditions are met
app.all("*", (req, res, next) => {
  next(new expressError(404, "Page not found"));
});

// Creating a error handler
app.use((err, req, res, next) => {
  let { status = 500, message = "Something went wrong" } = err;
  // res.status(status).send(message);
  console.log(err);
  res.status(status).render("error", { message });
});

// Listening on port 8080
const port = 8080;
app.listen(port, () => {
  console.log("Server listening on port " + port);
});
