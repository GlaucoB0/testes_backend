import {numerosPares, listaStrings, quantidadeDeVogais } from "./index.js";

describe("Testar os numeros pares", () => {
    test("Aqui testará se os numeros serão pares!.", () => {
        const numeros = [1, 2, 3, 4, 5, 6]
        const aceitos = [2, 4, 6]
        expect(numerosPares(numeros)).toEqual(aceitos)
    })  

    test("Aqui testará se os numeros não pares", () => {
        const numeros = [1, 3, 5, 7]
        const aceitos = []
        expect(numerosPares(numeros)).toEqual(aceitos)
    })

    test("Aqui testará se todos os numeros serão pares", () => {
        const numeros = [2, 4, 6, 8]
        const aceitos = [2, 4, 6, 8]
        expect(numerosPares(numeros)).toEqual(aceitos)
    })
})

describe("Testará em ordenar as strings", () => {
    test("Testará se ordenará normalmente", () => {
        const marcas = ["Michelin", "Multilaser", "Adidas"]
        const aceitos = ["Multilaser", "Michelin", "Adidas"]

        expect(listaStrings(marcas)).toEqual(aceitos)
    })


})


describe("Testará quantas vogais possui uma string", () => {
    test("Testará a quantidade de vogais da string", () => {
        const vogais = "pneumoultramicroscopicossilicovulcanoconiotico"
        const aceitos = 3

        expect(quantidadeDeVogais(vogais)).toEqual(aceitos)
    })

    
})