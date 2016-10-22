ns4 = (document.layers)? true:false
	ie4 = (document.all)? true:false
	var width = window.innerWidth;
	var height = window.innerHeight;
	p = document.querySelector('#tile');
	p1 = document.querySelector('#tile1');
	p2 = document.querySelector('#tile2');

	var numbers = require('numbers');

	function init() {
	    if (ns4) {document.captureEvents(Event.MOUSEMOVE);}
	    document.onmousemove=mousemove;
	}
	function mousemove(event) {
	    var mouse_x = y = 0;
	    if (document.attachEvent != null) {
	        mouse_x = window.event.clientX;
	        mouse_y = window.event.clientY;
	    } else if (!document.attachEvent && document.addEventListener) {
	        mouse_x = event.clientX;
	        mouse_y = event.clientY;
	    }
	    // p.style = "transform-origin center 50% 0px; transform: matrix3d(0.999054 + "," + 0 + "," + -0.0434784 + "," + 4.34784e-05 + "," + -0.000430794 + "," + 0.999951 + "," + -0.00989885 + "," + 9.89885e-06 + "," + 0.0434763 + "," + 0.00990822 + "," + 0.999005 + "," + -0.000999005 + "," + 0 + "," + 0 + "," + 0 + "," + 1);"
	    var x = (mouse_y - height / 2) * (-1) * Math.PI / 9000;
	    var y = (mouse_x -width / 2) * (-1) * Math.PI / 9000;
	    // p.style = "transform-origin center 50% 0px; transform: matrix3d(" +
	    // 1 + "," + 0 + "," + 0 + "," + 0 + ","+
	    // 0 + "," + Math.cos(x) + "," + Math.sin(-x) + "," + 0 + "," + 
	    // 0 + "," + Math.sin(x) + "," + Math.cos(x) + "," + 0 + "," + 
	    // 0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    // p.style = "transform-origin center 50% 0px; transform: matrix3d(" +
	    // Math.cos(x) + "," + Math.sin(-x) + "," + 0 + "," + 0 + ","+
	    // Math.sin(x) + "," + Math.cos(x) + "," + 0 + "," + 0 + "," + 
	    // 0 + "," + 0 + "," + 1 + "," + 0 + "," + 
	    // 0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    // p.style = "transform-origin center 50% 0px; transform: matrix3d(" +
	    // 1 + "," + 0 + "," + 0 + "," + 0 + ","+
	    // 0 + "," + Math.cos(x) + "," + Math.sin(-x) + "," + 0 + "," + 
	    // 0 + "," + Math.sin(x) + "," + Math.cos(x) + "," + 0 + "," + 
	    // 0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    // p.style = "transform-origin center 50% 0px; transform: matrix3d(" +
	    // Math.cos(x) + "," + 0 + "," + 0 + "," + Math.sin(-x) + ","+
	    // 0 + "," + 1 + "," + 0 + "," + 0 + "," + 
	    // Math.sin(x) + "," + 0 + "," + Math.cos(x) + "," + 0 + "," + 
	    // 0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    p.style = "transform-origin center 50% 0px; transform: matrix3d(" +
	    Math.cos(x) + "," + 0 + "," + Math.sin(-x) + "," + 0 + ","+
	    Math.sin(-x) * Math.sin(x) + "," + Math.cos(x) + "," + Math.cos(x) * Math.sin(-x) + "," + 0 + "," + 
	    Math.sin(x) * Math.cos(x) + "," + Math.sin(x) + "," + Math.cos(x) * Math.cos(x) + "," + 0 + "," + 
	    0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    // p1.style = "transform-origin center 50% 0px; transform: matrix3d(" +
	    // Math.cos(x) + "," + 0 + "," + Math.sin(-x) + "," + 0 + ","+
	    // Math.sin(-x) * Math.sin(x) + "," + Math.cos(x) + "," + Math.cos(x) * Math.sin(-x) + "," + 0 + "," + 
	    // Math.sin(x) * Math.cos(x) + "," + Math.sin(x) + "," + Math.cos(x) * Math.cos(x) + "," + 0 + "," + 
	    // 0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    // p2.style = "transform-origin center 50% 0px; transform: matrix3d(" +
	    // Math.cos(x) + "," + 0 + "," + Math.sin(-x) + "," + 0 + ","+
	    // Math.sin(-x) * Math.sin(x) + "," + Math.cos(x) + "," + Math.cos(x) * Math.sin(-x) + "," + 0 + "," + 
	    // Math.sin(x) * Math.cos(x) + "," + Math.sin(x) + "," + Math.cos(x) * Math.cos(x) + "," + 0 + "," + 
	    // 0 + "," + 0 + "," + 0 + "," + 1 + ");";

	    // p.innerHTML = "transform-origin center 50% 0px; transform: matrix3d(" +
	    // "2" + "," + "0" + "," + "0" + "," + "0" + ","+
	    // "0" + "," + "2" + "," + "0" + "," + "0" + "," + 
	    // "0" + "," + "0" + "," + "2" + "," + "2" + "," + 
	    // "0" + "," + "0" + "," + "0" + "," + "1" + ");";

	    document.getElementById('xy').innerHTML = "x = " + x + " y = " + y;

	}
	init();