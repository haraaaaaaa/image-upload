const express = require("express");
const multer = require("multer");
const uploadImage = require("../middlewares/upload-image");

const router = express.Router();

router.get("/images/upload", (req, res) => {
  res.render("upload-image");
});

router.post("/images/upload", uploadImage.single("image"), (req, res) => {
  res.status(201).send("Image Uploaded!");
});

module.exports = router;
