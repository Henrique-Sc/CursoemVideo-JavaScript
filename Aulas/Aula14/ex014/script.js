function contar() {
    // Variáveis de input
    let inicio = document.querySelector('#inicio').value
    let fim = document.querySelector('#fim').value
    let passo = document.querySelector('#passo').value

    // Variável de output
    let result = document.querySelector('#result')

    // Verificando os inputs
    if (inicio == '' || fim == '' || passo == '') {
        result.innerHTML = '<p>Impossível contar, valores inválidos.</p>'
    } else {
        // "Limpando" a saída dos dados
        result.innerHTML = ''

        // Convertendo os números
        let i = Number(inicio)
        let f = Number(fim)
        let p = Number(passo)

        // Corrigindo possíveis nuances da variálvel 'p'
        if (p < 0) {
            p *= -1
            alert(`Passo negativo! Considerando PASSO ${p}.`)
        } else if (p == 0) {
            alert('Passo inválido! Considerando PASSO 1.')
            p = 1
        }
        
        if (i <= f) {
            // Contagem crescente
            for (i; i <= f; i+=p) {
                result.innerHTML += `${i} 👉 `
            }
        } else if (i >= f) {
            // Contagem decrescente
            for (i; i >= f; i-=p) {
                result.innerHTML += `${i} 👉 `
            }
        }

        // Contagem finalizada :D
        result.innerHTML += '🏳️'
    }
}