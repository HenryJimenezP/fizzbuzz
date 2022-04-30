const fs = require("fs");

class Reader{
    static readJsonFile (path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

const explorers = Reader.readJsonFile("explorers.json");
const explorersTest = Reader.readJsonFile("test/data/explorer_test.js")

module.exports = Reader