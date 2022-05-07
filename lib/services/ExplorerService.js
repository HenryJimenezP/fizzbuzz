const Reader = require("./../utils/Reader")

class ExplorerService {

    static filterByMission(explorers, mission){
        const explorersByMission = explorers.filter((explorer) => explorer.mission === mission)
        return explorersByMission
    }

    static getAmountOfExplorersByMission(explorers, mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode.length
    }

    static getExplorersUsernamesByMission(explorers, mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode
    }
}

const explorers = Reader.readJsonFile("explorers.json");

// Aplicación del ExplorerService sobre la lista de explorers
ExplorerService.filterByMission(explorers, "node");
ExplorerService.getAmountOfExplorersByMission(explorers, "node");
ExplorerService.getExplorersUsernamesByMission(explorers, "node");

module.exports = ExplorerService