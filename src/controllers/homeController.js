const { json } = require("express");
const connection = require("../config/database");
const getHomepage = (req, res) => {
  let users = [];
  connection.query("SELECT * FROM Users;", function (err, results, fields) {
    users = results;
    console.log("results", results);

    // console.log("check users",users);
    // Render the homepage view
    res.send(JSON.stringify(users));
  });
};
const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};
module.exports = {
  getHomepage,
  getSamplePage,
};
