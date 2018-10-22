# Curso de Programación Desde Cero con JavaScript

## Indice

- [Curso de Programación Desde Cero con JavaScript](#curso-de-programación-desde-cero-con-javascript)
  - [Indice](#indice)
  - [1. Partes anteriores](#1-partes-anteriores)
  - [2. Estructuras de control de flujo (Condicionales)](#2-estructuras-de-control-de-flujo-condicionales)
    - [2.1 Bloques de código](#21-bloques-de-código)
    - [2.2 Estructura Si... (if)](#22-estructura-si-if)
      - [2.2.1 Estructura Si...sino (if...else...)](#221-estructura-sisino-ifelse)
      - [2.2.2 Anidando if y else (else if)](#222-anidando-if-y-else-else-if)
  - [3. Estructuras de control de flujo (Ciclos)](#3-estructuras-de-control-de-flujo-ciclos)
    - [3.1 Estructura Para... (for)](#31-estructura-para-for)
    - [3.2 Estructura Para, en... (for in)](#32-estructura-para-en-for-in)
  - [4. Funciones y Métodos de JavaScript](#4-funciones-y-métodos-de-javascript)
    - [4.1 Utilidades para Cadenas de texto (Strings)](#41-utilidades-para-cadenas-de-texto-strings)
    - [4.2 Utilidades para Arrays](#42-utilidades-para-arrays)
    - [4.3 Utilidades para Números](#43-utilidades-para-números)
  - [5. Funciones](#5-funciones)
    - [5.1 Estructura de una función](#51-estructura-de-una-función)
    - [5.2 Parámetros](#52-parámetros)
    - [5.3 Ámbito de las variables](#53-Ámbito-de-las-variables)
  - [6. Sentencias Break y Continue](#6-sentencias-break-y-continue)
    - [6.1 Sentencia Break](#61-sentencia-break)
    - [6.2 Sentencia Continue](#62-sentencia-continue)

---

## 1. Partes anteriores

Se añadiran las explicaciones anteriores al finalizar el curso!

## 2. Estructuras de control de flujo (Condicionales)

Las estructuras de control de flujo nos permitiran justamente eso, controlar la forma en que fluye la información dentro de nuestro programa.

En todos los lenguajes de programación existen estas estructuras y la mayoría se comportan y componen de maneras muy similares.

Las estructuras condicionales, justamente nos permiten realizar un bloque de código dependiendo de una o varias condiciones a cumplir.

### 2.1 Bloques de código

Antes de entrar en las estructuras de control es importante que entiendan que es un bloque de código, y es simplemente un conjunto de sentencias agrupadas que deben ejecutarse en su totalidad, en JavaScript se definen los bloques de código entre llaves normales {}

```javascript
{
  // Esto
  // es
  // un
  // bloque de código
}
```

Cabe aclarar que no suelen utilizarse de esta manera, normalmente utilizamos los bloques de código con estructuras de control de flujo, funciones, etc... Los bloques de código como en el ejemplo anterior no tienen sentido.

### 2.2 Estructura Si... (if)

Es la estructura más utilizada tanto en JavaScript como en otros lenguajes, y es la que empleamos para realizar una operación si se cumple una condición.

```javascript
if(condicion) {
  // Ejecuta este bloque de código si la condición es verdadera
}
```

Esta estructura simplemente nos ayuda a ejecutar el contenido de ese bloque de código si se cumple la condición que está entre parentesis. Es decir que la condición debe retornar verdadero para que se ejecúte ese código.

#### 2.2.1 Estructura Si...sino (if...else...)

Esta estructura es igual al if, pero con una diferencia, podemos brindarle un segundo bloque de código el cual se ejecutará solo si la condición especificada en el if no se cumple.

```javascript
if(condicion) {
  // Ejecuta este bloque de código si la condición es verdadera
} else {
    // Ejecuta este bloque de código solo si la condición no es verdadera
}
```

#### 2.2.2 Anidando if y else (else if)

En un else podemos asignar un if extra al cual podemos indicarle otra condición, por lo cual el código del bloque.
En este pundo debo aclarar que en algunos lenguajes hay una estructura específica para declarar un `else if`por ejemplo en python es `elif`.

```javascript
if(condicion1) {
  // Ejecuta este bloque de código si la condición es verdadera
} else if(condicion2) {
  // Ejecuta este bloque de código si la condición2 es verdadera pero no la condición1
} else {
    // Ejecuta este bloque de código solo si ninguna de las condiciones es verdadera.
}
```

**IMPORTANTE:** No es necesario que exista un `else`, el `else` solo será utilizado cuando queramos ejecutar un bloque de código por defecto en caso de que la condición requerida no se cumpla.

## 3. Estructuras de control de flujo (Ciclos)

Los ciclos dentro de las estructuras de control nos permiten repetir un bloque de código una X cantidad de veces dependiendo de una condición a cumplir.

### 3.1 Estructura Para... (for)

La estructura for nos permite realizar repeticiones (ciclo o bucle) de una forma sencilla, aunque deben entender bien como se forma.

```javascript
for(inicialización; condición; actualización) {
  // Bloque de código a ejecutar
}
```

For funciona de la siguiente manera, mientras la condición indicada en el segundo parámetro se cumpla, va a ejecutar el bloque de código una y otra vez, realizando el proceso de actualización indicado en el tercer parámetro.

Vamos a mostrar un mensaje en pantalla 5 veces.

```javascript
var mensaje = "Soy un mensaje dentro de un for";

// Inicializamos una variable que nos servirá de contador, damos la condición, sumamos 1 a la variable en cada iteración
for(var i = 0; i < 5; i++) {
  document.write(mensaje + "<br>");
};

```

Le damos el nombre i a la variable de inicialización por convención ya que no es una regla, pero normalmente los nombre de variable deben tener relación con lo que quieren representar y en este caso i representa un indice.

Podemos usar esa variable para lo que sea, por ejemplo para iterar un array usando sus indices

```javascript
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for(var i = 0; i < 7; i++){
  document.write(dias[i] + "<br>");
};
```

### 3.2 Estructura Para, en... (for in)

La forma anterior presentada para recorrer un array no es la recomendada, ya que contamos con una estructura específica para esto, con la que podemos recorrer arrays y objetos en JavaScript, también en la mayoría de los lenguajes existe una estructura como esta.

Su uso es simple se utiliza for y dentro de los parentesis indicamos que vamos a recorrer el indice en el array.

```javascript
for(indice in array) {
  // Recorremos el array EN ORDEN!!!
  // va de 0 hasta el último número del indice
}
```

Siguiendo el ejemplo anterior tendríamos

```javascript
var dias = ["lunes", "martes", "miercoles", "jueves", "viernes", "sabado", "domingo"];

for(i in dias){
  document.write(dias[i] + "<br>");
};
```

## 4. Funciones y Métodos de JavaScript

[Link al archivo de la clase](https://github.com/academiacoder/programacion-desde-cero/blob/master/13_utilidades_string.js)

Todos los lenguajes de programación tienen herramientas que nos permiten trabajar con los diferentes tipos de datos que podemos manejar en los lenguajes. Entre ellos tenemos funciones y métodos para manejar cadenas de texto (Strings) y Arrays, que son los que veremos en esta sección.

### 4.1 Utilidades para Cadenas de texto (Strings)

**length** nos permite calcular la cantidad de caracteres que hay en una cadena, los espacios en blanco cuentan como 1 caracter.

**+** el simbolo más ya lo hemos visto anteriormente y nos permite concatenar cadenas de texto, es decir unir una cadena con otra. Hay que recordar que hay que añadir los espacios en blanco al concatenar cadenas, sino quedarán las palabras unidas una con otra. Recuerden que podemos sumarle una variable númerica a un string y el resultado será un string que incluye el númerico como caracteres dentro de la cadena.

**concat(cadena)** para hacer lo mismo podemos utilizar también la función concat() que tiene el mismo resultado que el operador +.

**toUpperCase()** esto transformará toda la cadena en mayusculas.

**toLowerCase()** alcontrario que la función anterior esto convertirá la cadena en minusculas.

**charAt(valor)** nos devuelve el caracter que se encuentra en la posición indicada comenzando a contar desde 0.

**indexOf(caracter)** nos devuelve la posición del primer caracter que coincide con el enviado en la cadena. Si el caracter no se encuentra en la cadena nos devuelve -1.

**lastIndexOf(caracter)** nos devuelve la última posición en que se encuentra el caracter indicado. También devuelve -1 si no se encuentra.

**substring(inicio, final)** extrae una parte de la cadena pueden pasarse 1 o 2 parámetros si se pasa solo uno, se excluye la cantidad de caracteres indicadas en el parámetro inicio de izquierda a derecha, y si se le pasan 2 parámetros el parámetro inicio funciona igual y el parámetro final indica en que caracter de la cadena debe terminar el corte. (se entiende mejor en un ejemplo)

Si el parámetro final es mayor al parámetro inicio JavaScript lo invierte internamente ya que el final nunca puede ser inferiro al inicio.

**split(separador)** convierte la cadena en un array utilizando el separador como indicador de donde debe cortar la cadena.

Si utilizamos una cadena vacia como separador ("") nos separa caracter a caracter.

### 4.2 Utilidades para Arrays

**length** nos devuelve el número de elementos que contiene el array.

**concat()** esto nos permite concatenar arrays.

**join(inserta)** nos permite unir todos los elementos de un array insertando el string que le enviamos cómo parámetro entre cada uno de los elementos.

**pop()** elimina el último elemento del array. Esta función modifica el array original.

**push(elemento)** nos sirve para enviar un elemento dentro de un array insertandolo en la última posición. Esta función modifica el array original.

**shift()** elimina el primer elmento de un array. Esta función modifica el array original.

**unshift(elemento)** nos permite añadir un elemento en la primer posición de un array. Esta función modifica el array original.

**reverse()** este metodo modifica el array original colocando los elementos del mismo en el orden inverso.

### 4.3 Utilidades para Números

Sobre utilidades para números las veremos mejor cuando sea necesaria usar alguna, así que veremos las más comunes.

**NaN** JavaScript nos muestra este valor para indicarnos que el valor numérico que ha detectado no está definido en el lenguaje, por ejemplo cero dividido cero.

**isNaN()** nos permite saber si un valor (también podemos comprobar el resultado de una operación) es NaN.

**toFixed(decimales)** nos devuelve el número con la cantidad de decimales que indiquemos como parámetro, pero redondeandolo.

**toPrecision(decimales)** nos devuelve el número con la cantidad de decimales indicada pero sin redondear.

## 5. Funciones

La mayoría de las veces cuando desarrollamos una aplicación y esta comienza a crecer, nos encontraremos con operaciones que debemos realizar más de una vez en nuestro código. Y aquí comenzamos a hablar de un principio de programación que llamaremos **DRY** (Don't Repeat Yourself) que significa no te repitas a ti mismo. Esto es porque cuando en el código realizamos este tipo de operaciones que se repiten lo que debemos hacer es escribirlas una sola vez en una función y utilizar esta función donde sea necesario.

Les dejo un link a un documento que habla sobre los 3 principios de desarrollo DRY, KISS y SOLID (sería genial que lo leyeras!):
[**Principios de diseño de software**](https://tantacom.com/principios-diseno-software-kiss-dry-solid/)

**Ejemplo**: Si tenemos que sumar 2 números, nosotros con los conocimientos que tenemos hasta ahora lo haríamos así.

```javascript
var numero1 = 2;
var numero2 = 8;

var resultado = numero1 + numero2;
```

Muy bien pero además de esto queremos mostrar el resultado de esa operación. Así que le agregamos un document.write (aclaro que no utilizo alerts porque codepen.io me ha dado varios problemas con los alerts cuando los modifico trabando completamente Chrome y Safari)

```javascript
var numero1 = 2;
var numero2 = 8;

var resultado = numero1 + numero2;

document.write(resultado)
```

Pero bien que pasa si dentro de nuestro programa nos encontramos con que esa operación de sumar y mostrar el resultado se repite una y otra y otra vez... terminaríamos viendo algo como esto.

```javascript
var numero1 = 2;
var numero2 = 8;

var resultado = numero1 + numero2;

document.write('La suma es: ' + resultado)

numero1 = 24;
numero2 = 5;

resultado = numero1 + numero2;

document.write('La suma es: ' + resultado)

numero1 = 1;
numero2 = 6;

resultado = numero1 + numero2;

document.write('La suma es: ' + resultado)

numero1 = 2;
numero2 = 3;

resultado = numero1 + numero2;

document.write('La suma es: ' + resultado)
```

Y está perfecto, ese código funciona, pero no es lo que debemos hacer!

### 5.1 Estructura de una función

Una función consta de 2 partes, una declaración de la función y un bloque de código, donde justamente este bloque de código es lo que ejecutaremos cada vez que llamemos a la función.

```javascript
// 1. Primero le indicamos a JavaScript que lo que vamos a declarar es una función utilizando la palabra reservada function
// 2. Le indicamos el nombre de la función seguido de parentesis (en el contenido de los paréntesis nos centraremos en el próximo punto)
// 3. Por último el bloque de código

function nombreFuncion() {
  // bloque de codigo
}
```

Con esto tendríamos que nustra función para sumar y mostrar sería la siguiente.

```javascript
var resultado

function sumaMuestra() {
  resultado = numero1 + numero2;
  document.write('La suma es: ' + resultado)
}
```

Y ahora podemos hacer uso de nuestra función y llamarla en el código. Para llamar una función simplemente ponemos el nombre que le dimos a la función seguido de los paréntesis.

```javascript
var resultado;

var numero1 = 2;
var numero2 = 8;

sumaMuestra();

numero1 = 24;
numero2 = 5;

sumaMuestra();

numero1 = 1;
numero2 = 6;

sumaMuestra();

numero1 = 2;
numero2 = 3;

sumaMuestra();
```

Además de reducir las lineas de código utilizar funciones hace más eficiente a nuestros programas.

### 5.2 Parámetros

Las funciones pueden recibir datos, que utilizarán para realizar las operaciones. Estos datos que son los que deberemos declarar dentro de los paréntesis separados por comas, se llaman justamente parámetros o argumentos.

Esto nos sirve para no limitar el uso de una función a nombres de variable definidos, sino que estos nombres pueden cambiar, como ven en nuestro ejemplo hasta ahora siempre trabajamos con las variables numero1 y numero2. Pero que pasaría si no se llamaran siempre numero1 y numero2 y nosotros queremos sumar numero1 y numero5 o numero1 y precioTotal. No funcionaría.

Por tal motivo definimos parámetros y estos parámetros los utilizamos dentro de la función. Los parámetros deben enviarse en el orden que se declaran. Podemos enviar parámetros de cualquier tipo de dato, inclusive otras funciones, entonces si enviamos un número en un lugar de un booleano nos dará error el programa.

Para seguir consistentemente con el ejemplo ahora tendríamos utilizando argumentos lo siguiente.

En la declaración de la función (es decir cuando la creamos) debemos usar los mismos nombres que usamos para enviar los parámetros dentro de la función para hacer las operaciones. Pero cuadno llamemos a la función en el programa los parámetros no tienen que enviarse con esos nombres, pueden enviarse directamente datos, o variables con cualquier nombre.

```javascript
function sumaMuestra(primerNumero, segundoNumero) {
  // Dentro de la función tenemos que declararla us
  resultado = primerNumero + segundoNumero;
  document.write('La suma es: ' + resultado)
}
```

Y ahora podemos tener lo siguiente

```javascript
var resultado;

var numero1 = 2;
var numero2 = 8;

sumaMuestra(numero1, numero2);

var numero5 = 24;
numero2 = 5;

sumaMuestra(numero5, numero2);
```

### 5.3 Ámbito de las variables

Ahora nos encontramos que tenemos el código dividido en funciones y esto nos trae un problema, estamos declarando variables fuera de funciones y dentro de funciones. Y no se comportan de la misma forma que cuando están todas fuera de funciones. Aquí entramos en el Ambito de las misma. Vamos a explicar todo esto con ejemplos para que se entienda mejor.

```javascript
function creaMensaje() {
  var mensaje = "Mensaje de prueba";
}
creaMensaje();
document.write(mensaje);
```

En esa función estamos declarando una variable dentro de una función, entonces al llamar a la función estamos creando esa variable llamada mensaje. Pero que pasa cuando la llamamos en el document.write no nos muestra nada!

Cuando declaramos una variable dentro de una función esta no puede ser utilizada fuera de la misma. Para eso tenemos que devolver un valor de esa función, y para esto usamos la palabra reservada return.

```javascript
function creaMensaje() {
  var mensaje = "Mensaje de prueba";
  return mensaje
}
creaMensaje();
document.write(mensaje);
```

Pero... que pasa acá tampoco estamos vendo nada en pantalla... Esto se debe a que return no devuelve la variable sino que lo que está haciendo es decir que cuando se ejecute la función esta tenga el valor mensaje. eso podemos verlo mejor en la consola de google. como vimos en laprimer clase del curso, en la página about:blank.

entonces... como hacemos para imprimir ese mensaje, bien podemos hacer un document.write de la función en si misma o podemos asignar el valor de esa función a una variable

```javascript
function creaMensaje() {
  var mensaje = "Mensaje de prueba";
  return mensaje
}
var msj = creaMensaje();
document.write(msj);

// o podemos llamar la función dentro de document.write
document.write(creaMensaje());
```

Y si lo que convendría hacer para este ejemplo sería en realidad hacer el document.write dentro de la función y no devolver ningún valor pero es solo para ejemplificar. Demostrado arriba deberíamos hacerlo así.

```javascript
function creaMensaje() {
  var mensaje = "Mensaje de prueba";
  document.write(mensaje);
}

creaMensaje();
```

Entonces como hacemos para acceder a una variable declarada dentro de una función..

Hay que tener cuidado con esto ya uqe puede hacer que nuestro programa se vuelva bastante dificil de leer entonces entendamos el ambito de las variables.

si declaramos una variable fuera de una función podemos llamarla dentro.

```javascript
var mensaje = "Mensaje de prueba";

function creaMensaje() {
  document.write(mensaje);
}

creaMensaje();
```

pero si declaramos una variable dentro de una función no podemos usarla fuera

```javascript
function creaMensaje() {
  var mensaje = "Mensaje de prueba";
}

document.write(mensaje);
```

Si 2 variables son declaradas con el mismo nombre dentro y fuera de la función, las variables locales le "ganan" a las globales pero solo dentro de la función

```javascript
var mensaje = "Mensaje FUERA de función";

function creaMensaje() {
  var mensaje = "Mensaje DENTRO de función";
  document.write(mensaje + "<br>");
}

// Imprime con la variable fuera de la función
document.write(mensaje + "<br>");
// Dentro de la función declaramos otra vez mensaje y se imprime
creaMensaje()
// Como el ambito de mensaje es interno a la función vuelve a imprimir la variable global
document.write(mensaje + "<br>");
```

Para poder modificar un valor de una variable global dentro de una función y que este cambio prevalezca debemos utilizar la variable global ya declarada, es decir no utilizamos var, ya que esto vuelve a declarar, al no usar var simplemente estamos llamando a esa variable ya declarada.

```javascript
var mensaje = "Mensaje FUERA de función";

function creaMensaje() {
  mensaje = "Mensaje DENTRO de función";
  document.write(mensaje + "<br>");
}

// Imprime con la variable fuera de la función
document.write(mensaje + "<br>");
// Dentro de la función usamos la variable ya declarada y la modificamos
creaMensaje()
// Y ahora como modificamos la variable imprime lo mismo que dentro de la función
document.write(mensaje + "<br>");
```

## 6. Sentencias Break y Continue

La estructura de control For es sencilla, y nos permite controlar el número de repeticiones mediante las variables que definimos y el método de actualización de la misma que definimos como tercer parámetro al declarar la estructura.

Pero además de esto disponemos en JavaScript de 2 sentencias que nos permiten manipular el comportamiento del bucle For, estas sentencias son justamente **Break** y **Continue**.

- **Break**: Nos permite detener el bucle
- **Continue**: Nos permite saltarnos algunas repeticiones.

Para explicar el funcionamiento de estas sentencias utilizaremos un ejemplo basado en recorrer un array caracter por caracter.

>Tomaremos para ejemplo un fragmento del texto inicial de Star Wars episodio 5 versión latinoamericana

```javascript
var cadena = "Son tiempos de guerra civil. Naves rebeldes han atacado desde una base secreta...";
```

### 6.1 Sentencia Break

La sentencia break como ya explicamos anteriormente nos permite cortar por completo la estrucutra for, y continuar con el resto del código.

Por ejemplo supongamos que queremos cortar la estructura cuando encuentre un punto en la cadena.

Para esto lo que haremos será detectar cuando encuentre el punto y en ese momento haremos uso de la sentencia break

```javascript
var cadena = "Son tiempos de guerra civil. Naves rebeldes han atacado desde una base secreta...";
// Hacemos uso de la función split para cortar la cadena caracter por caracter
var caracteres = cadena.split("");
// Declaramos una variable como una cadena vacia para ir insertandole las letras que recorremos
var resultado = "";

for(i in caracteres) {
  // Consultamos si se encontró un punto en como caracter
  if(caracteres[i]) === ".") {
    // Si se encontró un punto usamos break para cortar el funcionamiento
    break;
  } else {
    resultado += letras[i];
  }
}

document.write(resultado);

```

> Como pueden ver al imprimir solo llega hasta "civil" y no imprime nada despues del punto justamente porque cortamos el funcionamiento de For al llegar al punto.

### 6.2 Sentencia Continue

A diferencia de Break continue lo que hace es prevenir el funcionamiento prevenir el funcionamiento del bucle en determinados puntos.

Por ejemplo supongamos que queremos eliminar todas las letras "e" del texto.

```javascript
var cadena = "Son tiempos de guerra civil. Naves rebeldes han atacado desde una base secreta...";
// Hacemos uso de la función split para cortar la cadena caracter por caracter
var caracteres = cadena.split("");
// Declaramos una variable como una cadena vacia para ir insertandole las letras que recorremos
var resultado = "";

for(i in caracteres) {
  // Consultamos si se encontró un punto en como caracter
  if(caracteres[i]) === "e") {
    // Si se encontró una e usamos continue para evitar que ejecute el resto de la estructura for, pero que continue con la letra siguiente
    continue;
  } else {
    resultado += letras[i];
  }
}

document.write(resultado);

```

> Ahora justamente tienen impreso todo el texto excepto las letras e
