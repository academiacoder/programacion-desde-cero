var cadena1 = "Hola mundo Hamburguesa";
var cadena2 = " soy una cadena";

// Calcular el tamaño de una cadena
resultado = cadena1.length;

// Concatenar cadenas
resultado = cadena1 + cadena2;
resultado = cadena1.concat(cadena2);

// Convertir cadena en mayusculas
resultado = cadena1.toUpperCase();

// Convertir a minusculas
resultado = cadena1.toLowerCase();

// Obtener el caracter ubicado en una posición que indicamos
resultado = cadena1.charAt(2);

// Obtener la primera posición encontrada de un caracter o cadena
resultado = cadena1.indexOf("ola");

// Obtenemos la última coincidencia
resultado = cadena1.lastIndexOf("H");

// Tomar una parte de una cadena
resultado = cadena1.substring(2);

resultado = cadena1.substring(2, 10);

// Dividir cadena de texto
var resultado = cadena1.split("");

document.write(resultado);
