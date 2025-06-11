const { json } = require("express");
const connection = require("../config/database");
const {
  getAllUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../service/CRUDServices");
// const { get } = require("../routes/web");
const User = require("../models/User");
//GET HOME PAGEPAGE
const getHomepage = async (req, res) => {
  let results = await User.find({});
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

  await User.create({
    email: email,
    name: name,
    city: city,
  });
  res.send("Create user successfully!");
};
//GETGET CREATE USER

const getCreateUser = (req, res) => {
  return res.render("create.ejs");
};
//GETGET UPDATE USER
const getUpdateUser = async (req, res) => {
  const userId = req.params.id;
  // let user = await getUserById(userId);
  let user = await User.findById(userId).exec();
  res.render("edit.ejs", { user: user });
};

//POST UPDATE USER
const postUpdateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.name;
  let city = req.body.city;
  let userId = req.body.userId;

  await User.updateOne(
    { _id: userId },
    { email: email, name: name, city: city }
  );
  res.redirect("/");
};
//POST DELETE USER
const postDeleteUser = async (req, res) => {
  const userId = req.params.id;
  // let user = await getUserById(userId);
  let user = await User.findById(userId).exec();

  res.render("delete.ejs", { user: user });
};
const postHandleDeleteUser = async (req, res) => {
  const id = req.body.userId;
  // await deleteUserById(id);
  let result = await User.deleteOne({
    _id: id,
  });
  console.log("result", result);
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
