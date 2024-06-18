//modulos
const express = require("express");
const routes = require("./routes");
const path = require("path");

const PORT = 3000;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, "public")));
app.use(routes);

app.set("views", path.resolve(__dirname, "src", "views"));
app.set("view engine", "ejs");

app.listen(PORT);



//TODO add module to convert json em array

//TODO finalisar api