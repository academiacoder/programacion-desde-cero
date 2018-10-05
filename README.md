## Estructuras de control de flujo

Las estructuras de control de flujo nos permitiran justamente eso, controlar la forma en que fluye la información dentro de nuestro programa.

En todos los lenguajes de programación existen estas estructuras y la mayoría se comportan y componen de maneras muy similares.

### Bloques de código

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

### Estructura Si... (if)

Es la estructura más utilizada tanto en JavaScript como en otros lenguajes, y es la que empleamos para realizar una operación si se cumple una condición.

```javascript
if(condicion) {
  // Ejecuta este bloque de código si la condición es verdadera
}
```

Esta estructura simplemente nos ayuda a ejecutar el contenido de ese bloque de código si se cumple la condición que está entre parentesis. Es decir que la condición debe retornar verdadero para que se ejecúte ese código.

### Estructura Si...sino (if...else...)

Esta estructura es igual al if, pero con una diferencia, podemos brindarle un segundo bloque de código el cual se ejecutará solo si la condición especificada en el if no se cumple.

```javascript
if(condicion) {
  // Ejecuta este bloque de código si la condición es verdadera
} else {
    // Ejecuta este bloque de código solo si la condición no es verdadera
}
```

### Anidando if y else (else if)

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
