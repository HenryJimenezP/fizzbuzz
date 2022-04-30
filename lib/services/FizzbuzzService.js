const Reader = require("./../utils/Reader")

class FizzbuzzService {
    static applyValidationInExplorer(explorer){
            if(explorer.score%5 === 0 && explorer.score%3 === 0){
                explorer.trick = "FIZZBUZZ";
                return explorer;
            }else if(explorer.score%3 === 0){
                explorer.trick = "FIZZ";
                return explorer;
            }else if(explorer.score%5 === 0){
                explorer.trick = "BUZZ";
                return explorer;
            } else {
                explorer.trick = explorer.score;
                return explorer;
            }
    }
}

const explorers = Reader.readJsonFile("explorers.json");
const explorer1 = {name: "Explorer1", score: 1}
FizzbuzzService.applyValidationInExplorer(explorer1) // {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3}
FizzbuzzService.applyValidationInExplorer(explorer3) // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5}
FizzbuzzService.applyValidationInExplorer(explorer5) // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15}
FizzbuzzService.applyValidationInExplorer(explorer15) // {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}

module.exports = FizzbuzzService