var resultado = document.getElementById('resultado')

resultAntigo = resultado.innerHTML
function acao1() {
    resultado.innerHTML += `<p>Você clicou no primeiro botão.</p>`
}

function acao2() {
    resultado.innerHTML += `<p>Você clicou no segundo botão.</p>`
}

function acao3() {
    resultado.innerHTML += `<p>Você clicou no terceiro botão.</p>`
}

function acao4() {
    resultado.innerHTML += `<p>Você clicou no quarto botão.</p>`
}

function reset() {
    resultado.innerHTML = resultAntigo
}