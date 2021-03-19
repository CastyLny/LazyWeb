
var pageNum = 0;


console.log("Kid, you are not helping me here, don't look at the source")




var answers = [
"ab",
"3",
"world",
"ab",
"ab",
"ab",
"ab",
"ab",
"ab",
"ab",
"ab",
"ab"
]



var BigDialogues = [
"Don't come back now!",
"Kid, it's not 24 hours yet!",
"Stoop!",
"Kid, please, leave me alone.",
"URGGGGHHHHHHH!",
"Fine,",
"we can talk.",
"For a moment at least"


]



var hint = [
"an oddity in the url",
"<a href = 'https://www.history.com/topics/world-war-ii/world-war-ii-history'>Here</a> you find a word, 65",
""

]

function check(){
	console.log(document.getElementById("answer").value);
	console.log(answers[pageNum]);
	return document.getElementById("answer").value == answers[pageNum];


}


function Continue(){

	if (check()){


		if (pageNum == 0){
			document.getElementById("enterBox").style.display = "block";
			document.getElementById("answer").value = "";
		}

		console.log("true");
		document.getElementById("BigText").innerText = BigDialogues[pageNum % BigDialogues.length];
		document.getElementById("dialogue").innerHTML = 'Hint: ' + hint[pageNum]
		pageNum = (pageNum + 1) %  BigDialogues.length;

	}






	if(pageNum == 4){
		document.getElementById("Body").style = "background-color: #111;"
		document.getElementById("mainText").style = "color: white;";
	}else if(pageNum == 6){
		document.getElementById("Body").style = "background-color: white;"
		document.getElementById("mainText").style = "color: black;";
	}





	return false;
}




