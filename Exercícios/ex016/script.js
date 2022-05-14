function idade() {
    // Pegando o ano de nascimento
    var anoNasc = Number(prompt('Em que ano você nasceu? '))
    // Pegando o ano atual
    var anoAtual = new Date().getFullYear()
    // Calculando a idade
    var idade = anoAtual - anoNasc

    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>Em <b>${anoAtual}</b>, quem nasceu em <b>${anoNasc}</b> vai fazer <b>${idade} anos</b>.</p>`

}