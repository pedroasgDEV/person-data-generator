//Modulos
const fs = require("fs").promises;
const path = require("path");
const axios = require("axios");

const file = path.resolve(__dirname, '..', '..', 'public', 'docs', 'randPessoas.json'); //Caminho do arquivo local
const href = "https://randomuser.me/api/?results="; //Link que gera pessoas e retorna um json

//Faz a requisição no site
async function getPessoas ( qnt ) {
    if(!Number.isInteger(qnt)) throw new TypeError("A qunatidade precisa ser um numero");
    const json = await axios(href + qnt); //Faz a requisição de um json com dados de pessoas geradas aleatoriamente
    return json.data.results; //Retorna o que leu
}

//Grava os json no arquivo local
async function gravaArquivo ( json ) {
    const format = JSON.stringify(json, '', 2); //Formata o json
    return await fs.writeFile(file, format, { flag : 'w'}); //Grava o json no arquivo
}

//Escreve no arquivo pessoas.json
function writeFile ( qnt = 0 ) {
    if (qnt == 0) return clearFile();
    return getPessoas(qnt) //Requisita o json do site
    .then(json => gravaArquivo(json)) //Grava no arquivo o json
    .catch(e => console.error(e));
}

//Lé arquivo
async function readFile () {
    const json = await fs.readFile(file, 'utf8'); //Lé os arquvios
    return (!json) ? [] : JSON.parse(json); //Formata o que leu e retorna
}

//Add pessoas ao arquivo
async function updateFile ( qnt = 0 ) {

    //Pega os novos dados
    const jsonOut = await getPessoas(qnt).catch(e => console.error(e));; //Requisita o json do site


    //Pega os dados do arquivo
    const jsonIn = await readFile(); //Requisita os dados do arquivo

    const json = [...jsonIn, ...jsonOut]; //Adiciona novos dados ao fim do json que estava no arquivo

    return await gravaArquivo(json); //Sobreescreve o arquivo existente
}

//Limpa o arquivo
const clearFile = () => fs.writeFile(file, '', { flag : 'w'});

//manipulação do arquivo pelo terminal
const args = process.argv.slice(2);
switch(args[0]){
    case "clear": clearFile(); console.log("Arquivo limpo"); break; //limpa o arquivo
    case "read": readFile().then(json => 
        (json) ? json.forEach((val, index) => console.log(`${index}: ${Object.values(val.name).join(' ')}`)) :
                    console.log("Arquivo vazio")
    ); break; //Mostra o arquivo no terminal
    case "write": writeFile(Number(args[1])); break; //Escreve o arquivo com o proximo comando
    case "update": updateFile(Number(args[1])); break; //Add ao arquivo com o proximo comando
}

module.exports = {
    "write" :  writeFile,
    "read" : readFile,
    "update" : updateFile,
    "clear" : clearFile,
}
