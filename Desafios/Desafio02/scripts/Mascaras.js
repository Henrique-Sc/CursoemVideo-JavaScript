function mascaraData(input) {
    valor = input.value
    valor = valor.trim()  // Retirar os espaços
    tam = valor.length
    valorDigitado = valor[valor.length - 1]

    // Se não for um número
    if (isNaN(valorDigitado)) {
        input.value = valor.replace(valorDigitado, '')
    } else {  
        if (tam == 3 || tam == 6) {
            var adicBarra = valor.slice(0, valor.lastIndexOf(valorDigitado));
            adicBarra += `/${valorDigitado}`
            input.value = adicBarra
    
        }

    }



}