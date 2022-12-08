function analisar() {
    // Variáveis de output
    var horaDoDia = document.querySelector('#hora-do-dia')
    var img = document.querySelector('#img')
    var body = document.querySelector('#body')

    // Variáveis do horário
    var data = new Date()
    var hora = data.getHours()
    var hora = 4
    var min = data.getMinutes()
    
    horaDoDia.innerHTML = `Hora do dia: ${hora}:${min}`
    if (hora <= 5 || hora > 19) {
        img.src = 'images/night-1.1.jpg'
        body.style.background = '#232323'
    } else if (hora < 12) {
        img.src = 'images/sunrise-1.1.jpg'

    } else if (hora < 18) {
        img.src = 'images/noon-1.1.jpg'

    } else if (hora <= 19) {
        img.src = 'images/sunset-1.1.jpg'
    }
}