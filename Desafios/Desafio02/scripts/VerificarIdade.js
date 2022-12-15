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
        var faixaEtaria = 'centenário(a)'
        var img = '-100.jpg'

        if (idade < 5) {
            faixaEtaria = 'bebê'
            img = '-0-4.jpg'
        } else if (idade < 10) {
            faixaEtaria = 'criança'
            img = '-5-9.jpg'
        } else if (idade < 14) {
            faixaEtaria = 'pré-adolescente'
            img = '-10-13.jpg'
        } else if (idade < 18) {
            faixaEtaria = 'adolescente'
            img = '-14-17.jpg'
        } else if (idade < 60) {
            faixaEtaria = 'adulto(a)'
            if (idade < 29) {
                img = '-18-28.jpg'
            } else if (idade < 41) {
                img = '-29-40.jpg'
            } else if (idade < 51) {
                img = '-41-50.jpg'
            } else {
                img = '-51-59.jpg'
            }               
        } else if (idade < 100) {
            faixaEtaria = 'idoso(a)'
            img = '-60-99.jpg'
        }

        result_desc.innerHTML = `Você é um(a) ${faixaEtaria} com ${idade} anos de idade!`
        result_img.src = `images/${sexo}${img}`
    }

    
}