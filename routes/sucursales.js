const express = require("express");
const router = express.Router();

const sucursalesControllers = require("../controllers/sucursalesControllers")

router.get("/", sucursalesControllers.index);
router.get("/:id", sucursalesControllers.sucursal);

module.exports = router