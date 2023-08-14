const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
app.use(cors());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// routes
const getImages = require("./routes/get-images");
const uploadImage = require("./routes/upload-image");

app.use(getImages);
app.use(uploadImage);

app.listen(5000, () => console.log("Server is running on Port 5000!"));
