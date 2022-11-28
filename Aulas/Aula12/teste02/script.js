var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()

if (min < 10) {
    var min = `0${min}`
}

console.log(`Agora são ${hora}:${min}`)
if (hora < 5) {
    console.log('Tenha uma boa madrugada!')

} else if (hora <= 11) {
    console.log('Tenha um bom dia!')

} else if (hora <= 18) {
    console.log('Tenha uma boa tarde!')

} else if (hora <= 23){
    console.log('Tenha uma boa noite!')
}
