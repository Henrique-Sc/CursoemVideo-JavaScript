function adicionar() {
    // Variáveis de input
    let num = document.querySelector('#numero').value
    
    // Variável de output
    let result = document.querySelector('#result')
    let DivNumeros = document.querySelector('#numeros')

    // Verificando o input
    if (num.length <= 0) {
        result.innerHTML = '<p><span style="color:red">ERRO:</span> Digite um valor.</p>'
    } else if (num < 1) {
        result.innerHTML = '<p><span style="color:red">ERRO:</span> Digite um valor maior ou igual a 1.</p>'
    } else if (num > 100) {
        result.innerHTML = '<p><span style="color:red">ERRO:</span> Digite um valor menor ou igual a 100.</p>'
    } else {        
        result.innerHTML = '<p>O resultado aparecerá aqui...</p>'

        // Está da forma padrão, sem nehum número
        if (DivNumeros.innerHTML == '<p>Insira</p><p>Um</p><p>Número</p>') {
            DivNumeros.innerHTML = ''
        }

        var arr = Array.prototype.slice.call(DivNumeros.children)
        lo
        console.log(DivNumeros.children);
        // Adicionar o número na div
        DivNumeros.innerHTML += `<p>${num}</p>`

        // Ativar o botão Finalizar
        let btnFinalizar = document.querySelector('#btnFinalizar')
        btnFinalizar.disabled = false
        btnFinalizar.style.cursor = 'pointer'

    }
}

function finalizar(btn) {
    // Variável de output
    let result = document.querySelector('#result')
    let DivNumeros = document.querySelector('#numeros')

    /*
        -> Só pode ser pressionado se 
    */
    btn.disabled = true
    btn.style.cursor = 'no-drop'
    // Colocando a visibilidade do btnLimpar para visível
    document.querySelector('#btnResetar').style.visibility = 'visible'
    
}

function resetar() {
    location.reload()
}