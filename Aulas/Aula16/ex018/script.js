function adicionar() {
    // Variáveis de input
    let num = document.querySelector('#numero').value
    
    // Variável de output
    let result = document.querySelector('#result')
    let DivNumeros = document.querySelector('#numeros')

    // Verificando o input
    if (num.length <= 0) {
        escreverResult(error('Digite um valor.'))        
    } else if (num < 1) {
        escreverResult(error('Digite um valor maior ou igual a 1.'))
    } else if (num > 100) {
        escreverResult(error('Digte um valor menor ou igual a 100.'))
    } else {        
        if (result.innerHTML != '<p>O resultado aparecerá aqui...</p>') {
            escreverResult('O resultado aparecerá aqui...')
        }

        // Pegar os children na DivNumeros
        var numeros = Array.prototype.slice.call(DivNumeros.children)

        // Analisar os valores
        if (numeros.indexOf(num)) {
            DivNumeros.innerHTML += `<p>${num}</p>`

            // Ativar o botão Finalizar
            let btnFinalizar = document.querySelector('#btnFinalizar')
            btnFinalizar.disabled = false
            btnFinalizar.style.cursor = 'pointer'
        }

    }
}


function finalizar(btn) {
    // Variável de output
    let result = document.querySelector('#result')
    let DivNumeros = document.querySelector('#numeros')

    if (DivNumeros.innerHTML == '<p>Insira</p><p>Um</p><p>Número</p>') {
        escreverResult(error('Insira pelo menos um número primeiro!'))

    } else {
        // Preparar o resultado
        let children = Array.prototype.slice.call(DivNumeros.children)
        let numeros = []

        children.forEach(e => {
            numeros.push(Number(e.innerHTML))
        })

        Array.prototype.menor = function() {
            return Math.min.apply(null, this)
        }

        Array.prototype.maior = function() {
            return Math.max.apply(null, this)
        }

        let soma = 0

        // Analisar os números
        numeros.forEach(num => {
            soma += num
        })

        escreverResult(`Maior número: ${numeros.maior()}`)
        escreverResult(`Menor número: ${numeros.menor()}`, false)
        escreverResult(`Soma total: ${soma}`, false)
        escreverResult(`Média: ${soma / numeros.length}`, false)

        btn.disabled = true
        btn.style.cursor = 'no-drop'

        // Colocando a visibilidade do btnLimpar para visível
        document.querySelector('#btnResetar').style.visibility = 'visible'
    }
}


function resetar() {
    location.reload()
}


function error(msg) {
    return `<span style="color:red">ERRO:</span> ${msg}`
}


function escreverResult(msg, sobreescrever=true) {
    msgF = `<p>${msg}</p>`
    if (sobreescrever) {
        document.querySelector('#result').innerHTML = msgF
    } else {
        document.querySelector('#result').innerHTML += msgF
    }
}