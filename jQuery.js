
$(document).ready(function() {

$(".A").on('click', function () {
	$("#color").css("backgroundColor", "cadetblue")
  	$("#theBody").append("<h1>You pressed the Button. Wild!<h1>");
  	$("buttonN").append("<")
	console.log("You pressed: Button 1.");
});

$(".buttonN").on('click', function () {
  	$("#forNs").append("<h1>N! N! N!</h1>");
	console.log("You pressed: N.");
});

$("#button2").on('click', function () {
  	$("#theBody").append("<ul><li>Dogs</li><li>Cats</li><li>Horses</li></ul>");
	console.log("You pressed Button 2.");
});

$("p").on('mouseenter', function() {
	$(this).css( "color", "pink" );
	console.log("Pink text.");
});

$("h6").on('click', function() {
	$("h6").append("!");
	console.log("Add ! to h6 elements.");
});

$("#toCNN").on('click', function () {
	var a = (confirm("go to cnn?"));
	if (a === false) {
		return false;
	}
});

$("#goAway").on('click', function () {
	var a = (confirm("Press Cancel to have link disappear."));
	if (a === false) {
		$(this).remove();
		return false;
	}
});

});






