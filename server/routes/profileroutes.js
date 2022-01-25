var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const User = require("../schema/userSchema");
const Artist = require("../schema/artistSchema");
const Song = require("../schema/songSchema");
const Pun_artist = require("../schema/pun_artist");
const Pun_song = require("../schema/pun_song");
const Playlist = require("../schema/playlist");
const Hinsong = require("../schema/hinsong");
const Hinartist = require("../schema/hinartist");
const Genre = require("../schema/genre");

const checkauthenticated = (req, res, next) => {
  if (req.user) return next();
  res.redirect("http://localhost:3000/login");
};
const checknotauthenticated = (req, res, next) => {
  if (!req.user) {
    return next();
  }
  res.redirect("http://localhost:3000/login");
};

router.get("/getartists", (req, res) => {
  Artist.find()
    .then((artists) => {
      res.send(artists);
    })
    .catch((err) => console.log(err));
});
router.get("/getpunartists", (req, res) => {
  // const artists_punSchema = new mongoose.Schema({}, { strict: false })
  // const artists_pun = mongoose.model('artists_pun', artists_punSchema)
  Pun_artist.find()
    .then((punartists) => {
      res.send(punartists);
    })
    .catch((err) => console.log(err));
});
router.get("/getplaylists", (req, res) => {
  Playlist.find()
    .then((artists) => {
      res.send(artists);
    })
    .catch((err) => console.log(err));
});
