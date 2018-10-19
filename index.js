const url = require('url');
const calc = require('./calc');

module.exports = (req, res) => {
    const parsedUrl = url.parse(req.url, true)
    const result = calc.sum(
        parseInt(parsedUrl.query.val1),
        parseInt(parsedUrl.query.val2));
    res.end(`answer: ${result}\n`);
}
