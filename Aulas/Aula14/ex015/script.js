function tabuada() {
    // Variáveis de input
    var numTabuada = document.querySelector('#num').value
    var inicio = document.querySelector('#inicio').value
    var fim = document.querySelector('#fim').value

    // Convertendo os números
    var num = Number(numTabuada)
    var i = Number(inicio)
    var f = Number(fim)

    // Variável de output
    var result = document.querySelector('#result')

    if (f < i) {
        result.innerHTML = '<p>Impossível gerar a tabuada, fim maior que início.</p>'
    } else {
        if (f - i >= 1000) {
            alert('O programa terá que processar muitos dados, aguarde por favor.')
        }
        result.innerHTML = ''  // "Limpando" a saída dos dados

        // Gerando a tabuada
        while (i <= fim) {
            result.innerHTML += `${num} x ${i} = ${num * i}<br/>`
            i++
        }

        document.querySelector('#btnLimpar').style.visibility = 'visible'
    }
}

function limpar(btn) {
    document.querySelector('#result').innerHTML = 'O resultado aparecerá aqui...'
    btn.style.visibility = 'hidden'
}