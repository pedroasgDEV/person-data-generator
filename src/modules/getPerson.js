//Modules
const Person = require("../classes/Person").Person;
const axios = require("axios");
const PersonModel = require("../models/Person").Person;

//links
const href = "https://randomuser.me/api/?nat=br&results=";

//Api request
async function getRequest ( qnt = 1 ) {
    if(!Number.isInteger(qnt)) throw new TypeError("A qunatidade precisa ser um numero");
    const json = await axios(href + qnt);
    return json.data.results;
}

//Json process
async function getPerson ( qnt = 1 ) {
    
    if(qnt > 1000) throw new Error("ERRO: 1000 is the limit request");

    if(qnt == 0) return [];

    const jsonIn = await getRequest( qnt );
    const jsonOut = [];

    let person;

    for(let i = 0; i < jsonIn.length; i++){

        person = jsonIn[i];

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

    PersonModel.create(jsonOut)

    return jsonOut;
}

exports.getPerson = getPerson

