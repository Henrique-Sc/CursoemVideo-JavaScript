function media() {
    var nome = prompt('Qual o nome do aluno?')
    var nota1 = Number(prompt(`Qual foi a primeira nota de ${nome}?`))
    var nota2 = Number(prompt(`E qual foi a segunda nota de ${nome}?`))

    var media = (nota1 + nota2) / 2

    if (media < 6) {
        var msg = `<strong><span style='color: red'>Estude um pouco mais!</span></strong>`
    } else {
        var msg = `<strong><span style='color: blue'>Meus parabéns!</span></strong>`
    }

    var resultado = document.getElementById('resultado')

    resultado.innerHTML = `
    <p>Calculando a média final de <strong>${nome}</strong>...</p>
    <p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark>.</p>
    <p>A média final será <mark>${media}</mark>.</p>
    <p>A mensagem que temos é: ${msg}`
    
}