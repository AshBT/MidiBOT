// Add your javascript here

$(function() {
	var url = "http://192.168.1.55:8071/motion-control/update";
	
	$(".turn-left").on("click", function() {
		console.log("turning left");
		$.ajax(url, {dataType: "jsonp", data: {turn: -1}, success: function() {console.log("turning left - done")}});
	});

	$(".turn-right").on("click", function() {
		console.log("turning right");
		$.ajax(url, {dataType: "jsonp", data: {turn: 1}, success: function() {console.log("turning right - done")}});
	});

	$(".strafe-left").on("click", function() {
		console.log("strafing right");
		$.ajax(url, {dataType: "jsonp", data: {strafe: -1}, success: function() {console.log("strafe left - done")}});
	});
	
	$(".strafe-right").on("click", function() {
		console.log("strafing right");
		$.ajax(url, {dataType: "jsonp", data: {strafe: +1}, success: function() {console.log("strafe right - done")}});
	});
	
	$(".stop").on("click", function() {
		console.log("STOP");
		$.ajax(url, {dataType: "jsonp", data: {forward: 0}, success: function() {console.log("STOP")}});
	});
	
	$(".go-forward").on("click", function() {
		console.log("go forward");
		$.ajax(url, {dataType: "jsonp", data: {forward: 1}, success: function() {console.log("GO FORWARD")}});
	});
	
	$(".go-backward").on("click", function() {
		console.log("go backward");
		$.ajax(url, {dataType: "jsonp", data: {forward: -1}, success: function() {console.log("GO B")}});
	});
})