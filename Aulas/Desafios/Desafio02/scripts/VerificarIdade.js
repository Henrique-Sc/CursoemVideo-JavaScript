function analisar() {
    var data = new Date()

    // Variáveis de input
    var dataNascimento = document.querySelector('#dataNascimento').value
    dataNascimento = dataNascimento.split('-')  // yyyy-mm-dd
    var sexoRadio = document.getElementsByName('sexo')

    // Variáveis de output
    var result_desc = document.querySelector('#result_desc')
    var result_img = document.querySelector('#result_img')

    // Pegar o valor dos radios buttons
    var sexo = 0
    sexoRadio.forEach(radio => {
        if (radio.checked) {
            sexo = radio.value
        }
    })

    // Analisar se os inputs estão com os dados corretos
    if (dataNascimento == '' || dataNascimento[0] > data.getFullYear() || dataNascimento[0] < 1860 || sexo == 0) {
        // Inputs vazios ou dados incorretos
        alert('Valores inválidos!')
    } else {
        // Valores corretos

        // Quantos anos a pessoa tem
        var dataAtual = [data.getFullYear(), data.getMonth() + 1, data.getDate()]
        var idade = dataAtual[0] - dataNascimento[0]

        // Verificar se a pessoa ja fez aniversário
        if (dataAtual[1] < dataNascimento[1]) {
            idade--
        } else if (dataNascimento[1] == dataAtual[1]) {
            if (dataAtual[2] < dataNascimento[2]) {
                idade--
            }
        }

        // Mostrar resultado
        result_desc.innerHTML = `Você tem ${idade} anos de idade.`
        // result_img
    }

    
}