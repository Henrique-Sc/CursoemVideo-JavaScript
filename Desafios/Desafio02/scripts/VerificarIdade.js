function analisar() {
    var data = new Date()
    var dataAtual = [data.getFullYear(), data.getMonth() + 1, data.getDate()] // yyyy-mm-dd

    // Variáveis de input
    var dataNascimento = document.querySelector('#dataNascimento').value
    dataNascimento = dataNascimento.split('-')  // yyyy-mm-dd
    var sexoRadio = document.getElementsByName('sexo')
    
    // Pegar o valor do radio buttons
    var sexo = 0
    sexoRadio.forEach(radio => {
        if (radio.checked) {
            sexo = radio.value
        }
    })

    // Variável de output
    var result = document.querySelector('#result')

    // Validação dos dados
    if (dataNascimento == '' || dataNascimento[0] > dataAtual[0] || dataNascimento[0] < 1900 || sexo == 0 || (dataAtual[0] == dataNascimento[0] && dataAtual[1] == dataNascimento[1] && dataAtual[2] < dataNascimento[2])) {
        alert('Valores inválidos! Corrija-os e tente novamente.')
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
        var imgNameFile = '-100.jpg'

        if (idade < 5) {
            faixaEtaria = 'bebê'
            imgNameFile = '-0-4.jpg'
        } else if (idade < 10) {
            faixaEtaria = 'criança'
            imgNameFile = '-5-9.jpg'
        } else if (idade < 14) {
            faixaEtaria = 'pré-adolescente'
            imgNameFile = '-10-13.jpg'
        } else if (idade < 18) {
            faixaEtaria = 'adolescente'
            imgNameFile = '-14-17.jpg'
        } else if (idade < 60) {
            faixaEtaria = 'adulto(a)'
            if (idade < 29) {
                imgNameFile = '-18-28.jpg'
            } else if (idade < 41) {
                imgNameFile = '-29-40.jpg'
            } else if (idade < 51) {
                imgNameFile = '-41-50.jpg'
            } else {
                imgNameFile = '-51-59.jpg'
            }               
        } else if (idade < 100) {
            faixaEtaria = 'idoso(a)'
            imgNameFile = '-60-99.jpg'
        }

        var img = document.createElement('img')
        img.setAttribute('id', 'result_img')
        img.setAttribute('src', `images/${sexo}${imgNameFile}`)

        result.setAttribute('class', 'result')
        result.innerHTML = `<p>Você é um(a) ${faixaEtaria} com ${idade} anos de idade!</p>`
        result.appendChild(img)
        // appendChild(img)
    }

    
}