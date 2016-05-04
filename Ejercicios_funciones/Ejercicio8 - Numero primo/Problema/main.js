function numeroPrimo(){
	var num = parseInt(prompt("Introduzca un numero"));
	var i=2;
		while(i<num){
			if(num%i == 0){
				document.write("El numero no es primo");
				break;
			}
			else 
				i++;
		}
		if(i==num)
			document.write("El numero es primo");	
}
numeroPrimo();