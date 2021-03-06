const ExplorerController = require("./controllers/ExplorerController");
const express = require("express");
const { request, response } = require("express");
const { applyValidationInNumber } = require("./controllers/ExplorerController");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});

app.get("/v1/explorers/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorerInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorerInMission);
});

app.get("/v1/explorers/amount/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersAmountInMission = ExplorerController.getExplorersAmonutByMission(mission);
    response.json({mission: request.params.mission, quantity: explorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission", (request, response) => {
    const mission = request.params.mission;
    const explorersUsernamesByMission = ExplorerController.getExplorersUsernamesByMission(mission);
    response.json({mission: request.params.mission, explorers: explorersUsernamesByMission});
});

app.get("/v1/fizzbuzz/:number", (request, response) => {
    const number = request.params.number;
    const applyValidationInNumber = ExplorerController.applyValidationInNumber(number);
    response.json({score: number, trick: applyValidationInNumber});
});