function eleitor() {
    var result = document.querySelector('#result')
    var idade = Number(document.querySelector('#idade').value)

    var result_msg = ''
    if (idade < 16) {
        result_msg = 'você não tem a idade mínima para votar (16 anos)'
    } else if (idade < 18 || idade >= 70) {
        result_msg = 'o seu voto é facultivo'
    } else {
        result_msg = 'o seu voto é obrigatório'
    }

    result.innerHTML = `<p>TSE informa: ${result_msg}.</p>`
}