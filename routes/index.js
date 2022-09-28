module.exports = {

  getHomePage: (req, res) => {
    res.render("index.ejs", {
      user: req.user,
      page_name : 'home',
    });
  }
  
};
