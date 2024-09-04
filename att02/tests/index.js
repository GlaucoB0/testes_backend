export const numerosPares = (number) => {
    return number.filter((n) => n % 2 == 0)
}

export const listaStrings = (strings) => {
    return strings.sort();
}

export const quantidadeDeVogais = (qtd) => {
    const vogais = qtd.match(/[aeiou]/gi)
    const quantidade = vogais.length
    console.log(quantidade)
    return quantidade
}