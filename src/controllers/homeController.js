const getHomepage = (req, res) => {
  // Render the homepage view
  res.send("Welcome to the Home Page!");
};
const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getSamplePage,
};
