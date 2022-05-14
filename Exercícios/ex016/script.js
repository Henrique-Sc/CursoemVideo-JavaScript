function idade() {
    var anoNasc = Number(prompt('Em que ano você nasceu? '))


    var anoAtual = new Date().getFullYear()

    var resultado = document.getElementById('resultado')

    resultado.innerHTML = `<p>${anoAtual}</p>`


}