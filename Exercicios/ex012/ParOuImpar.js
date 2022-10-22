function ParOuImpar() {
    var num = prompt('Digite um número: ')

    if (num % 2 == 0) {
        var msg = 'PAR'
    } else {
        var msg = 'ÍMPAR'
    }

    var resultado = document.getElementById('resultado')
    resultado.innerHTML = `<p>O número ${num} é <b><mark>${msg}!</mark></b></p>`
}