import {areaQuadrado, listaDeFrutas} from "./index.js"


test("Verifica área do quadrado", () => {
    expect(areaQuadrado(10)).toBe(100)
});

test("Compara strings", ()=> {
    expect("alves").toBe("alves")
    expect("alves").not.toBe("alves")
    expect("alves").toEqual("alves")
})

test("Verifica se tem Genipapo", () => {
    expect(listaDeFrutas()).toContain("Genipapo")
})