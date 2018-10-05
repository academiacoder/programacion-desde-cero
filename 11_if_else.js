// Ejemplo de IF para usar en CodePen
var mostarMensaje = true;

if(mostarMensaje) {
  document.write("Hola Mundo!");
};

// Ejemplo de IF else...
var edad = 2; // Cambien el valor de la variable para obtener distintos resultados

if(edad >= 18) {
  document.write("Es mayor de edad");
} else {
  document.write("Es menor de edad")
}

// Ejemplo de if else if para codepen
if(edad < 13) {
  document.write("Eres un niño");
} else if (edad < 19){
  document.write("Eres un adolescente");
} else if (edad < 35) {
  document.write("Animo! Todavía eres Joven")
} else {
  document.write("Empieza a cuidarte ya no eres un niño")
}
