function contar() {
    // Variáveis de input
    var inicio = document.querySelector('#inicio').value
    var fim = document.querySelector('#fim').value
    var passo = document.querySelector('#passo').value

    // Variável de output
    var result = document.querySelector('#result')

    if (inicio == '' || fim == '' || passo == '') {
        result.innerHTML = '<p>Impossível contar</p>'
    } else {
        result.innerHTML = ''  // "Limpando" a saída dos dados

        // Convertendo os números
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)

        /*
        -> Caso o passo seja negativo
        -> Caso o fim seja menor que o início
        */

        if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }

        for (i; i <= f; i+=p) {
            result.innerHTML += `${i} 👉 `
        }

        result.innerHTML += '🏳️'
    }
}