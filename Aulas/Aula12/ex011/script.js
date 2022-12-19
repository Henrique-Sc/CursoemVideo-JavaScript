function diaDaSemana() {
    var result = document.querySelector('#result')
    var data = new Date()
    var diaSemana = data.getDay()

    var dia = 'sábado'
    switch (diaSemana) {
        case 0:
            dia = 'domingo'
            break    
        case 1:
            dia = 'segunda-feira'
            break
        case 2:
            dia = 'terça-feira'
            break
        case 3:
            dia = 'quarta-feira'
            break
        case 4:
            dia = 'quinta-feira'
            break
        case 5:
            dia = 'sexta-feira'
            break
    }

    result.innerHTML = `<p>Hoje é dia ${data.getDate()}, ${dia}.</p>`
}