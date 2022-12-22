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

    // Verificando os inputs
    if (f < i) {
        result.innerHTML = '<p>Impossível gerar a tabuada, fim maior que início.</p>'
    } else {
        // Avisando o usuário que pode demorar parar para processar os dados
        if (f - i >= 1000) {
            alert('O programa terá que processar muitos dados, aguarde por favor.')
        }

        // "Limpando" a saída dos dados
        result.innerHTML = '' 

        // Gerando a tabuada
        while (i <= fim) {
            result.innerHTML += `${num} x ${i} = ${num * i}<br/>`
            i++
        }

        // Colocando a visibilidade do btnLimpar para visível
        document.querySelector('#btnLimpar').style.visibility = 'visible'
    }
}

function limpar(btn) {
    // Reseta o result e oculpa o botão
    document.querySelector('#result').innerHTML = 'O resultado aparecerá aqui...'
    btn.style.visibility = 'hidden'
}