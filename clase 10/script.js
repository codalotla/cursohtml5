function draw(){
	var canvas = document.getElementById("mycanvas");
	if (canvas.getContext){
		var ctx = canvas.getContext("2d");

		//a line
		/*ctx.beginPath();
		ctx.moveTo(0,0); 
		ctx.lineTo(500,400);
		ctx.stroke();*/

		//a circle
		/*ctx.arc(200,200,50,0,Math.PI*2);
		ctx.stroke();*/

		//logo windows
		/*ctx.fillStyle="#F25021"
		ctx.fillRect(10,10,100,100);
		ctx.fillStyle="#7FBA00"
		ctx.fillRect(120,10,100,100);
		ctx.fillStyle="#02A4EF"
		ctx.fillRect(10,120,100,100);
		ctx.fillStyle="#FFB901"
		ctx.fillRect(120,120,100,100);

		ctx.font="24pt Cambria";
		ctx.fillStyle="blue";
		ctx.fillText("Windows 8",10, 250);*/

		//logo codalot
		/*ctx.beginPath();
		ctx.moveTo(130,25);
		ctx.lineTo(130,75);
		ctx.lineTo(54,145);
		ctx.lineTo(3,145);
		ctx.fillStyle="#0E8D60"
		ctx.fill();

		 ctx.beginPath();
	       ctx.moveTo(3,148);
	        ctx.lineTo(54,148);
	        ctx.lineTo(130,215);
	        ctx.lineTo(130,265);
	        ctx.fillStyle = "#4CCC9C";
	        ctx.fill();

	        ctx.beginPath();
	        ctx.moveTo(133,215);
	        ctx.lineTo(133,265);
	        ctx.lineTo(320,75);
	        ctx.lineTo(320,25);
	        ctx.fillStyle = "#FCB117";
	        ctx.fill();

	        ctx.beginPath();
	        ctx.moveTo(323,25);
	        ctx.lineTo(323,75);
	        ctx.lineTo(400,145);
	        ctx.lineTo(450,145);
	        ctx.fillStyle = "#0B98A9";
	        ctx.fill();

	        ctx.beginPath();
	        ctx.moveTo(400,148);
	        ctx.lineTo(450,148);
	        ctx.lineTo(325,270);
	        ctx.lineTo(325,220);
	        ctx.fillStyle = "#2FCEE1";
	        ctx.fill();*/

	        //save in image 
		//var dataURL = canvas.toDataURL();
		//document.getElementById("imgcanvas").src=dataURL;
	}
}