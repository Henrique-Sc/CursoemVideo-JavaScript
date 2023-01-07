// Declarando variáveis essenciais
let numImput = document.querySelector('#numero')
let numsDiv = document.querySelector('#numeros')
let result = document.querySelector('#result')
let btnFinalizar = document.querySelector('#btnFinalizar')
let numeros = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n) {
    if (numeros.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function error(msg) {
    // Retorna uma mensagem de erro
    return `<span style="color: red">ERRO:</span> ${msg}`
}

function writeResult(msg, substituir=false) {
    // Escreve algum texto no resultado
    msgF = `<p>${msg}</p>`
    if (substituir) {
        result.innerHTML = msgF
    } else {
        result.innerHTML += msgF
    }
}

function resetResult() {
    writeResult('O resultado aparecerá aqui...', true)
}

function buttonFinalizar(sit) {
    if (sit) {
        btnFinalizar.disabled = false
        btnFinalizar.style.cursor = 'pointer'
    } else {
        btnFinalizar.disabled = true
        btnFinalizar.style.cursor = 'no-drop'
    }

}

function adicionar() {
    resetResult();  // Resetar o resultado
    let num = numImput.value
 
    if (isNum(num) && ! inLista(num)) {
        // Adicionar o valor na lista
        numeros.push(Number(num))

        // Adicionar o valor na div (output para o usuário)
        let valor = document.createElement('p')
        valor.textContent = num
        numsDiv.appendChild(valor)

        // Habilitar botão finalizar
        buttonFinalizar(true)

    } else {
        writeResult(error('Valor inválido ou já existente.'), true)
        setTimeout(() => {resetResult()}, 2500);
    }

    // Preparar para o próximo valor
    numImput.value = ''
    numImput.focus()
}

function finalizar() {
    document.querySelector('#btnResetar').style.visibility = 'visible'
    
    // Analisar os números
    Array.prototype.maior = () => {
        return Math.max.apply(null, this)  
        
        // this -> array com todos os números
        
        // Dessa forma, é possível usar um array como parâmetro na função Math.max()
    }

    Array.prototype.menor = () => {
        return Math.min.apply(null, this)
    }

}

function resetar() {
    location.reload()
}
