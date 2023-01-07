// Declarando variáveis essenciais
let numImput = document.querySelector('#numero')
let numsDiv = document.querySelector('#numeros')
let result = document.querySelector('#result')
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

    } else {
        writeResult(error('Valor inválido ou já existente.'), true)
        setTimeout(() => {resetResult()}, 2500);
    }

    // Limpar o input
    numImput.value = ''
    numImput.focus()
}
