const express = require("express");
const path = require("path");
const morgan = require("morgan");
const port = process.env.PORT || 8080;
const app = express();

app.use(morgan("dev"));
app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "build")));

app.get("/ping", (req, res) => {
  return res.send("pong");
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => console.log(`>> Server on port ${port}`));
