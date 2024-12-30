const express = require('express');
const {getHompage,getAbc,getCuongdeptrai} = require('../controllers/homeController');
const router = express.Router();

router.get('/',getHompage);
router.get('checkabc',getAbc);
router.get('/cuongdeptrai',getCuongdeptrai);

module.exports = router;