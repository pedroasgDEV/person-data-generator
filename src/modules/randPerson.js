//Modules
const fs = require("fs").promises;
const Person = require("../class/person").Person;
const path = require("path");
const getPerson = require("./getPerson").getPerson;
const file = path.resolve(__dirname, '..', '..', 'public', 'docs', 'randPerson.json');

//Write in local .json
async function gravaArquivo ( json ) {
    const format = JSON.stringify(json, '', 2); 
    return await fs.writeFile(file, format, { flag : 'w'});
}

//Write file
function writeFile ( qnt = 1 ) {
    return getPerson(qnt) 
    .then(json => gravaArquivo(json))
    .catch(e => console.error(e));
}

//Read file
async function readFile_Json () {
    const json = await fs.readFile(file, 'utf8');
    return JSON.parse(json);
}

//Update file
async function updateFile ( qnt = 0 ) {
    const jsonIn = await readFile_Json();
    const jsonAdd = await getPerson(qnt);

    const json = [...jsonIn, ...jsonAdd];

    return await gravaArquivo(json);
}

//Clear file
const clearFile = () => fs.writeFile(file, JSON.stringify([], '', 2), { flag : 'w'});

//Person class converter
async function readFile_Class(){
    //Lê o arquivo
    let json = await readFile_Json();

    json = json.map( obj =>
        new Person (
            //name
            obj.name,
            //email
            obj.email,
            //Phone
            obj.phone,
            //Adress

            //Number
            obj.address.number,
            //street
            obj.address.name,
            //city,
            obj.address.city,
            //state
            obj.address.state,
            //countru
            obj.address.country,
            //postcode
            obj.address.postcode,

            //Img
            obj.img,
            //cpf
            obj.cpf.cpf
        )
    )

    return json;
}

//Terminal file manipulation
const args = process.argv.slice(2);
switch(args[0]){
    case "clear": clearFile(); console.log("Arquivo limpo"); break;
    case "read": readFile_Class().then(json => 
        (json) ? json.forEach((val, index) => console.log(`${index}:\n${val}\n\n`)) :
                    console.log("Arquivo vazio")
    ); break;
    case "write": writeFile(Number(args[1])); break; 
    case "update": updateFile(Number(args[1])); break;
}

module.exports = {
    "write" :  writeFile,
    "read_Json" : readFile_Json,
    "read_Class" : readFile_Class,
    "update" : updateFile,
    "clear" : clearFile,
}
