const { json } = require("express");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../service/CRUDServices");
// const { get } = require("../routes/web");

//GET HOME PAGEPAGE
const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results });
};
//GET HOME SAMPLESAMPLEPAGE

const getSamplePage = (req, res) => {
  res.render("sample.ejs");
};
//POST CREATE USER
const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;

  let [results, fields] = await connection.query(
    `INSERT INTO Users (email,name,city) VALUES (?,?,?)`,
    [email, name, city]
  );
  console.log("results", results);
  res.send("Create user successfully!");
};
//GETGET CREATE USER

const getCreateUser = (req, res) => {
  return res.render("create.ejs");
};
//GETGET UPDATE USER
const getUpdateUser = async (req, res) => {
  // const userId = req.params.id;
  // let [results, fields] = await connection.query(
  //   "select * from Users where id = ?",
  //   [userId]
  // );

  // let user = results && results.length > 0 ? results[0] : {};

  // res.render("edit.ejs", { user: user });
  const userId = req.params.id;
  let user = await getUserById(userId); // Sử dụng getUserById từ CRUDServices
  res.render("edit.ejs", { user: user });
};

//POST UPDATE USER
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;
  await updateUserById(email, name, city, userId);
  res.redirect("/");
};
//POST DELETE USER
const postDeleteUser = async (req, res) => {
  // const userId = req.params.id;
  // // let user = await getUserById(userId);
  // let [results, fields] = await connection.query(
  //   "select * from Users where id = ?",
  //   [userId]
  // );

  // let user = results && results.length > 0 ? results[0] : {};
  // res.render("delete.ejs", { user: user });
  const userId = req.params.id;
  let user = await getUserById(userId); // Sử dụng getUserById từ CRUDServices
  res.render("delete.ejs", { user: user });
};
const postHandleDeleteUser = async (req, res) => {
  const id = req.body.userId;
  await deleteUserById(id);
  res.redirect("/");
};
module.exports = {
  getHomepage,
  getSamplePage,
  postCreateUser,
  getCreateUser,
  getUpdateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleDeleteUser,
};
