const Cpf = require("./cpf").Cpf;
const Address = require("./address").Address;
class Person{

    //Atributes
    name = "NONAME";
    email = "NOEMAIL";
    phone = "NOCELL";
    address = {};
    img = "NOIMG";
    #cpf;

    //Methods
    constructor( name = "NONAME", email = "NOEMAIL", phone = "NOCELL", 
        number = -1, street = "NOSTREET", city = "NOCITY", state = "NOSATATE",
        country = "NOCOUNTRY", postcode = -1, img = "NOIMG" ) {
        try{
            this.name = name;
            this.email = email;
            this.phone = phone;
            this.address = new Address(number, street, city, state, country, postcode);
            this.img = img;
            this.#cpf = new Cpf();
        }
        catch(e){
            throw new Error("ERRO: object cannot be created\n" + e);
        } 
    }

    toString() {
        return `
        Name: ${this.name}\n
        CPF: ${this.#cpf.toString()}\n
        Email: ${this.email}\n
        phone: ${this.phone}\n
        Address: ${this.address.toString()}
        `
    }

    //Getters
    get name() { return this.name; }
    get email() { return this.email; }
    get phone() { return this.phone; }
    get address() { return this.address; }
    get img() { return this.img; }
    get cpf() { return this.#cpf.toString(); }

    //Setters
    set name( name = "NONAME" ) {
        if(typeof name !== "string") throw new TypeError("TYPE_ERRO: name is a string");
        else this.name = name;
    }

    set email( email = "NOEMAIL" ) {
        if(typeof email !== "string") throw new TypeError("TYPE_ERRO: email is a string");
        else this.email = email;
    }

    set phone( phone = "NOCELL" ) {
        if(typeof phone !== "string") throw new TypeError("TYPE_ERRO: phone is a string");
        else this.phone = phone;
    }

    set address( address = {} ) {  
        if(typeof address !== 'object') throw new TypeError("TYPE_ERRO: addres is a object");
        this.address = address;
    }

    set img( img = "NOCELL" ) {
        if(typeof img !== "string") throw new TypeError("TYPE_ERRO: img is a string");
        else this.img = img;
    }
}

exports.Person = Person;