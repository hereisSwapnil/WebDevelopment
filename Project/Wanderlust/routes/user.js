const express = require("express");
const router = express.Router();
const User = require("../models/user");
const passport = require("passport");

// exporting wrapAsync function
const wrapAsync = require("../utils/wrapAsync");

// GET: login route
router.get("/login", (req, res, next) => {
  res.render("listings/login.ejs");
});

// importing middleware
const { saveRedirectUrl } = require("../middleware");

// importing controller
const { getSignUp, signUp, login, logout } = require("../controllers/user");

// GET: signup route
router.get("/signup", getSignUp);

// POST: signup functions
router.post("/signup", wrapAsync(signUp));

// POST: login functions
router.post(
  "/login",
  saveRedirectUrl,
  passport.authenticate("local", {
    failureRedirect: "/login",
    failureFlash: true,
  }),
  login
);

// POST: logout functions
router.get("/logout", logout);

module.exports = router;
