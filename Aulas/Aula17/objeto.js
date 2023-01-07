let amigo = {
    'nome': 'Gustavo', 
    'idade': 19, 
    'sexo': 'M', 
    'peso': 60,
    engordar(p) {
        this.peso += p
    }
}

// amigo.engordar(-5)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg.`);