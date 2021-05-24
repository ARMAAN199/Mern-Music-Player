const express = require("express");
const mongoose = require("mongoose");
const mainroutes = require("./routes/mainroutes");
const profileroutes = require("./routes/profileroutes");
const cors = require("cors");
const dotenv = require("dotenv");
const session = require("express-session");
const passport = require("passport");
const flash = require("connect-flash");
dotenv.config();

const app = express();
const port = 3763;

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
