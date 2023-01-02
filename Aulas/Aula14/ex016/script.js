function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}

function result() {
    // Variáveis de input
    let num = document.querySelector('#fatorial').value
    
    // Variável de output
    let result = document.querySelector('#result')

    // Verificando o input
    if (num.length <= 0) {
        result.innerHTML = '<span style="color:red">ERRO:</span> Digite um valor válido.'
    } else if (num < 1) {
        result.innerHTML = '<span style="color:red">ERRO:</span> Digite um valor maior ou igual a 1.'
    } else {
        n = parseInt(num)
        fat = fatorial(n)

        // Mostrando o resultado
        result.innerHTML = `${n}! = ${fat}` 
    
        // Colocando a visibilidade do btnLimpar para visível
        document.querySelector('#btnLimpar').style.visibility = 'visible'
    }
}

function limpar(btn) {
    // Reseta o result e oculpa o botão
    document.querySelector('#result').innerHTML = 'O resultado aparecerá aqui...'
    btn.style.visibility = 'hidden'
}