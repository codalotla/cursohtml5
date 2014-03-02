$(document).ready(function(){
	//$("h1").css("font-size","100px");
	//$("h1").addClass("colorojo");
	//$("#listacompras li").first().css("color","red");
	//$("#listacompras").append("<li>Uva</li>");
	//$("#listacompras li").first().remove();
	/*$("#boton").on("click", function(){
		//console.log("Acabo de clickear!");
		if($(this).prev().val()=="Julio"){
			alert("Bienvenido");
		}  else {  alert("Fuera de aca!")}
	});
	$("#capa").hover(function(){
    	console.log("mouse ha entrado!");
    	$(this).css("background","yellow");
	}, function(){
		console.log("mouse ha salido!");
		$(this).css("background","blue");
	});


	$(document).mousemove(function(e){
		$("#capa2").css("top",e.pageY+"px").css("left",e.pageX+"px");
	});

	$("h3").on("click",function(){
		$("#mensaje").fadeToggle("slow");
	});*/

	/*$(document).keydown(function(e){
		switch(e.which){
			case 39:
				$("#capa").css("left",parseInt($("#capa").css("left"))+3+"px");
			break;
			case 40:

			break;
		}
	});*/
	$("#capa").animate({"left":"+=900px"},5000);
});