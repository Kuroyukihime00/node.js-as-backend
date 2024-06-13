// src/routes/apiRoutes.js

const express = require("express");
const router = express.Router();
const apiController = require("../controllers/apiController");

router.get("/", apiController.getApi);
router.post("/data", apiController.postData);

module.exports = router;
