const getHomePage = (req, res) => {
  res.render("index", { title: "just Me" });
};

module.exports = {
  getHomePage,
};
