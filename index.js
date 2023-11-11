const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => res.send("Hello!! App Is Running"));

app.listen(PORT, () => console.log(`App Running on Port ${PORT}`));
