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

//TODO reformular as rotas e add render
//TODO add viwer
//TODO add module to convert json em array
//TODO finalisar frontend
//TODO finalisar api
//TODO integrar tudo
//TODO finalizar o gerador de pessoas que mostra os dados das pessoas com imageem  