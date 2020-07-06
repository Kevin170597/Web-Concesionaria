const express = require("express");
const router = express.Router();

const autosControllers = require("../controllers/autosControllers")

router.get("/", autosControllers.index);
router.get("/:id", autosControllers.marca);

module.exports = router