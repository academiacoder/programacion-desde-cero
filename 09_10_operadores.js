// OPERADORES
/* Los operadores nos permiten manipular el valor de las variables, realizar
operaciones matemáticas y comparar las variables. */

// ASIGNACIÓN
var numero1 = 10;
var numero2 = 22;

var mismoNumero = numero1; // mismoNumero ahora tiene el valor 10
/* En este ejemplo donde estamos asignando la variable "numero1" a la
variable "mismoNumero", no estamos diciendo que "mismoNumero" es igual
a "numero1", sino que estamos diciendo que "mismoNumero" ahora contiene el
valor que "numero1" tiene al momento de la asignación. */

var resultado = numero1 + numero2;
/* Al igual que en el ejemplo anterior ahora la variable "resultado"
lo que tiene asignado es justamente el resultado de la operación matemática
"suma" de "numero1" y "numero2" es decir que tiene el valor 32 */

/* IMPORTANTE: Como la secuencia siempre ejecuta la parte derecha del igual primero
podemos trabajar con la misma variable en ambas partes del igual, y volver a guardar
en la variable que estamos trabajando. */
resultado = resultado + 10;



// INCREMENTO Y DECREMENTO
/* Soló son válidos para variables númericas y se utilizan para incrementar
o disminuir el valor de la misma */

// INCREMENTO
var numero3 = 5;
numero3++; // Ahora "numero3" tiene el valor 6
// es decir es lo mismo que hacer...
numero3 = numero3 + 1;
// también puede utilizarse de esta forma
++numero3; // En este ejemplo el resultado es el mismo pero no funcionan igual

// DECREMENTO
numero3--;
// tambien puede utilizarse de esta forma
--numero3;
// que es lo mismo que...
numero3 = numero3 - 1;

/* Estos operadores pueden utilizarse dentro de otras operaciones, pero entonces
tenemos que tener en cuenta si estamos usando el operador antes o despues del nombre
de la variable
POR EJEMPLO!!! */
var numero4 = 10;
resultado = numero4 + 10;
// En este ejemplo "resultado" vale 20, y "numero4" ahora vale 11
var numero5 = 10;
resultado = ++numero5 + 10;
// En este caso (++numero5) se ejecuta antes de la operación matemática entonces
// "resultado" vale 21 y "numero5" 11



// LÓGICOS (Booleanos)
/* Son lo operadores que utilizaremos permententemente para realizar condiciones
justamente son los operadores verdadero y falso*/
var verdadero = true;
var falso = false;

// NEGACIÓN (!)
/* Para la utilziación de los valores Booleanos contamos con diferentes herramientas
una de ellas es la negación que justamente nos devuelve el contrario de un valor
booleano y se utiliza con el simbolo de exclamación ! */
var noVerdadero = !verdadero; // Esto guardará false
var noFalso = !falso; // Esto guarda verdadero true

/* Trabajando con estos valores true o false es muy simple encontrar el contrario
pero la negación podemos utilizarla para encontrar si una variable contiene o
no un valor asignado usandolo con variables tipo "Strings" o "Numéricas".
Esto es como si le preguntaramós a JavaScript:
la cadena de texto está vacia?
el número que tenes asignado es cero? */
var numero6 = 0;
var numero7 = 2;
var numero8 = -2;
var verdaderoFalso = !numero6; // Esto es igual a "true" (verdadero)
verdaderoFalso = !numero7; // "false" (falso)
verdaderoFalso = !numero8; // "false" (falso)

var string1 = "";
var string2 = "Hola mundo";
verdaderoFalso = !string1; // Esto es "true" (verdadero)
verdaderoFalso = !string2; // "false" (falso)


// AND "Y" (&&)
/* Nos sive para comparar 2 valores booleanos y tendremos como resultado justamente
un valor booleano dependiendo del contenido de los valores a comparar.
Se utiliza mediante el simbolo && (doble ampersand)
El operador AND solo nos devolverá Verdadero cuando los 2 elementos a comparar sean
verdaderos.
*/
var valor1 = true;
var valor2 = true;
var comparadorAND = valor1 && valor2; // comparadorAND ahora es true (Verdadero)

/* Si cambiamos el valor de valor1 o valor2 a false o ambos a false, el comparador AND
nos devolverá false (Falso) */
valor1 = false;
comparadorAND = valor1 && valor2; // comparadorAND ahora es false (Falso)


