const passport = require("passport");

module.exports = {

  getLogin: (req, res) => {
    var isLoginFailed = typeof req.query.login_failed !== "undefined";
    if (isLoginFailed) {
      req.flash("validation_errors", [{ msg: "Login has failed." }]);
    }

    if ( req.user ) {
      return res.redirect("/");
    }

    res.render("login.ejs", {
      user: req.user,
      page_name : 'login',
    });
  },
  
  postLogin: [
    passport.authenticate("local", { failureRedirect: "/login?login_failed" }),
    (req, res) => {
      res.redirect("/");
    },
  ]

};
