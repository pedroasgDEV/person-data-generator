//Modules
const Person = require("../class/person").Person;
const axios = require("axios");

//links
const href = "https://randomuser.me/api/?results="; //Link que gera person e retorna um json

//Faz a requisição no site
async function getPerson ( qnt ) {
    if(!Number.isInteger(qnt)) throw new TypeError("A qunatidade precisa ser um numero");
    const json = await axios(href + qnt); //Faz a requisição de um json com dados de person geradas aleatoriamente
    return json.data.results; //Retorna o que leu
}

exports.getPerson = getPerson