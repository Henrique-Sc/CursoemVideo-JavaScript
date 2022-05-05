function maiorValor() {
    var num1 = prompt('Digite um número: ');
    var num2 = prompt('Digite outro número: ');
    var resultado = document.getElementById('resultado');

    resultado.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>, `;
    
    if (num1 > num2) {
        maior = num1;
        menor = num2;
    } else {
        if (num2 > num1) {
            maior = num2;
            menor = num1;
        } else {
            
        }
    }
}