const express = require("express");
const multer = require("multer");
const path = require("path");

const imagesDataPath = path.join(__dirname, "../Images");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imagesDataPath);
  },

  filename: (req, file, cb) => {
    console.log(file);
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

module.exports = multer({ storage });
