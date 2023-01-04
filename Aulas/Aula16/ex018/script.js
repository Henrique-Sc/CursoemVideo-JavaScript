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
        escreverResult('O resultado aparecerá aqui')

        // Está da forma padrão, sem nehum número
        if (DivNumeros.innerHTML == '<p>Insira</p><p>Um</p><p>Número</p>') {
            DivNumeros.innerHTML = ''

            // Ativar o botão Finalizar
            let btnFinalizar = document.querySelector('#btnFinalizar')
            btnFinalizar.disabled = false
            btnFinalizar.style.cursor = 'pointer'
        }

        // Pegar os children na DivNumeros
        var children = Array.prototype.slice.call(DivNumeros.children)

        // Analisar os valores
        let podeAdicionar = true
        children.forEach(e => {
            if (e.innerHTML == num) {
                // O número digitado já existe na Div
                result.innerHTML = '<p>Número já adicionado. Insira outro valor!</p>'
                podeAdicionar = false
            }
        })

        if (podeAdicionar) {
            DivNumeros.innerHTML += `<p>${num}</p>`
        }

    }
}


function finalizar(btn) {
    // Variável de output
    let result = document.querySelector('#result')
    let DivNumeros = document.querySelector('#numeros')

    if (DivNumeros.innerHTML == '<p>Insira</p><p>Um</p><p>Número</p>') {
        result.innerHTML = error('Insira pelo menos um número primeiro!')

    } else {

        escreverResult('', true)

        var children = Array.prototype.slice.call(DivNumeros.children)
        
        // Analisar os números
        children.forEach(e => {
            result.innerHTML += `${e.innerHTML}`
        })

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
    return `<p><span style="color:red">ERRO:</span> ${msg}</p>`
}


function escreverResult(msg, sobreescrever=true) {
    if (sobreescrever) {
        document.querySelector('#result').innerHTML = msg
    } else {
        document.querySelector('#result').innerHTML += msg
    }
}