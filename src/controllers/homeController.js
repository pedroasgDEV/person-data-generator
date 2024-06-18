//modulos
const writeFile = require("../modules/randPerson").write;
const readFile = require("../modules/randPerson").read_Class;

function get (req, res) {
    res.render('index', { people: [] });
}

async function post (req, res) {
    const count = parseInt(req.body.count);
    await writeFile(count) //Escreve no arquivo
    const people = await readFile(); //Lé o arquivo e manda para o view
    res.render('index', { people: people });
};

module.exports = {
    get : get,
    post : post
}