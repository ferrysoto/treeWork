

function check(){
	var input = document.getElementById("numero").value;
	if (input % 2 == 0){
	document.getElementById("resultat").innerHTML = input + " es par";
	}else{
	document.getElementById("resultat").innerHTML = input + " es senar";
}
}
