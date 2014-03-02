$(document).ready(function(){
	var cont = 0;
	$("#formulario").submit(function(e){
		e.preventDefault();
		var item = $("#item").val();
		localStorage.setItem(cont, item);
		cont++;
	});

});