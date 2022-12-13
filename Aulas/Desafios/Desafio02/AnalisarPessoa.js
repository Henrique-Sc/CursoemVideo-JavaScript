function analisar() {
    var data = new Date()

    // Variáveis de output
    var dataNascimento = document.querySelector('#dataNascimento').value
    var sexoRadio = document.getElementsByName('sexo')
    var sexo = 0
    sexoRadio.forEach(radio => {
        if (radio.checked) {
            sexo = radio.value
            
        }

        console.log(sexo)
    })

    // Variáveis de output
    var result_desc = document.querySelector('#result_desc')
    var result_img = document.querySelector('#result_img')

    // Verificar se os inputs estão vazios
    // anoNascimento = dataNascimento.split('-')[0]
    // idade = data.getFullYear() - anoNascimento
}