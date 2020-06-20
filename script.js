var A0 = new Audio('Keys/A0.wav');
var Bb0 = new Audio('Keys/Bb0.wav');
var B0 = new Audio('Keys/B0.wav');

var C1 = new Audio('Keys/C1.wav');
var Db1 = new Audio('Keys/Db1.wav');
var D1 = new Audio('Keys/D1.wav');
var Eb1 = new Audio('Keys/Eb1.wav');
var E1 = new Audio('Keys/E1.wav');
var F1 = new Audio('Keys/F1.wav');
var Gb1 = new Audio('Keys/Gb1.wav');
var G1 = new Audio('Keys/G1.wav');
var Ab1 = new Audio('Keys/Ab1.wav');
var A1 = new Audio('Keys/A1.wav');
var Bb1 = new Audio('Keys/Bb1.wav');
var B1 = new Audio('Keys/B1.wav');

var C2 = new Audio('Keys/C2.wav');
var Db2 = new Audio('Keys/Db2.wav');
var D2 = new Audio('Keys/D2.wav');
var Eb2 = new Audio('Keys/Eb2.wav');
var E2 = new Audio('Keys/E2.wav');
var F2 = new Audio('Keys/F2.wav');
var Gb2 = new Audio('Keys/Gb2.wav');
var G2 = new Audio('Keys/G2.wav');
var Ab2 = new Audio('Keys/Ab2.wav');
var A2 = new Audio('Keys/A2.wav');
var Bb2 = new Audio('Keys/Bb2.wav');
var B2 = new Audio('Keys/B2.wav');

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

var C6 = new Audio('Keys/C6.wav');
var Db6 = new Audio('Keys/Db6.wav');
var D6 = new Audio('Keys/D6.wav');
var Eb6 = new Audio('Keys/Eb6.wav');
var E6 = new Audio('Keys/E6.wav');
var F6 = new Audio('Keys/F6.wav');
var Gb6 = new Audio('Keys/Gb6.wav');
var G6 = new Audio('Keys/G6.wav');
var Ab6 = new Audio('Keys/Ab6.wav');
var A6 = new Audio('Keys/A6.wav');
var Bb6 = new Audio('Keys/Bb6.wav');
var B6 = new Audio('Keys/B6.wav');

var C7 = new Audio('Keys/C7.wav');
var Db7 = new Audio('Keys/Db7.wav');
var D7 = new Audio('Keys/D7.wav');
var Eb7 = new Audio('Keys/Eb7.wav');
var E7 = new Audio('Keys/E7.wav');
var F7 = new Audio('Keys/F7.wav');
var Gb7 = new Audio('Keys/Gb7.wav');
var G7 = new Audio('Keys/G7.wav');
var Ab7 = new Audio('Keys/Ab7.wav');
var A7 = new Audio('Keys/A7.wav');
var Bb7 = new Audio('Keys/Bb7.wav');
var B7 = new Audio('Keys/B7.wav');

var C8 = new Audio('Keys/C8.wav');

function play(obj){
	var id=obj.id;
	checkNote(id);
}

