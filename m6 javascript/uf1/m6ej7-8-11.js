function check(){
	var input = document.getElementById("numero").value;
	if (input % 3 == 0) {
		document.getElementById("resultat").innerHTML = input + " és divisible entre 3 \n";
		if (input % 7 == 0) {
			document.getElementById("resultat").innerHTML = input + " També és divisible entre 7";
	}else{
		document.getElementById("resultat").innerHTML = input + " Però no és divisible entre 7";
	}
	}else if (input % 3 != 0){
		document.getElementById("resultat").innerHTML = input + " No és divisible entre 3";
	}else if (input % 7 != 0){
		document.getElementById("resultat").innerHTML = input + " No és divisible entre 7";
		

	}
}