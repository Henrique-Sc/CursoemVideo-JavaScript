function maiorValor() {
    // Declarar as variáveis e ler dois números
    var num1 = Number(prompt('Digite um número: '));
    var num2 = Number(prompt('Digite outro número: '));
    var resultado = document.getElementById('resultado');
    
    // Mostrar parte do resultado
    resultado.innerHTML = `<p>Analisando os valores <mark>${num1}</mark> e <mark>${num2}</mark>...</p>`;
    
    // Verificar qual número é o maior ou se eles são iguais
    if (num1 > num2) {
        maior = num1;
        menor = num2;

        resultado.innerHTML += `<p>O <b>maior valor</b> é o <mark>${maior}</mark>!</p>`;
    } else {
        if (num2 > num1) {
            maior = num2;
            menor = num1;

            resultado.innerHTML += `<p>O <b>maior valor</b> é o <mark>${maior}</mark>!</p>`
        } else {
            resultado.innerHTML += `<p><b>Ambos os valores</b> são <mark>iguais</mark>!</p>`
        }
    }
}