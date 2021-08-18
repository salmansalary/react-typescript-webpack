const configs = require("./configs");
const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 8080;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "../dist")));

// Handles any requests that don"t match the ones above
app.get("/configs", (req, res) => {
  res.json(configs);
});

app.get("*", (req, res, next) => {
  if (req.url === "/configs") {
    next();
  }
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(port, () => {
  console.log(`Server is up and listening to port ${port}`);
});
