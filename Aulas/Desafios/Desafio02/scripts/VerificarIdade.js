function analisar() {
    var data = new Date()

    // Variáveis de output
    var dataNascimento = document.querySelector('#dataNascimento').value
    dataNascimento = dataNascimento.split('-')  // yyyy-mm-dd
    var sexoRadio = document.getElementsByName('sexo')

    // Variáveis de input
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
    if (dataNascimento == '' || dataNascimento[0] > data.getFullYear() || sexo == 0) {
        // Inputs vazios ou dados incorretos
        alert('Valores inválidos!')
    } else {
        // Valores corretos

        // Quantos anos a pessoa tem
        var dataAtual = [data.getFullYear(), data.getMonth() + 1, data.getDate()]
        var idade = dataAtual[0] - dataNascimento[0]

        // Verificar se a pessoa ja fez aniversário
        console.log(dataNascimento, dataAtual)
        if (dataNascimento[1] < dataAtual[1]) {
            console.log('não fez anivesário - mês anterior')
        } else if (dataNascimento[1] == dataAtual[1]) {
            if (dataNascimento[2] < dataAtual[2]) {
                console.log('não fez aniversário - dia anterior')
            }
        }
        console.log(`Você tem ${idade} anos`)

        // Analisar a idade do indivíduo e mostrar uma imagem da sua faxa etária
    }

    
}