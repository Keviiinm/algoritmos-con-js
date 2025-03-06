// funcion que realiza una suma
function suma(){
   // paso 1 poner valor 1 
    let n1 = 0 
   //  paso 2 poner valor 2
    let n2 = 0
   //  paso 3 poner Suma que es igual a resultado total de la suma
    let suma = 0 
   //  alerta es igual a el primer mensaje mostrado en pantalla
    alert("este programa realiza un algoritmo que hace la suma de dos numeros ingresados por el ususario")
   //  primer valor a mostrar en pantalla par que el ususario lo digite, siempre colocar parseint antes de el prompt ya que sin este lo tomara como un string y no hará correctamente la suma
    n1 = parseInt(prompt ("ingrese el primer valor a sumar"))
   //  segundo valor a mostrar y digitar en pantalla 
    n2 = parseInt(prompt ("ingrese el segundo valor a sumar"))
   //  formula para hacer la opercion
    suma = n1 + n2
   // mensaje mostrado en pantalla del resultado, siempre encerrado en parentesis y comillas
    alert ("el resultado de la suma es " + suma)
}

function operacionesBasicas(){
    let suma = 0
    let resta = 0
    let multi = 0
    let divi = 0
    let n1 = 0
    let n2 = 0
    alert ("este programa realiza las operaciones basicas segun los valores ingresados por el usuario")
    n1 = parseInt (prompt ("ingrese el primer valor"))
    n2 = parseInt (prompt ("ingrese el segundo valor"))
    suma = n1 + n2
    alert ("el resultado de la suma es " + suma)
    resta = n1 - n2
    alert ("el resultado de la resta es " + resta)
    multi = n1 * n2
    alert ("el resultado de la multiplicacion es " + multi)
    divi = n1 / n2
    alert ("el resultado de la division es de " + divi)
}
 function cuadrado(){
    let n1 = 0
    alert ("este programa realiza el cuadrado de un numero ingresado por el usuario")
    n1 = parseInt (prompt ("ingrese el primer valor"))
    n1 = n1 * n1 
    alert ("el resultado de la operacion es "+ n1)
 }

 function conversion(){
    let cm = 0
    let pul = 0
    let m = 0
    alert ("este programa realiza conversion de unidades")
    m = parseInt (prompt ("ingrese el valor a convertir"))
    cm = m * 100
    p = m * 39.37
   //  cacorro el que lo lea
    alert ("el resultado de centimetros " + m * 100)
    alert ("el resultado de pulgadas es " + p * 39.37)
 }
 function areaDeUnTriangulo(){
    let b = 0
    let h = 0

    alert ("este programa muestra el area de un triangulo de dos numeros ingresados por el usuario")

    b = parseInt(prompt ("ingrese el valor de la base"))
    h = parseInt(prompt ("ingrese el valor de la altura")) 

    area = (b * h)/2 
   
    alert ("el area del triangulo es de" + (b*h)/2)
 }


 function inversion(){
    let capi = 0
    let na = 0 
    let g = 0   

    alert ("Este programa muestra la ganancia al invertir en este banco con interes de 1,7%")

    capi = parseInt(prompt("ingrese el capital a invertir"))
    na = parseInt(prompt("ingrese el numero de años a invertir"))
    g = (capi*0.017)*12*na

    alert ("las ganancias generadas son de: " + g )
 }


 function numeroMayor(){
   let n1 = 0
   let n2 = 0

   alert ("este programa determina cual numero es mayor de los numeros ingresados por el usuario")

   n1 = parseInt (prompt ("ingrese el primer valor"))
   n2 = parseInt (prompt ("ingrese el segundo valor"))

   if (n1>n2)
      alert ("el numero mayor es: " + n1 )
   else if (n1<n2)
      alert ("el numero mayor es " + n2)
   else  alert ("los numeros ingresado son iguales")
   
 }

 function numeroMenor(){
   let n1 = 0
   let n2 = 0

   alert ("este programa determina cual numero es menor de los numeros ingresados por el usuario")

   n1 = parseInt (prompt ("ingrese el primer valor"))
   n2 = parseInt (prompt ("ingrese el segundo valor"))

   if (n1<n2)
      alert ("el numero menor es " + n1 )
   else if (n1>n2)
      alert ("el numero menor es " + n2)
   else alert ("los numeros son iguales")
 }

function parImpar(){
   let n = 0
   let r = 0

   alert ("este programa determina si un numero ingresado por el usuario es par o impar")

   n = parseInt (prompt ("digite el numero"))

   if (n % 2 === 0)
      alert ("el numero ingresado es par")
   else
   alert ("el numero ingresado es impar")
}

