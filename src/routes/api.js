const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
	res.send("API Endpoint");
});

router.post("/data", (req, res) => {
	const data = req.body;
	res.json({ message: "Data received", data });
});

module.exports = router;
