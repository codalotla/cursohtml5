$(document).ready(function(){
	/*$.ajax({
		type: "GET",
		dataType: "json",
		url: "contactos.json",
		success: function(data){
			$.each(data.contactos, function(key, value){
				$("ul#contactos").append("<li>"+value.nombre+" - "+value.email+"</li>");
			});
		}
	});*/
	

	$("#formulario").submit(function(e){
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "saveuser.php",
			data: $("#formulario").serialize(),
			success: function(data){
				$("body").append(data);
			}
		});
	});
});