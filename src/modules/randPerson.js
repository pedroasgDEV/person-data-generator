//Modulos
const fs = require("fs").promises;
const Person = require("../class/person").Person;
const path = require("path");
const getPerson = require("./getPerson").getPerson;
const file = path.resolve(__dirname, '..', '..', 'public', 'docs', 'randPerson.json'); //Caminho do arquivo local

//Grava os json no arquivo local
async function gravaArquivo ( json ) {
    const format = JSON.stringify(json, '', 2); //Formata o json
    return await fs.writeFile(file, format, { flag : 'w'}); //Grava o json no arquivo
}

//Escreve no arquivo
function writeFile ( qnt = 1 ) {
    return getPerson(qnt) //Requisita o json do site
    .then(json => gravaArquivo(json)) //Grava no arquivo o json
    .catch(e => console.error(e));
}

//Lé arquivo
async function readFile_Json () {
    const json = await fs.readFile(file, 'utf8'); //Lé os arquvios
    return JSON.parse(json); //Formata o que leu e retorna
}

//Add person ao arquivo
async function updateFile ( qnt = 0 ) {
    const jsonIn = await readFile_Json();
    const jsonAdd = await getPerson(qnt);

    const json = [...jsonIn, ...jsonAdd];

    return await gravaArquivo(json);
}

//Limpa o arquivo
const clearFile = () => fs.writeFile(file, JSON.stringify([], '', 2), { flag : 'w'});

//Converte o que leu para Class Person
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

//manipulação do arquivo pelo terminal
const args = process.argv.slice(2);
switch(args[0]){
    case "clear": clearFile(); console.log("Arquivo limpo"); break; //limpa o arquivo
    case "read": readFile_Class().then(json => 
        (json) ? json.forEach((val, index) => console.log(`${index}:\n${val}\n\n`)) :
                    console.log("Arquivo vazio")
    ); break; //Mostra o arquivo no terminal
    case "write": writeFile(Number(args[1])); break; //Escreve o arquivo com o proximo comando
    case "update": updateFile(Number(args[1])); break; //Add ao arquivo com o proximo comando
}

module.exports = {
    "write" :  writeFile,
    "read_Json" : readFile_Json,
    "read_Class" : readFile_Class,
    "update" : updateFile,
    "clear" : clearFile,
}
