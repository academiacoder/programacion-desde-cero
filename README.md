# Curso de Programación Desde Cero con JavaScript

## Indice
1. [Partes anteriores](#anterior)
2. [Estructuras de control de flujo "Condicionales"](#2)
    1. [Bloques de código](#21)
    2. [Estructura if](#22)
        1. [Estructura if...else](#221)
        2. [Estructura if...else if](#222)
3. [Estructuras de control de flujo "Ciclos"](#3)
    1. [Estructura for](#31)
    2. [Estructura for in](#32)
4. [Funciones y métodos propios de JavaScript (Strings y Arrays)](#4)

---

<div id=#anterior></div>

## 1. Partes anteriores

Se añadiran las explicaciones anteriores al finalizar el curso!

<div id=#2></div>

## 2. Estructuras de control de flujo (Condicionales)

Las estructuras de control de flujo nos permitiran justamente eso, controlar la forma en que fluye la información dentro de nuestro programa.

En todos los lenguajes de programación existen estas estructuras y la mayoría se comportan y componen de maneras muy similares.

Las estructuras condicionales, justamente nos permiten realizar un bloque de código dependiendo de una o varias condiciones a cumplir.

<div id=#21></div>

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

<div id=#22></div>

### 2.2 Estructura Si... (if)

Es la estructura más utilizada tanto en JavaScript como en otros lenguajes, y es la que empleamos para realizar una operación si se cumple una condición.

```javascript
if(condicion) {
  // Ejecuta este bloque de código si la condición es verdadera
}
```

Esta estructura simplemente nos ayuda a ejecutar el contenido de ese bloque de código si se cumple la condición que está entre parentesis. Es decir que la condición debe retornar verdadero para que se ejecúte ese código.

<div id=#221></div>

#### 2.2.1 Estructura Si...sino (if...else...)

Esta estructura es igual al if, pero con una diferencia, podemos brindarle un segundo bloque de código el cual se ejecutará solo si la condición especificada en el if no se cumple.

```javascript
if(condicion) {
  // Ejecuta este bloque de código si la condición es verdadera
} else {
    // Ejecuta este bloque de código solo si la condición no es verdadera
}
```

<div id=#222></div>

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


<div id=#3></div>

## 3. Estructuras de control de flujo (Ciclos)

Los ciclos dentro de las estructuras de control nos permiten repetir un bloque de código una X cantidad de veces dependiendo de una condición a cumplir.

<div id=#31></div>

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

<div id=#32></div>

#### 3.2 Estructura Para, en... (for in)

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


<div id=#32></div>

## 4. Funciones y Métodos de JavaScript

[Link al archivo de la clase](https://github.com/academiacoder/programacion-desde-cero/blob/master/13_utilidades_string.js)

Todos los lenguajes de programación tienen herramientas que nos permiten trabajar con los diferentes tipos de datos que podemos manejar en los lenguajes. Entre ellos tenemos funciones y métodos para manejar cadenas de texto (Strings) y Arrays, que son los que veremos en esta sección.

<div id=#32></div>

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

