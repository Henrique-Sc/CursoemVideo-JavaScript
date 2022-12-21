function analisar() {
    // Variáveis de output
    var horaDoDia = document.querySelector('#hora-do-dia')
    var result_img = document.querySelector('#result_img')
    var body = document.querySelector('#body')

    // Variáveis do horário
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    
    horaDoDia.innerHTML = `Hora do dia: ${hora}:${min}`
    if (hora <= 5 || hora > 19) {  // Noite
        result_img.src = 'images/night-1.1.jpg'
        body.style.background = '#192133'

    } else if (hora < 12) {  // Nascer do sol
        result_img.src = 'images/sunrise-1.1.jpg'
        body.style.background = '#FDB355'

    } else if (hora < 18) {  // Meio dia - tarde
        result_img.src = 'images/noon-1.1.jpg'
        body.style.background = '#6EAEFC'

    } else if (hora <= 19) {  // Por do sol
        result_img.src = 'images/sunset-1.1.jpg'
        body.style.background = '#ED4010'
    }
}