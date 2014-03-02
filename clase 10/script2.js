function draw(){
	var stage = new Kinetic.Stage({
		container: "mycanvas",
		width: 500,
		height: 300
	});
	var layer = new Kinetic.Layer();
	//a line
	/*var line = new Kinetic.Line({
		points: [0,0,500,300],
		stroke: 'red',
		strokeWidth: 15
	});
	layer.add(line);
	stage.add(layer);*/

	//a circle
	/*var circle= new Kinetic.Circle({
		x:200,
		y:200,
		radius:50,
		stroke:'red'
	});
	layer.add(circle);
	stage.add(layer);*/

	//logo windows8
	/*var square1 = new Kinetic.Rect({
		x:10, y:10, width:100, height:100, fill:'#F25021'
	});

	var square2 = new Kinetic.Rect({
		x:120, y:10, width:100, height:100, fill:'#7FBA00'
	});

	var square3 = new Kinetic.Rect({
		x:10, y:120, width:100, height:100, fill:'#02A4EF'
	});

	var square4 = new Kinetic.Rect({
		x:120, y:120, width:100, height:100, fill:'#FFB901'
	});
	layer.add(square1).add(square2).add(square3).add(square4);
	stage.add(layer);*/

	//logo codalot
	 var fig1 = new Kinetic.Line({
        points: [130,25,130,75,54,145,3,145],
        fill: '#0E8D60',
        closed: true
      });

      var fig2 = new Kinetic.Line({
        points: [3,148,54,148,130,215,130,265],
        fill: '#4CCC9C',
        closed: true
      });

      var fig3 = new Kinetic.Line({
        points: [133,215,133,265,320,75,320,25],
        fill: '#FCB117',
        closed: true
      });

      var fig4 = new Kinetic.Line({
        points: [323,25,323,75,400,145,450,145],
        fill: '#0B98A9',
        closed: true
      });

      var fig5 = new Kinetic.Line({
        points: [400,148,450,148,325,270,325,220],
        fill: '#2FCEE1',
        closed: true
      });

	layer.add(fig1).add(fig2).add(fig3).add(fig4).add(fig5);
	stage.add(layer);

	//save in image
	/*stage.toDataURL({
		callback: function(url){
			window.open(url);
		}
	});*/
}