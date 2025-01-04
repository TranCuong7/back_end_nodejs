const express = require("express");
const {
  getHompage,
  getAbc,
  getCuongdeptrai,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
} = require("../controllers/homeController");
const router = express.Router();

router.get("/", getHompage);
router.get("checkabc", getAbc);
router.get("/cuongdeptrai", getCuongdeptrai);

router.get("/create", getCreatePage);
router.get("/update/:id", getUpdatePage);

router.post("/create-user", postCreateUser);

module.exports = router;
