function iniciar() {
	var boton = document.getElementById('grabar')
	boton.addEventListener('click', nuevoItem, false)
	mostrar()
}

function nuevoItem() {
	var clave = document.getElementById('clave').value
	var referencia = document.getElementById('referencia').value
	var categoria = document.getElementById('categoria').value
	var fecha = document.getElementById('fecha').value

	var valores = [referencia, categoria, fecha]

	localStorage.setItem(clave, valores)
}

function mostrar(){
	var cajadatos = document.getElementById('cajadatos')
	cajadatos.innerHTML = '<div><button onclick="eliminarTodo" class="boton_eliminar">Eliminar todos los pedidos</button></div>'

	for(var i=0; i<localStorage.lenght; i++){
		var id = localStorage.key(i)
		var valor = localStorage.getItem(id)
		cajadatos.innerHTML += '<div>' + id + ' - ' + valor +'</br><button onclick="eliminarItem(\''+id+'\')">Eliminar clase</button></div>' 
	}
}

function eliminarTodo(){
	if(confirm('Desea eliminar todo?')){
		localStorage.clear()
		mostrar()
	}
}

function eliminarItem(clave){
	if(confirm('Desea eliminar este item?')){

	}
}

window.addEventListener('load', iniciar, false)