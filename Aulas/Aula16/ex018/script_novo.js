// Declarando variáveis essenciais
let numImput = document.querySelector('#numero')
let numsDiv = document.querySelector('#numeros')
let result = document.querySelector('#result')
let numeros = []

/*
     - Verificar se o input está vazio ou nn
     - Verificar se o número é inteiro e se 1 <= num <= 100
*/

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
    /*
    Adicionar o número no array se o valor digitado for um número, se ele não haver o mesmo número no array
    */
    resetResult();  // Resetar o resultado
    let num = numImput.value
 
    if (isNum(num) && ! inLista(num)) {
        numeros.push(Number(num))
    } else {
        writeResult(error('Valor inválido ou já existente.'), true)
        setTimeout(() => {resetResult()}, 2500);
    }

}
