// src/controllers/apiController.js

exports.getApi = (req, res) => {
	res.send("API Endpoint");
};

exports.postData = (req, res) => {
	const data = req.body;
	res.json({ message: "Data received", data });
};
