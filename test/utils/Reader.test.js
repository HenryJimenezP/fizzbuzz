const Reader =  require("../../lib/utils/Reader")

describe ("Test para  Reader", () => {
    test("Requerimiento 1: Calcular todos los explorer en la mision", () => {
        const explorersTest = Reader.readJsonFile("test/data/explorer_test.js")
        expect(explorersTest).toBe(2)
    })
})