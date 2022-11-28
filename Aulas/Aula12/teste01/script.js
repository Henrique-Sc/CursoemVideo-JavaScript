var idade = 18


if (idade < 16) {  // Não vota
    console.log('Não vota')

} else if ((idade < 18) || (idade >= 70)) {  // Voto facultativo
    console.log('Voto facultativo')

} else {  // Voto obrigatório
    console.log('Voto obrigatório')
}

