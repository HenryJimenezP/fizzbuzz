const fs = require("fs");

class Reader{
    static readJsonFile (path){
        const rawdata = fs.readFileSync(path);
        return JSON.parse(rawdata);
    }
}

const explorers = Reader.readJsonFile("explorers.json");

module.exports = Reader