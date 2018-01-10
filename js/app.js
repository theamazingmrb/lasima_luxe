var $logo = $('#lasimaLogo');
var $door1 = $('#door1');
var $door2 = $('#door2');

// Oppening animation set up

$logo.click(function() {
	$logo.fadeOut(3000);
	$door1.animate({"left": "-=49%"}, 3000);
	$door2.animate({"left": "+=49%"}, 3000);
});

window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}