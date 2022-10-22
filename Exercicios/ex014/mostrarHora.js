function mostrarHora() {
	var hora = Date()
	var resultado = document.getElementById('resultado')

	resultado.innerHTML = `<p>O que eu recebi do sistema foi <mark>${hora}</mark></p>`
}	