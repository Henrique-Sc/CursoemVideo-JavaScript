var cont = 0
function contar() {
    var resultado = document.getElementById('resultado')
    cont ++
    resultado.innerHTML = `O contador está em <mark>${cont}</mark> cliques`
}

function zerarContador() {
    cont = 0
    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `O contador está em <mark>${cont}</mark> cliques`
}