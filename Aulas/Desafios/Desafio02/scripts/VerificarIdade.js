function analisar() {
    var data = new Date()

    // Variáveis de output
    var dataNascimento = document.querySelector('#dataNascimento').value
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
    if (dataNascimento == '') {
        // Inputs vazios ou dados incorretos
        alert('Valores inválidos!')
    } else {
        // Valores corretos
        

        // Quantos anos a pessoa tem
    
    
        // Analisar a idade do indivíduo e mostrar uma imagem da sua faxa etária
    }

    
}