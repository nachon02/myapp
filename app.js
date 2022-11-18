const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());

app.use(express.json());

app.get("/emercado-api/cart/buy", (req, res) => {
	res.sendFile("./emercado-api/cart/buy.json", {
		root: __dirname,
	});
});
app.get("/emercado-api/cats/cat", (req, res) => {
	res.sendFile("./emercado-api/cats/cat.json", {
		root: __dirname,
	});
});
app.get(`/emercado-api/sell/publish`, (req, res) => {
	res.sendFile(`./emercado-api/sell/publish.json`, {
		root: __dirname,
	});
});

app.get(`/emercado-api/cats_products/:catID`, (req, res) => {
	res.sendFile(`./emercado-api/cats_products/${req.params.catID}.json`, {
		root: __dirname,
	});
});

app.get(`/emercado-api/products/:prodId`, (req, res) => {
	res.sendFile(`./emercado-api/products/${req.params.prodId}.json`, {
		root: __dirname,
	});
});

app.get(`/emercado-api/products_comments/:commID`, (req, res) => {
	res.sendFile(`./emercado-api/products_comments/${req.params.commID}.json`, {
		root: __dirname,
	});
});

app.get(`/emercado-api/user_cart/:id`, (req, res) => {
	res.sendFile(`./emercado-api/user_cart/${req.params.id}`, {
		root: __dirname,
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`, `localhost:${port}`);
});
