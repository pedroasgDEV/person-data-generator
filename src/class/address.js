class Address{
    //Atributes
    number = -1;
    street = "NOSTREET";
    city = "NOCITY";
    state = "NOSATATE";
    country = "NOCOUNTRY";
    description = "NODESCRIPTION";
    postcode = -1;

    //Constructor
    constructor (number = -1, street = "NOSTREET", city = "NOCITY", state = "NOSATATE", country = "NOCOUNTRY", postcode = -1){
        try {
            this.number = number;
            this.street = street;
            this.city = city;
            this.state = state;
            this.country = country
            this.postcode = postcode;
        }
        catch (e){
            throw new Error("ERRO: object cannot be created\n" + e);
        }

        this.description = this.toString();
    }

    //Methods
    toString() {
        return `${this.number}, ${this.street}, ${this.city}, ${this.state}, ${this.country}`;
    }

    //getters
    get description () { return this.description; }
    get number () { return this.number; }
    get street () { return this.street; }
    get city () { return this.city; }
    get state () { return this.state; }
    get country () { return this.country; }
    get postcode () { return this.postcode; }

    //Setters
    set number (number) {
        if(typeof number !== 'number') throw new TypeError("TYPE_ERRO: number is a number");
        this.number = number;
    }

    set street (street) {
        if(typeof street !== 'string') throw new TypeError("TYPE_ERRO: street is a string");
        this.street = street;
    }

    set city (city) {
        if(typeof city !== 'string') throw new TypeError("TYPE_ERRO: city is a string");
        this.city = city;
    }

    set state (state) {
        if(typeof state !== 'string') throw new TypeError("TYPE_ERRO: state is a string");
        this.state = state;
    }

    set country (country) {
        if(typeof country !== 'string') throw new TypeError("TYPE_ERRO: country is a string");
        this.country = country;
    }

    set postcode (postcode) {
        if(typeof postcode !== 'number') throw new TypeError("TYPE_ERRO: postcode is a number");
        this.postcode = postcode;
    }
}

exports.Address = Address;