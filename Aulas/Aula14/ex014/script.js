function contar() {
    // Variáveis de input
    var inicio = document.querySelector('#inicio').value
    var fim = document.querySelector('#fim').value
    var passo = document.querySelector('#passo').value

    // Variável de output
    var result = document.querySelector('#result')

    if (inicio == '' || fim == '' || passo == '') {
        result.innerHTML = '<p>Impossível contar, valores inválidos.</p>'
    } else {
        result.innerHTML = ''  // "Limpando" a saída dos dados

        // Convertendo os números
        var i = Number(inicio)
        var f = Number(fim)
        var p = Number(passo)

        // Corrigindo possíveis nuances da variálvel 'p'
        if (p < 0) {
            p *= -1
            alert(`Passo negativo! Considerando PASSO ${p}.`)
        } else if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        
        if (i <= f) {
            for (i; i <= f; i+=p) {
                result.innerHTML += `${i} 👉 `
            }
        } else if (i >= f) {
            for (i; i >= f; i-=p) {
                result.innerHTML += `${i} 👉 `
            }
        }

        result.innerHTML += '🏳️'
        alert(i)
    }
}