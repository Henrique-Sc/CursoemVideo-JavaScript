# CursoemVideo-JavaScript
 Exercícios e arquivos de aulas feito durante o curso de JavaScript do Curso em Vídeo

### Acesse o [site para executar os exercícios](https://henrique-sc.github.io/CursoemVideo-JavaScript/)

---

# Anotações

## Converter números
 - `Number.parseInt(n)` - inteiro
 - `Number.parseFloat(n)` - decimal
 - `Number(n)` - inteiro ou decimal

---

## Converter números para string
- `n.toString()`
- `String(n)`

---

## Interpolação / Template strings
- `O aluno ${nome} tirou a nota ${nota}`

*${ } = placeholder*

---

## Formatar strings
- `s.length` - retorna quantos caracteres tem a string
- `s.toUpperCase()` - TUDO PARA MAIÚSCULO
- `s.tolowerCase()` - tudo para minúsculo

*`s.toLowerCase()` e o `s.toUpperCase()` funcionam com acentos*

---

## Formatar números

### Decimal:
```
var n1 = 1545.5

n1.toFixed(2)  // 1545.50
```

### Contábil:
```
var n1 = 1545.5

n1.toFixed(2).replace('.', ',')  // 1545,00

n1.toLocaleString('pt-br', {style: 'currency', 'currency': 'BRL'})  // R$ 1.545,50
```

---

## Operadores

### Aritméticos
 ```
5 + 2   // 7   - Soma
5 - 2   // 3   - Subtração
5 * 2   // 10  - Multiplicação
5 / 2   // 2.5 - Divisão
5 % 2   // 1   - Resto da divisão inteira
5 ** 2  // 25  - Potência
 ```

 Ordem de precendência:
1. `( )`
2. `**`
3. `* /`
4. `+ -`

### Atribuição

Atribução simples
```
var a = 5 + 3          // 8
var b = a % 5          // 3
var c = 5 * b ** 2     // 45
var d = 10 - a / 2     // 6
var e = 6 * 2 / d      // 2
var f = b % e + 4 / e  // 3 
```

Auto-atribuições
```
var n = 3
n = n + 4   // 7
n = n - 5   // 2
n = n * 4   // 8
n = n / 2   // 4
n = n ** 2  // 16
n = n % 5   // 1

/* 
Simplificar: 
    n += 4 
    n -= 5
    n *= 4
    n /= 2
    n **= 2
    n %= 5
*/
```

Incremento
```
var x = 5
x++  // 6
x--  // 5
```

### Relacionais


### Lógicos


### Ternário

---

### Analisar um valor

```
var n = 10
var s = 'JavaScript'
var b = true

typeof n               // 'number'
typeof n == 'number    // true

typeof s               // 'string'
typeof s == 'boolean'  // false

typeof b               // 'boolean'
typeof b == 'boolean'  // true
```

[Gustavo Guanabara - Curso de JavaScript](https://gustavoguanabara.github.io/javascript/)
