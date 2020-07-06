const express = require("express");
const router = express.Router();

const homePageControllers = require("../controllers/homePageControllers")

router.get("/", homePageControllers.index);

module.exports = router