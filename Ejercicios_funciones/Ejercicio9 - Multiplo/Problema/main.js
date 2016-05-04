function multiplos(){	
	var contador=" ";
	var div = 0;
	var num = Number(prompt("ingresa numero"));
	for (i = 1; i <= 10; i++)
	{
	    	div = div + num;
	    	contador+=div+"<br>";
	    	
	}
	document.write(contador);
}
multiplos()