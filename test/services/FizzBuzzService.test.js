const FizzbuzzService = require("../../lib/services/FizzbuzzService")

describe("Test para ExplorerService", () => {
    test("Requerimiento 1: Uso de score 1", () => {
        const explorer1 = {name: "Explorer1", score: 1}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer1)
        expect(explorer).toStrictEqual({name: "Explorer1", score: 1, trick: 1})
    })
    test("Requerimiento 2: Uso de score 3", () => {
        const explorer3 = {name: "Explorer3", score: 3}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer3)
        expect(explorer).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"})
    })
})