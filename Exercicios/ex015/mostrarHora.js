function mostrarHora() {
	var data = new Date()
	var meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
	var semanas = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')

	var dia = data.getDate()
	var mes = data.getMonth()
	var ano = data.getFullYear()
	var sem = data.getDay()
	var hora = data.getHours()
	var min = data.getMinutes()
	var sec = data.getSeconds()

	var resultado = document.getElementById('resultado')

	resultado.innerHTML = `
		<p>Dia: <mark>${dia}</mark></p>
		<p>Mês: <mark>${meses[mes]}</mark></p>
		<p>Ano: <mark>${ano}</mark></p>
		<p>Dia da semana: <mark>${semanas[sem]}</mark></p>
		<p>Hora: <mark>${hora}</mark></p>
		<p>Minutos: <mark>${min}</mark></p>
		<p>Segundos: <mark>${sec}</mark></p>
	`
}