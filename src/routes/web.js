const express = require("express");
const {
  getHompage,
  getAbc,
  getCuongdeptrai,
  postCreateUser,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHompage);
router.get("checkabc", getAbc);
router.get("/cuongdeptrai", getCuongdeptrai);

router.post("/create-user", postCreateUser);

module.exports = router;
