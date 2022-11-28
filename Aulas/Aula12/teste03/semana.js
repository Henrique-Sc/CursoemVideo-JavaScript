var data = new Date()
var diaSemana = data.getDay()

console.log(`Hoje é dia ${data.getDate()}`)
switch (diaSemana) {
    case 0:
        console.log('Domingo')
        break    
    case 1:
        console.log('Segunda-feira')
        break
    case 2:
        console.log('Terça-feira')
        break
    case 3:
        console.log('Quarta-feira')
        break
    case 4:
        console.log('Quinta-feira')
        break
    case 5:
        console.log('Sexta-feira')
        break    
    case 6:
        console.log('Sábado')
    default:
        console.log('ERRO! Valor inválido.')
}


// var diaSemana = [
//     'Domingo',
//     'Segunda-feira',
//     'Terça-feira',
//     'Quarta-feira',
//     'Quinta-feira',
//     'Sexta-feira',
//     'Sábado'
// ]

// console.log(`Hoje é dia ${data.getDate()}, ${diaSemana[data.getDay()]}`)
