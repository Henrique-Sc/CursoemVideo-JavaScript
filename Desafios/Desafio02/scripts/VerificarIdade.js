function analisar() {
    var data = new Date()
    var dataAtual = [data.getFullYear(), data.getMonth() + 1, data.getDate()]

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
        alert('Valores inválidos!')

    } else {
        // Quantos anos a pessoa tem
        var idade = dataAtual[0] - dataNascimento[0]

        // Verificar se a pessoa ja fez aniversário
        if (dataAtual[1] < dataNascimento[1]) {  // Não chegou no mês do aniversário
            idade--
        } else if (dataNascimento[1] == dataAtual[1]) {  // É o mês do seu aniversário
            if (dataAtual[2] < dataNascimento[2]) {  // Não chegou no dia do aniversário
                idade--
            }
        }

        // Mostrar resultado
        // var faixaEtaria = "adolescente"
        // result_desc.innerHTML = `Você é um(a) ${faixaEtaria} com ${idade} anos de idade!`
        // result_img.src = `images/${sexo}-0-4.jpg`
    }

    
}