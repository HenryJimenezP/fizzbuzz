const FizzbuzzService = require("../../lib/services/FizzbuzzService")

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Uso de score 1", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorer).toStrictEqual({name: "Explorer1", score: 1, trick: 1})
    })
})