// OR "O" (||)
/* El operador OR es algo así como el contrario de AND, ya que en el caso de OR el
resultado solo será falso si ambos valores son falsos, en cualquier otro caso
siempre será verdadero se utiliza con el simbolo doble pleca */
valor1 = true;
valor2 = true;
var comparadorOR = valor1 || valor2; // comparadorOR contiene true (Verdadero)

valor1 = false;
comparadorOR = valor1 || valor2; // compardorOR contiene true (Verdadero)

valor2 = false;
comparadorOR = valor1 || valor2; // compardorOR contiene false (Falso)



// MATEMÁTICOS
/* Podemos realizar operaciones matemáticas directamente en JavaScript sin necesidad
de funciones extras como por ejemplo que ya hemos visto la suma. Pero así como la suma
también podemos realizar
"Resta" (-)
"Multiplicación" (*)
"División" (/)
"Módulo o Resto" (%)

Cabe resaltar que solo el operador suma puede usarse en otro tipo de variables
ya que también puede usarse en cadenas de texto (Strings)
*/

var mate1 = 10;
var mate2 = 5;

var resultado = mate1 + mate2; // resultado ahora contiene 15
resultado = mate1 - mate2; // resultado ahora contiene 5
resultado = mate1 * mate2; // resultado ahora contiene 50
resultado = mate1 / mate2; // resultado ahora contiene 2
resultado = mate1 % mate2; // resultado ahora contiene 0

/* cuando a una variable queresmos realizarle una operación y asignarla el resultado
a la misma variable, podemos abreviar la notación agregando el simbolo igual (=) al
operador que vayamos a utilizar
POR EJEMPLO*/
var ejemplo = 10;
// queremos queremos sumarle 5 a ejemplo
ejemplo = ejemplo + 5;
// muy bien esto podríamos abreviarlo así
ejemplo += 5;

var mate3 = 5;
mate3 += 5; // mate3 ahora contiene 10;
mate3 -= 3; // mate3 ahora contiene 2;
mate3 *= 10; // mate3 ahora contiene 50;
mate3 /= 5; // mate3 ahora contiene 1;
mate3 /= 4; // mate3 ahora contiene 1;

// RELACIONALES
/* Los operadores relacionales son los mismos que utilizamos en matemáticas para
decir que un valor es mayor que, o menor que, o igual a, o diferente a.
Así como también podemos decir si es mayor o igual que, o menor o igual que
(>) Mayor que
(<) Menor que
(>=) Mayor o igual que
(<=) Menor o igual que
(==) Igual que
(!=) Distinto de
El resultado de estas comparaciones siempre es un valor booleano (verdadero o falso) */

var comparar1 = 2;
var comparar2 = 4;
var comparar3 = comparar1 - comparar2;

var comparacion = comparar1 > comparar2; // Falso
comparacion = comparar1 < comparar2; // Verdadero
comparacion = comparar1 == comparar2; // Falso
comparacion = comparar1 != comparar2; // Verdadero

/* Podemos utilizar estos operadores para comparar también cadenas de texto
cuando usamos ==, != es muy facil entender el resultado, ya que es verdadero
si es igual y falso si no lo es.

En cuanto a >, <, >=, <=  lo que hay que comparar es el orden alfabético
las Mayusculas son siempre menores que las minusculas, y el orden de comparación
va de izquierda a derecha */

var texto1 = "Hola";
var texto2 = "hola";
var texto3 = "hola";
var texto4 = "adios";

comparaTexto = texto1 == texto2; // Falso ya que es sensible a mayusculas
comparaTexto = texto1 != texto2; // Verdadero ya que es sensible a mayusculas
comparaTexto = texto2 == texto3; // Verdadero ya que es sensible a mayusculas

comparaTexto = texto1 >= texto4; // Falso ya que las Mayusculas son menores que las minusculas
comparaTexto = texto2 >= texto4; // Verdadero la "h" es mayor a la "a"

comparaTexto = texto2 > texto3; // Falso ya que no es mayor son iguales
comparaTexto = texto2 < texto3; // Falso ya que no es menor son iguales


// === o !==
var stringNumero = "2";
var stringNumero2 = 2;

var array = [
  1,
  true,
  "adios",
  "Adios",
  5,
  false
];

// REALIZAR LAS COMPARACIONES NECESARIAS
/*
1- Determinar cual de los elementos de texto es mayor
2- Usando los elementos booleanos del array, determinar con ambos comparadores
lógicos (&& y ||) cuando da verdaero y cuadno falso
3- Determinar el resultado de las 5 operaciones matemáticas */
