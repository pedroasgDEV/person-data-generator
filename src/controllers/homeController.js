//modulos
const writeFile = require("../modules/randPerson").write;
const readFile = require("../modules/randPerson").read;

function get (req, res) {
    res.render('index', { people: [] });
}

async function post (req, res) {
    const count = parseInt(req.body.count);
    await writeFile(count) //Escreve no arquivo
    const peopleJson = await readFile(); //Lé o arquivo e manda para o view
    res.render('index', { people: peopleJson });
};

module.exports = {
    get : get,
    post : post
}