let num = [3, 0, 1, 10, 9, 6, 7, 5, 8, 2, 4].sort(function(a, b){return a-b})
let res

// Usando o forEach
res = 'Array: '

num.forEach(Element => {
    res += `${Element} → `
})

res += 'FIM!'
console.log(res);

console.log('\n========================\n');

// Usando o for
res = 'Array: '

for (let pos=0; pos < num.length; pos++) {
    res += `${num[pos]} → `
}

res += 'FIM!'
console.log(res);
