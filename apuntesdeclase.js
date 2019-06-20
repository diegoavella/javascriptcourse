//Operaciones basicas

/*var numberOne =1
var numberTwo =2
var double =1.20000000001
var array =["h",3,1.058]
var obj ={"head":5,"array":array}
var sumar = numberOne + numberTwo
var restar = numberOne - numberTwo
var dividir = numberOne / numberTwo
var multiplicar = numberOne * numberTwo

//double ="este es mi mensaje para doble"
console.log("la suma de las variables es:", sumar)
console.log("la resta de las variables es:", restar)
console.log("la division de las variables es:", dividir)
console.log("la multiplicióm de las variables es:", multiplicar)
console.log("double", double)
console.log("array",array)
console.log("objeto",obj)*/

//Funciones JS
//console.log()
//typeof() --para saber el tipo de dato que estamos usando
//parseInt(12.135)pasar de un flotante a un entero
//alert() genera alertas en el browser
//string() cambia de numero a string

//Operadores Matemáticos
//Especializados: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Math
//Dividir %
//Potencia **
//Incremento var x = 5; x++
//Reducir incremento x--
//Operadores de comparacion == igual a igual --si los dos valores tienen el mismo dato
//Igual en valor y tipo === 
//!= Diferente de
//numero !== "numero" no es igual en valor y tipo
//mayor que >
//Menor que <
//>= mayor o igual
//<= menor o igual

//Operador ternario: condicion ? expr1:expr2 --es un if en una sola linea, antes del signo de interrogacion
//van las operaciones

//Operadores lógicos
//&& AND ejemplo 1&&1
//|| OR  1||0
//! negacion !true

//Sentencias condicionales
// If, else, elseif
//

//Bucles
//While (condicion){instrucciones}
//For (punto de inicio =x; hasta donde quiero llegar; iterador paso++){instrucciones}
//

/*Como crear funciones
La ventaja de esto es la reutilización de código
Permite modularizar nuestro código
Sintaxis

--metodo tradicional

function suma(number1,number2){ //Definir variables y parametros que rcibe la funcion
    return numer1+number2
}

--metodo con arrow

var multiplicar =(numberOne,numberTwo) => {
    retur numberOne*numberTwo
}

console.log(`La multiplicacion es ${multiplicar(5,2)}`)

*/

/*function suma(number1,number2){ //Definir variables y parametros que rcibe la funcion
    return number1+number2}

function restar(number1,number2){ //Definir variables y parametros que rcibe la funcion
        return number1-number2}
   

var multiplicar =(numberOne,numberTwo) => {
    return numberOne*numberTwo
}

console.log(`La multiplicacion es ${multiplicar(5,2)}`)
console.log(`La suma es ${suma(5,2)}`)
console.log(`La resta es ${restar(5,2)}`)
console.log(`La multiplicacion es ${multiplicar(10,2)}`)*/

/* POO
Orientado a la programación de clases y subclases.
Formas de anidar datos y atributos
Clase --> categoría main
objeto --> hereda los atributos de clase y puede recibir distintos datos para esos atributos
Se pueden guardar acciones en funciones, ejemplo, un carro acelera o frena.

Funcion es igual a método, pero método es concepto de POO

ejemplo de clase

class Persona { //Primera letra de la clase debe ir en mayuscula
    constructor(nombre, apellido, edad) //crear un método constructor, pueden haber variables de entrada
    this.nombre = nombre; //this hace referencia hacia la misma clase para declarar un atributo que es asignada al parametro
    this.apellido = apellido;
    this.edad = edad;
}

getName(){
    return{
        "nombre": ${this.nombre + "." +this.apellido},
        "edad": this.edad
    }
}

getEdad(){
    return{
        "edad":this.edad
    }
}
*/

