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
    test("Requerimiento 3: Uso de score 5", () => {
        const explorer5 = {name: "Explorer5", score: 5}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer5)
        expect(explorer).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"})
    })
    test("Requerimiento 4: Uso de score 15", () => {
        const explorer15 = {name: "Explorer15", score: 15}
        const explorer = FizzbuzzService.applyValidationInExplorer(explorer15)
        expect(explorer).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"})
    })
})