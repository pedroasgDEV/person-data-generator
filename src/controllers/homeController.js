//Modules
const writeFile = require("../modules/fileCRUD").write;
const readFile = require("../modules/fileCRUD").read_Class;

//Get request
function get (req, res) {
    res.render('index', { people: [] });
}

//Post request
async function post (req, res) {
    const count = parseInt(req.body.count);
    await writeFile(count)
    const people = await readFile();
    res.render('index', { people: people });
};

module.exports = {
    get : get,
    post : post
}