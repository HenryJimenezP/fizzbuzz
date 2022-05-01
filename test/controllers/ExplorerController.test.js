const ExplorerController = require("../../lib/controllers/ExplorerController")
const FizzbuzzService = require("../../lib/controllers/ExplorerController")

describe("Tets para FizzBuzzService", () => {
    test("Pruba 1: Calculando todos los explorer de la mision node", () => {
        const explorers = ExplorerController.getExplorersByMission("node");
        expect(explorers.length).toBe(10);
    });
    test("Pruba 2: Obteniendo los usernames los explorer de la mision node", () => {
        const explorers = ExplorerController.getExplorersUsernamesByMission("node");
        expect(explorers).toStrictEqual(["ajolonauta1", "ajolonauta2", "ajolonauta3", "ajolonauta4", "ajolonauta5", "ajolonauta11", "ajolonauta12", "ajolonauta13", "ajolonauta14", "ajolonauta15"]);
    });
    test("Pruba 3: Obteniendo la cantidad de explorer de la mision node", () => {
        const explorers = ExplorerController.getExplorersAmonutByMission("node");
        expect(explorers).toBe(10);
    });
})