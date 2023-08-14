const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const router = express.Router();

router.get("/images", (req, res) => {
  const imagesDataPath = path.join(__dirname, "../Images");

  fs.readdir(imagesDataPath, (err, images) => {
    if (err) return res.send("Error occurred");

    const imagesData = images.map((image) => image);

    res.status(201).render("get-images", { imagesData });
  });
});

module.exports = router;
