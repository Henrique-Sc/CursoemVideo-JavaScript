function analisar() {
    var data = new Date()
    var dataAtual = [data.getDate(), data.getMonth() + 1, data.getFullYear()] // dd, mm, yyyy

    // Variáveis de input
    var dataNascimento = document.querySelector('#dataNascimento').value
    var newDataNascimento = dataNascimento.split('/')  // dd, mm, yyyy
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
    erro = 'Valores inválidos! Corrija-os e tente novamente.'
    mes31 = [1, 3, 5, 7, 8, 10, 12]
    mes30 = [4, 6, 9, 11]
    
    if (newDataNascimento == '' || newDataNascimento[2] > dataAtual[2] || newDataNascimento[2] < 1900 || newDataNascimento[1] > 12 || sexo == 0 || dataNascimento.length != 10 || newDataNascimento[0] < 1 || newDataNascimento[1] < 1) {
        alert(erro)
    } else if ((dataAtual[2] == newDataNascimento[2] && dataAtual[1] == newDataNascimento[1] && dataAtual[0] < newDataNascimento[0])) {
        alert(erro)
    } else if (mes31.includes(Number(newDataNascimento[1])) && newDataNascimento[0] > 31) {  // Dia maior que 31
        alert(erro)
    } else if (mes30.includes(Number(newDataNascimento[1])) && newDataNascimento[0] > 30) {  // Dia maior que 30
        alert(erro)
    } else if ((newDataNascimento[2] % 4 == 0 && newDataNascimento[1] == 2 && newDataNascimento[0] > 29)) {
        alert(erro)
    } else if ((newDataNascimento[2] % 4 != 0 && newDataNascimento[1] == 2 && newDataNascimento[0] > 28)) {
        alert(erro)
    }
    
    else {
        

        // Quantos anos a pessoa tem
        var idade = dataAtual[2] - newDataNascimento[2]

        // Verificar se a pessoa ja fez aniversário
        if (dataAtual[1] < newDataNascimento[1]) {  // Não chegou no mês do aniversário
            idade--
        } else if (newDataNascimento[1] == dataAtual[1]) {  // É o mês do seu aniversário
            if (dataAtual[0] < newDataNascimento[0]) {  // Não chegou no dia do aniversário
                idade--
            }
        }

        // Analisando a idade
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

        // Criar o elemento img
        var img = document.createElement('img')
        img.setAttribute('id', 'result_img')
        img.setAttribute('src', `images/${sexo}${imgNameFile}`)

        // Mostrar o resultado
        result.setAttribute('class', 'result')
        result.innerHTML = `<p>Você é um(a) ${faixaEtaria} com ${idade} anos de idade!</p>`
        result.appendChild(img)
    }

    
}