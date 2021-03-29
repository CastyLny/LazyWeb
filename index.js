
function openning(){
	document.getElementById("waiting").style.display = "none";
	document.getElementById("transition").style.display = "block";
	document.getElementById("openningText").style.display = "none";

	setTimeout(function(){
		document.getElementById("gotoContainer").style.display = "flex";
	}, 13000)
}


function goOn(adress){
	window.location.href = adress;
}