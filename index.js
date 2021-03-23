const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json("welcome to nodejs");
});

app.listen(3000, () => console.log("app is running"));
