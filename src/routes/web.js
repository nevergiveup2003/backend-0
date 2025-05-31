const express = require("express");
const router = express.Router();
const { getHomepage, getSamplePage } = require("../controllers/homeController");
//khai bao route
router.get("/", getHomepage);
router.get("/sample", getSamplePage);
module.exports = router;
