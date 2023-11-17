const express = require("express");
const router = express.Router();
const User = require('../models/user')
const passport = require('passport')

// exporting wrapAsync function
const wrapAsync = require("../utils/wrapAsync");

// inporting models
const user = require("../models/user");

// GET: login route
router.get("/login", (req, res, next) => {
    res.render("listings/login.ejs")
})

// GET: signup route
router.get("/signup", (req, res, next) => {
    res.render("listings/signup.ejs")
})

// POST: signup functions
router.post("/signup", wrapAsync(async (req, res) => {
    try {
        let { username, password, email } = req.body;
        const newUser = new User({ email, username })
        const registeredUser = await User.register(newUser, password)
        console.log(registeredUser);
        req.login(registeredUser, (e) => {
            if (e) {
                next(e)
            }
            req.flash("success", "Welcome to Wanderlust!")
            res.redirect("/listings")
        })
    }
    catch (e) {
        req.flash("error", e.message)
        res.redirect("/signup")
    }
}))

// POST: login functions
router.post('/login',
    passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }),
    async (req, res) => {
        req.flash("success", "Welcome back to Wanderlust! You are logged in!")
        res.redirect("/listings")
    });

// POST: logout functions
router.get('/logout',
    async (req, res, next) => {
        req.logOut((err) => {
            if (err) {
                next(err)
            }
            req.flash("success", "You are logged out!")
            res.redirect("/listings")
        })
    });

module.exports = router;