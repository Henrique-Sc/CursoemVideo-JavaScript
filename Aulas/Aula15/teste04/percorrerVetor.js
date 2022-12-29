// let num = [3, 0, 1, 10, 9, 6].sort(function(a, b){return a-b})
let num = [3, 0, 10, 1, 10, 9, 6]

console.log(num);

console.log('\nUsando o For:');
// For
for(let pos = 0; pos < num.length; pos++) {
    console.log(`Na posição ${pos} o valor é ${num[pos]}`)
}

console.log('\nUsando o For in:');
// For in
for (let pos in num) {
    console.log(`Na posição ${pos} o valor é ${num[pos]}`)
}

console.log('\nUsando o ForEach:');
// ForEach
num.forEach(Element, index => {
    console.log(`Na posição ${index} o valor é ${Element}`);
})