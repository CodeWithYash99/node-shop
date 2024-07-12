const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const app = express();

const shopRoutes = require("./routes/shop");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(shopRoutes);

app.listen(8000, () => {
  console.log("Server is running on 8000");
});
