/*html5rocks: removing hover effects during user scroll*/

var enableTimer = 0;

window.addEventListener('scroll', function(){
	console.log('test');
	clearTimeout(enableTimer);
	removeHoverClass();

	//enable after 1 second
	enableTimer = setTimeout(addHoverClass, 99000);
}, false);


//helpers:
function removeHoverClass(){
	document.body.classList.remove('hover');
}

function addHoverClass(){
	document.body.classList.add('hover');
}