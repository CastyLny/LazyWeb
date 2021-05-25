






var titles = []
var captions = ["This is the map of the Citarum river, Java, Indonesia.", "Life supply to 25 million Indonesian- ",
"and one of the most polluted river in the world.",
"The main pollutant in water is mostly Lead, ",
"Mercury, here is Carleton Burgan, victim of a severve case of Mercury deformity",
"and Asernic, which lead to cancer and skin lesions,",
"along with other toxins like sulphites and nonylphenol.",
"60% of the fish is killed by the poison in the river.",
"Then who is responsible for this?",
"According to wikipedia, wastes from 2000 textile factory are being dumped into the river everyday.",
"Here is a picture of just under 90km square around the Citarum river,",
"we can spot several different textile factories.",
"on Feb of last year, PT.Kamarga Kurniga Textile was found guilty to be polluting the river.",
"They were fined $301k, however that was to be lower than the expected amount",
"Similar situations like this are happening around the world",
"Fast fashion are business model that produce cloth in a vast amount",
"They take advantage from the resources from developing countries and that came with a price.",
"H&M and Zara are examples of companies with this business model.",
]
var imageAddress  = ["002.png", "indoRiver.jpg","river.jpg", "leadPoisoning.jpg", "MercuryDeformity.jpg", "SkinLesions.jpg", "toxins.webp","Fish.jpg",
"trash.jpg", "textilePollution.jpg", "001.PNG","001.PNG","Kamarga.jpg", "Kamarga2.jpg", "childLabor.jpg", "fastFashion.jpg", "bangladesh.jpg","H&M.jpg"





]

var n = 0


function newSlide(chicken){

	if(chicken > 0){
		
		n += 1
	}
	else{
		n -= 1
	}
	if (n<0){

		n = 0 
	}

	if (n>=captions.length){
		n = 0
		end()
	}


	console.log(n)
	update()



}



function start(){
	document.getElementById("opening").style.animation = "fadein 1.5s forwards reverse";
	setTimeout(()=>{
		document.getElementById("opening").style.display = "none";
		document.getElementById("show").style.display = "block";
	},1500)
}

function end(){
	document.getElementById("opening").style.display = "block";
	document.getElementById("show").style.display = "none";
	document.getElementById("opening").style.animation = "fadein 1.5s forwards";
	document.getElementById("title").innerHTML = "Mind what you wear."
	document.getElementById("Warning").innerHTML = "Because we are paying more than just money."
	document.getElementById("continueButton").style.display = "none";

	setTimeout(()=>{
		document.getElementById("opening").style.animation = "fadein 1.5s forwards reverse";
		setTimeout(()=>{
			location.reload()

		},1500)
	},10000)

	
	
}


function update(){
	//document.getElementById("title").innerHTML = titles[n]
	document.getElementById("caption").innerHTML = captions[n]
	console.log( n%2)
	document.getElementById("captionContainer").style.animation = "fadein" + n%2 +" 1.5s forwards";
	document.getElementById("show").style.background = "url('./Material/" + imageAddress[n] + "')center no-repeat"
	document.getElementById("show").style.backgroundSize = "cover"
}
citation = false

function citationHandle(){
	if (!citation){
		document.getElementById("citation").style.animation = "showCitation 0.5s forwards";
		citation = true;
	}else{
		document.getElementById("citation").style.animation = "closeCitation 0.5s forwards";
		citation = false;
	} 
	
}