function checkNote(id){
	if (id!=""){
		//document.getElementById(id).classList.add("red");
		if (document.getElementById(id).classList.contains('blackKey')){
			document.getElementById(id).style.backgroundImage = "url('Images/BlackRed.png')"; 
		}
		else if (document.getElementById(id).classList.contains('whiteKey')){
			document.getElementById(id).style.backgroundImage = "url('Images/WhiteRed.png')"; 
		}
		
		if (id=="A0"){ playSound(A0, id); }
		else if (id=="Bb0"){ playSound(Bb0, id); }
		else if (id=="B0"){	playSound(B0, id); }
		
		else if (id=="C1"){ playSound(C1, id); }
		else if (id=="Db1"){ playSound(Db1, id); }
		else if (id=="D1"){ playSound(D1, id); }
		else if (id=="Eb1"){ playSound(Eb1, id); }
		else if (id=="E1"){ playSound(E1, id); }
		else if (id=="F1"){ playSound(F1, id); }
		else if (id=="Gb1"){ playSound(Gb1, id); }
		else if (id=="G1"){ playSound(G1, id); }
		else if (id=="Ab1"){ playSound(Ab1, id); }
		else if (id=="A1"){ playSound(A1, id); }
		else if (id=="Bb1"){ playSound(Bb1, id); }
		else if (id=="B1"){	playSound(B1, id); }
		
		else if (id=="C2"){ playSound(C2, id); }
		else if (id=="Db2"){ playSound(Db2, id); }
		else if (id=="D2"){ playSound(D2, id); }
		else if (id=="Eb2"){ playSound(Eb2, id); }
		else if (id=="E2"){ playSound(E2, id); }
		else if (id=="F2"){ playSound(F2, id); }
		else if (id=="Gb2"){ playSound(Gb2, id); }
		else if (id=="G2"){ playSound(G2, id); }
		else if (id=="Ab2"){ playSound(Ab2, id); }
		else if (id=="A2"){ playSound(A2, id); }
		else if (id=="Bb2"){ playSound(Bb2, id); }
		else if (id=="B2"){	playSound(B2, id); }
		
		else if (id=="C3"){ playSound(C3, id); }
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
		
		else if (id=="C6"){ playSound(C6, id); }
		else if (id=="Db6"){ playSound(Db6, id); }
		else if (id=="D6"){ playSound(D6, id); }
		else if (id=="Eb6"){ playSound(Eb6, id); }
		else if (id=="E6"){ playSound(E6, id); }
		else if (id=="F6"){ playSound(F6, id); }
		else if (id=="Gb6"){ playSound(Gb6, id); }
		else if (id=="G6"){	playSound(G6, id); }
		else if (id=="Ab6"){ playSound(Ab6, id); }
		else if (id=="A6"){ playSound(A6, id); }
		else if (id=="Bb6"){ playSound(Bb6, id); }
		else if (id=="B6"){ playSound(B6, id); }
		
		else if (id=="C7"){ playSound(C7, id); }
		else if (id=="Db7"){ playSound(Db7, id); }
		else if (id=="D7"){ playSound(D7, id); }
		else if (id=="Eb7"){ playSound(Eb7, id); }
		else if (id=="E7"){ playSound(E7, id); }
		else if (id=="F7"){ playSound(F7, id); }
		else if (id=="Gb7"){ playSound(Gb7, id); }
		else if (id=="G7"){	playSound(G7, id); }
		else if (id=="Ab7"){ playSound(Ab7, id); }
		else if (id=="A7"){ playSound(A7, id); }
		else if (id=="Bb7"){ playSound(Bb7, id); }
		else if (id=="B7"){ playSound(B7, id); }
		
		else if (id=="C8"){ playSound(C8, id); }
	}
	
}

function playSound(note, id){

	if (!note) return;
	note.currentTime = 0;

	var clone = note.cloneNode();
	clone.play();
	setTimeout(() => (clone.volume = 1), 1);
	setTimeout(() => keys(id), 150);
}

function keys(id){
	if (document.getElementById(id).classList.contains('blackKey')){
		document.getElementById(id).style.backgroundImage = "url('Images/Black.png')"; 
	}
	else if (document.getElementById(id).classList.contains('whiteKey')){
		document.getElementById(id).style.backgroundImage = "url('Images/White.png')"; 
	}
}

var mel=["A4","A4", "Bb4","C5", "C5", "Bb4", "A4", "G4", "F4", "F4", "G4", "A4","A4","G4"];

var elise= ["E5", "Eb5", "E5", "Eb5", "E5", "B4", "D5", "C5", "A4",
			"",     "",    "C4",   "E4", "A4", "B4", "", " ", "E4",
			"Ab4",     "B4",    "C5",   "", "", "E4", "E5", "Eb5", "E5"];
var elis2= ["",   "",     "",   "",    "",   "",   "",   "",  "A2", "E3","A3","","","","E2","E3"];


function playMelody(){
	for (let i=0; i<elise.length; i++) { 
		task(i); 
	} 
	function task(i) { 
	  setTimeout(function() { 
		checkNote(elise[i]);
		checkNote(elis2[i]);
	  }, 250 * i); 
	} 
}


