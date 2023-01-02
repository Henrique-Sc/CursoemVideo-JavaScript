function parImpar(n) {    

    let num = Number(n)
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}

if (parImpar(3)) {
    console.log('É PAR');
} else {
    console.log('É ÍMPAR');
}