function promedio(){
   let c1 = 0
   let c2 = 0
   let c3 = 0
   let c4 = 0
   let c5 = 0
   let c6 = 0
   let c7 = 0
   alert ("Este programa muestra el promedio de un estudiantes segun las calificaciones del estudiantes donde reprueba entre 0 y 2.9 y aprueba si es mayor o igual a 3")
   c1 = parseInt (prompt ("ingrese la primera calificacion"))
   c2 = parseInt (prompt ("ingrese la segunda calificacion"))
   c3 = parseInt (prompt ("ingrese la tercera calificacion"))
   c4 = parseInt (prompt ("ingrese la cuarta calificacion"))
   c5 = parseInt (prompt ("ingrese la quinta calificacion"))
   c6 = parseInt (prompt ("ingrese la sexta calificacion"))
   c7 = parseInt (prompt ("ingrese la septima calificacion"))

   p = (c1+c2+c3+c4+c5+c6+c7)/7 
   if (p<=2.9)
      alert ("el estudiante reprueba con " + p)
      else 
      alert ("el estudiante aprobo con: " + p)

}
function fruteria(){
   let k = 0
   let p = 0

   alert ("Este programa determina cuanto debe pagar un cliente por X kilos de manzana segun la tabla de descuentos que tiene la fruteria")
   
   k = parseInt (prompt ("ingrese el valor en kilos")) 
   p = k*4500

   if (k<=2)
      alert("el cliente no tiene descuento y pagara " + p )
   else 
      if (k<=5)
         alert ("el cliente tiene un descuento del 10% y pagara: " + (k*4500-(k*4500*0.1)))
      else 
         if (k<=10)
            alert ("el cliente tiene un descuento del 15% y pagara: " + (k*4500-(k*4500*0.15)))
            else 
               alert ("el cliente tiene un descuento del 20% y pagar: " + (k*4500-(k*4500*0.2)))
   
   }
function horasExtra(){
   let ht = 0
   let hx = 20000
   let h = 10000

   alert ("Este programa determina cuanto se le debe pagar a un obrero el cual si trabaja 40 horas o menos a la semana se le paga por cada hora 10000 pesos y si trabaja 40 horas o mas se le paga 10000 pesos las primeras 40 horas y 20000 por cada hora extra")
   ht = parseInt (prompt ("ingrese las horas trabajadas"))
   s = (h*40)+hx*(ht-40)

   if (ht<40)
      alert ("su ganancia es de " + h*40 )
   else alert ("su ganancia es de " + s )
   
}


function diferentea0(){
   let n
   let s = 0
   alert ("este programa pide ingresar numeros y para hasta que se ingrese el numero 0)")
   
   n = parseInt(prompt ("DIGITE UN NUMERO"))
   while (n!=0) {
      s = s+=n
      n = parseInt (prompt("INGRESE OTRO NUMERO"))
   }alert ("FINALIZADO! la suma total es de " + s )
}

 function de1a10(){
   let n = 1
   alert("este programa genera un bucle de 1 al 10")
   while (n <=10) {
      alert (n)
      n = n+1
   }
 }

 function de0a100(){
   let n = 0
   while (n<=100) {
      alert (n)
      n = n+10
   }
 }

 function tablaMultiplicar(){

   let n = 0 
   let m = 0
   alert("Este programa el usuario ingresa un numero y este le mostrara la tabal de multiplicar de este numero")
   n = parseInt(prompt ("DIGITE UN NUMERO"))

   while (m<10) {
      m = m + 1
      r = n * m
      alert (n + "x" + m + "=" + r)
   }
   alert ("fin")
   
      
}

function cajero(){

   let retiro = 0
   let saldo = 1000000

   alert ("Este programa inicia con un valor de 1'000.000 y permitirle al usuario reitirar debe seguir pidiendo montos hasta que se quede sin saldo")

   
   
   while (saldo>0){
      retiro = parseInt(prompt("cuanto desea retirar"))
   
   if (retiro>saldo) {
      alert ("NO TIENE SALDO SUFICIENTE PARA RETIRAR, su saldo es de: " + saldo)
   }else{
      saldo-=retiro
      alert("su saldo es de: " + saldo)
   }
}
alert("SE QUEDO SIN SALDO")
}

   

function hasta1000(){
   let n = 0
   while (n<=1000) {
      alert (n)
      n = n+100
   }
}


function de100a0(){

   for (let i = 100; i >=0; i-=10){
      alert (i)
   }
}


function promedio2(){
   let materia = ""
   let nnotas = 0
   let calificacion = 0
   let sumanotas = 0
   let promedio = 0
   let estudiante = ""
   let iteracion = 0

   materia = prompt("ingrese la materia que imparte")
   estudiante = prompt("ingrese el nombre del estudiante")
   nnotas = parseInt (prompt("ingrese el numero de notas"))

   while (iteracion<nnotas) {
      calificacion = parseFloat(prompt("ingrese la calificacion"))
      sumanotas=sumanotas+calificacion
      iteracion++
      
   }
   promedio = sumanotas/nnotas
   if (promedio>2.9)
   alert ("el estudiante " + estudiante + " aprobo la materia de " + materia + " con un promedio de " + promedio)
   else ("el estudiante " + estudiante + " reprobo la materia " + materia + " con un promedio de " + promedio)
}

