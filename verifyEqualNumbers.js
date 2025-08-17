function verifyEqualNumbers(numbers) {
  
    // Gera um array novo só com os números que aparecem uma vez na lista de entrada
    const result = numbers.filter((number) => {
    
        // Conta a quantidade de vezes que o número aparece na lista de entrada
        const firstAppearance = numbers.indexOf(number)
        const lastAppearance  = numbers.lastIndexOf(number)

        // Caso a primeira e a última aparição forem iguais, o número não se repetirá
        return firstAppearance === lastAppearance
    })

    return result
}

// Números de entrada para verificação e chamada da função para verificá-los
const entryNumbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueValues = verifyEqualNumbers(entryNumbers)

console.log(uniqueValues) // Saída: [1, 3, 5]