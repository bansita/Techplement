const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(
  `mongodb+srv://patrobansita2002:Bansita2002@cluster0.w1nn5nw.mongodb.net/chat?retryWrites=true&w=majority`,
  () => {
    console.log("connected to mongodb");
  }
);
