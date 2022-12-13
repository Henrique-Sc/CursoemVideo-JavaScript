function analisar() {
    var data = new Date()
    var sexo

    var anoNascimento = Number(document.querySelector('#anoNascimento').value)
    var sexoRadio = document.getElementsByName('sexo')
    sexoRadio.forEach(radio => {
        if (radio.checked) {
            sexo = radio.value
        } else {
            sexo = false
        }
    })

    // Variáveis de output
    var result_desc = document.querySelector('#result_desc')
    var result_img = document.querySelector('#result_img')

    // Verificar se os inputs estão vazios
    if (anoNascimento < 1800 || sexo == false) {
        alert('Valores inválidos!')
    }

    idade = data.getFullYear() - anoNascimento
}