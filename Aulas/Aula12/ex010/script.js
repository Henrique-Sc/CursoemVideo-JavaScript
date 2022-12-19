function eleitor() {
    var result = document.querySelector('#result')
    var idade = Number(document.querySelector('#idade').value)

    var result_msg = ''
    if (idade < 16) {
        result_msg = 'você <span style="color: red">não tem idade para votar</span>'
    } else if (idade < 18 || idade >= 70) {
        result_msg = 'o seu <span style="color: red">voto é facultivo</span>'
    } else {
        result_msg = `o seu <span style="color: red">voto é obrigatório</span>`
    }

    result.innerHTML = `<p>TSE informa: ${result_msg}.</p>`
}