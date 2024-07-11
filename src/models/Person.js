//Modules
const mongoose = require("mongoose");

//Person schema
const PersonSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: {
        number: Number,
        street: String,
        city: String,
        state: String,
        country: String,
        description: String,
        postcode: Number
    },
    img: String,
    description: String,
    cpf: {
        cpf: String,
        description: String
    }
});

//Create the model
const Person = mongoose.model('Person', PersonSchema);

exports.Person = Person;