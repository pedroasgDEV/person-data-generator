//Modules
const Person = require("../class/person").Person;
const axios = require("axios");
const { json } = require("express/lib/response");

//links
const href = "https://randomuser.me/api/?nat=br&results="; //Link que gera person e retorna um json

//Faz a requisição no site
async function getRequest ( qnt = 1 ) {
    if(!Number.isInteger(qnt)) throw new TypeError("A qunatidade precisa ser um numero");
    const json = await axios(href + qnt); //Faz a requisição de um json com dados de person geradas aleatoriamente
    return json.data.results; //Retorna o que leu
}

//trata o json que foi requisitado
async function getPerson ( qnt = 1 ) {
    
    if(qnt == 0) return [];

    const jsonIn = await getRequest( qnt );
    const jsonOut = [];

    //Variavel temporaria
    let person;

    //Loop para processar o jsonIn
    for(let i = 0; i < jsonIn.length; i++){

        person = jsonIn[i];

        //Cria um obj Person e add ao final da string
        jsonOut.push(
            new Person (
                //name
                person.name.first + ' ' + person.name.last,
                //email
                person.email,
                //Phone
                person.phone,
                //Adress

                //Number
                person.location.street.number,
                //street
                person.location.street.name,
                //city,
                person.location.city,
                //state
                person.location.state,
                //countru
                person.location.country,
                //postcode
                person.location.postcode,

                //Img
                person.picture.large
            )
        )
    }

    return jsonOut;
}

exports.getPerson = getPerson