//Primera letra de la clase debe ir en mayuscula
/*class Persona { 
    constructor(nombre, apellido, edad){ //crear un método constructor, pueden haber variables de entrada
    this.nombre=nombre ; //this hace referencia hacia la misma clase para declarar un atributo que es asignada al parametro
    this.apellido=apellido;
    this.edad=edad;
    }

getName(){
    return{
        "nombre": `${this.nombre + "." +this.apellido}`
    }
}

getEdad(){
    return{
        "edad":this.edad
    }
}

setName(nombre,apellido){//nueva clase creada para testear de la linea 159 a 161
    this.nombre = nombre
    this.apellido =apellido
}

}

var estudiante1 = new Persona("Juan","Leon",23)
var estudiante2 = new Persona("Aleja","Leon",18)
console.log("Datos de estudiante 2", estudiante2.getName())
estudiante2.setName ("daniela","mora")
console.log("Datos de estudiante 2", estudiante2.getName())*/
/*var datos = estudiante1.getName()
var edad = estudiante2.getEdad()
console.log (`los datos del estudiante: \n Nombre ${datos.nombre} \n Edad ${edad.edad}`)
console.log (estudiante2.getName(),estudiante1.getEdad())*/


/*
Typescript es un lenguaje de programación de código abierto creado por mocosoft
para favorecer programas de js construidos con paradigma orientado a objetos

Toma como base js y luego suma los estandares europeos de EGMA
Permite crear clases, functions, variables leds(variables) y cons(constantes)
Luego adiciona tipado para js

instalar typescript
por consola CMD: npm install -g typescript

https://www.npmjs.com //Clases ya hechas, bibliotecas para angular react js etc etc

*/

//Angular

/* 
Es un framework, es decir, es una herramienta para buenas práctica de programación
usa js y derivados de typescript.

escalabilidad
granularidad
microservicios
enrutamiento
etc, etc, etc

Diferencia con React, react es una biblioteca, biblioteca es una clase donde 
se puede utilizar codigos de terceros.
En angular se pueden importar funciones de otras liberías e incrustar en el código.

Angular es orientado a apps web, single play application. Se hace la carga de una simple
hoja de html y solo se reemplaza información y listas sin necesidad de renderizar.

MVC modelo vista controlador = un usuario se conecta con un sistema en la nube
el servidor en su lógica separaba BD y lógica de programación.

El controlador es el que determina la acción a seguir.

Desde la vista me comunico con el controlador, el controlador decide la acción.
el controlador va al modelo de datos, trae los datos, transforma y le carga al usuario
una nueva vista = la pagina se refresca totalmente.

Luego de esto se crearon frameworks como react y angular para cambiar esos patrones. El browser consulta
el código de otra aplicación y la otra aplicación le envía todo lo necesario para que no vuelva
a hacer tantos llamados.

Ahora  se pueden manipular solo pequeños pedazos y se renderiza solo esa pequeña parte.

Angular permite crear archivos con muchas ayudas

Recomendaciones
0. Instalar angular 
    npm install -g @angular/cli
    comprobar la version: ng v
1. Usar Angular CLI
2. Ir a la pagina del fabricante para ver documentacion
https://angular.io/

Tecnologia de facebook para app moviles: react native. parecido a ionic.

http://johnny-five.io/ javascript para robotica

Comando a aprender de angular:

sintaxis ng add

add         agrega soporte para una biblioteca externa en un proyecto
build b     compila la app
config      consulta la configuración
doc d       abre un navegador con la documentacion de angular
e2e e       permite una compilacion para hacer una regresión
generate g  Genera fragmentos de código
new n       crea un nuevo espacio de trabajo
serve s     compila y recompila si encuentra un cambio
test    t   corre test unitarios
update      actualiza la aplicación con sus dependencias.

Crear el primer proyecto de angular

Selecionar la carpeta de ublicación en consola

    ng new project1

    generate routing? y

procesador? css

luego ir por la ruta  a la carpeta del proyecto creado y ejecutar
    
    ng serve







*/

