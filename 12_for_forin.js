// Ejemplos para probar el funcionamiento

// Declaramos la variable mensaje con un string!
var mensaje = "Este es un mensaje para usar en un FOR";

// Ejecutamos el ciclo for que consta de 3 partes
// 1 inicializamos la variable i con un valor 0
// 2 definimos la condición indicando que queremos que se repita mientras que i sea menor que 5
// 3 incrementamos el valor de i en una unidad cada vez que se ejecuta el bloque de código
for (var i = 0; i < 5; i++) {
  document.write(mensaje + "<br>");
}

// RECORREMOS UN ARRAY CON LA AYUDA DE FOR

var dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

for(var i = 0; i < 7; i++) {
  document.write(dias[i] + "<br>");
}

// Recorrer arrays de sa forma no es muy eficiente además tenemos que saber la cantidad de elementos que tiene el array
// por este motivo para recorrer arrays y objetos en JavaScript usamos otra estructura que es For...In
for(i in dias) {
  document.write(dias[i] + "<br>");
}
