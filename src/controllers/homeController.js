//modulos
const writeFile = require("../modules/randPerson").write;

function get (req, res) {
    count = Number(req.query.count);
    if(Number.isNaN(count)) res.render('index');
    else writeFile(count).then( () => res.render('index'));
}

module.exports = {
    get : get
}