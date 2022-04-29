const ExplorerService = require("./../../lib/services/ExplorerService")

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Calculando todos los explorers que se encuentran en la mision node", () => {
        const explorers = [{mission: "node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    })
    test("Obteniendo el total de explorer en la mission node", () => {
        const explorers = [{mission: "node"}];
        const quantityExplorers = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        expect(quantityExplorers).toBe(2);
    })
    test("Obteniendo el nombre de usuario de los explorers de la mision Node", () => {
        
    })
})