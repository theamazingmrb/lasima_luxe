var $logo = $('#lasimaLogo');
var $door1 = $('#door1');
var $door2 = $('#door2');

$logo.click(function() {
	$logo.fadeOut(3000);
	$door1.animate({"left": "-=49%"}, 3000);
	$door2.animate({"left": "+=49%"}, 3000);
});