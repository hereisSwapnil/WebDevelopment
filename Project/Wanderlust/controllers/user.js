// importing models
const User = require("../models/user");

module.exports.getSignUp = (req, res, next) => {
  res.render("listings/signup.ejs");
};

module.exports.signUp = async (req, res) => {
  try {
    let { username, password, email } = req.body;
    const newUser = new User({ email, username });
    const registeredUser = await User.register(newUser, password);
    console.log(registeredUser);
    req.login(registeredUser, (e) => {
      if (e) {
        next(e);
      }
      req.flash("success", "Welcome to Wanderlust!");
      res.redirect("/listings");
    });
  } catch (e) {
    req.flash("error", e.message);
    res.redirect("/signup");
  }
};

module.exports.login = async (req, res) => {
  req.flash("success", "Welcome back to Wanderlust! You are logged in!");
  let urlToBeRedirected = res.locals.redirectUrl || "/listings";
  res.redirect(urlToBeRedirected);
};

module.exports.logout = async (req, res, next) => {
  req.logOut((err) => {
    if (err) {
      next(err);
    }
    req.flash("success", "You are logged out!");
    res.redirect("/listings");
  });
};
