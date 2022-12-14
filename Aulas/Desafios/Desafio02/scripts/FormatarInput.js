function FormatarInput() {
    // Adicionar os valores máximos para o input[type="date"] (dia atual)
    var data = new Date
    var dataAtual = `${data.getFullYear()}-${data.getMonth() + 1}-${data.getDate()}`  // yy-mm-dd
    var input = document.querySelector('#dataNascimento')
    input.setAttribute('max', dataAtual)
}