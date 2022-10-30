# CursoemVideo-JavaScript
 Exercícios e arquivos de aulas feito durante o curso de JavaScript do Curso em Vídeo

### Acesse o [site para executar os exercícios](https://henrique-sc.github.io/CursoemVideo-JavaScript/)

---

# Anotações

### Converter números
 - `Number.parseInt(n)` - inteiro
 - `Number.parseFloat(n)` - decimal
 - `Number(n)` - inteiro ou decimal

---

### Converter números para string
- `n.toString()`
- `String(n)`

---

### Interpolação / Template strings
- `O aluno ${nome} tirou a nota ${nota}`

*${ } = placeholder*

---

### Formatar strings
- `s.length` - retorna quantos caracteres tem a string
- `s.toUpperCase()` - TUDO PARA MAIÚSCULO
- `s.tolowerCase()` - tudo para minúsculo

*`s.toLowerCase()` e o `s.toUpperCase()` funcionam com acentos*

---

### Formatar números

#### Decimal:
```
var n1 = 1545.5

n1.toFixed(2)  // 1545.50
```

#### Contábil:
```
var n1 = 1545.5

n1.toFixed(2).replace('.', ',')  // 1545,00

n1.toLocaleString('pt-br', {style: 'currency', 'currency': 'BRL'})  // R$ 1.545,50
```

---

### Operadores

- Aritméticos
 ```
5 + 2   // 7   - Soma
5 - 2   // 3   - Subtração
5 * 2   // 10  - Multiplicação
5 / 2   // 2.5 - Divisão
5 % 2   // 1   - Resto da divisão inteira
5 ** 2  // 25  - Potência
 ```


- Atribuição

- Relacionais

- Lógicos

- Ternário

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
