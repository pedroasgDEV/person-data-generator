//Modules
const express = require("express");
const routes = require("./routes");
const path = require("path");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

//Server params
const PORT = 3000;
const app = express();

//Database conection
dotenv.config();
const url = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@person-data-generator.ckosrqe.mongodb.net/?retryWrites=true&w=majority&appName=person-data-generator`;
mongoose.connect(url);



app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(PORT);



//TODO add module to convert json em array

//TODO finalisar api