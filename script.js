var C3 = new Audio('Keys/C3.wav');
var Db3 = new Audio('Keys/Db3.wav');
var D3 = new Audio('Keys/D3.wav');
var Eb3 = new Audio('Keys/Eb3.wav');
var E3 = new Audio('Keys/E3.wav');
var F3 = new Audio('Keys/F3.wav');
var Gb3 = new Audio('Keys/Gb3.wav');
var G3 = new Audio('Keys/G3.wav');
var Ab3 = new Audio('Keys/Ab3.wav');
var A3 = new Audio('Keys/A3.wav');
var Bb3 = new Audio('Keys/Bb3.wav');
var B3 = new Audio('Keys/B3.wav');

var C4 = new Audio('Keys/C4.wav');
var Db4 = new Audio('Keys/Db4.wav');
var D4 = new Audio('Keys/D4.wav');
var Eb4 = new Audio('Keys/Eb4.wav');
var E4 = new Audio('Keys/E4.wav');
var F4 = new Audio('Keys/F4.wav');
var Gb4 = new Audio('Keys/Gb4.wav');
var G4 = new Audio('Keys/G4.wav');
var Ab4 = new Audio('Keys/Ab4.wav');
var A4 = new Audio('Keys/A4.wav');
var Bb4 = new Audio('Keys/Bb4.wav');
var B4 = new Audio('Keys/B4.wav');

var C5 = new Audio('Keys/C5.wav');
var Db5 = new Audio('Keys/Db5.wav');
var D5 = new Audio('Keys/D5.wav');
var Eb5 = new Audio('Keys/Eb5.wav');
var E5 = new Audio('Keys/E5.wav');
var F5 = new Audio('Keys/F5.wav');
var Gb5 = new Audio('Keys/Gb5.wav');
var G5 = new Audio('Keys/G5.wav');
var Ab5 = new Audio('Keys/Ab5.wav');
var A5 = new Audio('Keys/A5.wav');
var Bb5 = new Audio('Keys/Bb5.wav');
var B5 = new Audio('Keys/B5.wav');



function play(obj){
	var id=obj.id;
	checkNote(id);
}

function checkNote(id){
	if (id!=""){
		document.getElementById(id).classList.add("red");
		
		if (id=="C3"){ playSound(C3, id); }
		else if (id=="Db3"){ playSound(Db3, id); }
		else if (id=="D3"){ playSound(D3, id); }
		else if (id=="Eb3"){ playSound(Eb3, id); }
		else if (id=="E3"){ playSound(E3, id); }
		else if (id=="F3"){ playSound(F3, id); }
		else if (id=="Gb3"){ playSound(Gb3, id); }
		else if (id=="G3"){ playSound(G3, id); }
		else if (id=="Ab3"){ playSound(Ab3, id); }
		else if (id=="A3"){ playSound(A3, id); }
		else if (id=="Bb3"){ playSound(Bb3, id); }
		else if (id=="B3"){	playSound(B3, id); }
		

		else if (id=="C4"){ playSound(C4, id); }
		else if (id=="Db4"){ playSound(Db4, id); }
		else if (id=="D4"){ playSound(D4, id); }
		else if (id=="Eb4"){ playSound(Eb4, id); }
		else if (id=="E4"){ playSound(E4, id); }
		else if (id=="F4"){ playSound(F4, id); }
		else if (id=="Gb4"){ playSound(Gb4, id); }
		else if (id=="G4"){	playSound(G4, id); }
		else if (id=="Ab4"){ playSound(Ab4, id); }
		else if (id=="A4"){ playSound(A4, id); }
		else if (id=="Bb4"){ playSound(Bb4, id); }
		else if (id=="B4"){ playSound(B4, id); }
		
		else if (id=="C5"){ playSound(C5, id); }
		else if (id=="Db5"){ playSound(Db5, id); }
		else if (id=="D5"){ playSound(D5, id); }
		else if (id=="Eb5"){ playSound(Eb5, id); }
		else if (id=="E5"){ playSound(E5, id); }
		else if (id=="F5"){ playSound(F5, id); }
		else if (id=="Gb5"){ playSound(Gb5, id); }
		else if (id=="G5"){	playSound(G5, id); }
		else if (id=="Ab5"){ playSound(Ab5, id); }
		else if (id=="A5"){ playSound(A5, id); }
		else if (id=="Bb5"){ playSound(Bb5, id); }
		else if (id=="B5"){ playSound(B5, id); }
	}
	
}

function playSound(note, id){

	if (!note) return;
	note.currentTime = 0;

	var clone = note.cloneNode();
	clone.play();
	setTimeout(() => (clone.volume = 0.8), 400);
	setTimeout(() => document.getElementById(id).classList.remove("red"), 150);
}

var mel=["A4","A4", "Bb4","C5", "C5", "Bb4", "A4", "G4", "F4", "F4", "G4", "A4","A4","G4"];

var elise= ["E5", "Eb5", "E5", "Eb5", "E5", "B4", "D5", "C5", "A4",
			"",     "",    "C4",   "E4", "A4", "B4", "", " ", "E4",
			"Ab4",     "B4",    "C5",   "", "", "E4", "E5", "Eb5", "E5"];
var elis2= ["",   "",     "",   "",    "",   "",   "",   "",  "A2"];


function playMelody(){
	for (let i=0; i<elise.length; i++) { 
		task(i); 
	} 
	function task(i) { 
	  setTimeout(function() { 
		checkNote(elise[i]);
		checkNote(elis2[i]);
	  }, 500 * i); 
	} 
}


