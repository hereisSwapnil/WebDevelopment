module.exports.isLoggedIn = (req, res, next) => {
    console.log(req.user);
    if (!req.isAuthenticated()) {
        req.flash("error", "Not Logged in! Please login first")
        res.redirect("/login")
    }
    next();
}