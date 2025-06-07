const express = require("express");
const router = express.Router();
const {
  getHomepage,
  getSamplePage,
  getCreateUser,
  getUpdateUser,
  postCreateUser,
  postUpdateUser,
  postDeleteUser,
  postHandleDeleteUser
} = require("../controllers/homeController");
//khai bao route
router.get("/", getHomepage);
router.get("/sample", getSamplePage);
router.get("/create-user", getCreateUser);
router.get("/update/:id", getUpdateUser);

router.post("/create-user", postCreateUser);
router.post("/update-user", postUpdateUser);

router.post("/delete-user", postHandleDeleteUser);
router.post("/delete-user/:id", postDeleteUser);

module.exports = router;
