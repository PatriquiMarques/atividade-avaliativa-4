// Você deve desenvolver um algoritmo para conversão de temperaturas. Você deve solicitar ao usuário a unidade de medida de origem, 
// a temperatura, e a unidade de medida para qual deseja fazer a conversão. Nesse momento você deve levar em consideração apenas 
// 3 unidades de medida Celsius, Kelvin e Fahrenheit. 
// No final o algoritmo deve informar a temperatura na unidade de medida escolhida.

import leia from "readline-sync"

var Celsius
var Kelvin
var Fahrenheit
var conversaoDe
var conversaoPara
var temperatura

conversaoDe = leia.questionInt ("Qual unidade de medida você deseja  converter ? 1 - Celsius, 2 - Kelvin e 3 - Fahrenheit")
conversaoDe = leia.questionInt ("Qual unidade de medida você que seja convertido ? 1 - Celsius, 2 - Kelvin e 3 - Fahrenheit")
temperatura = leia.questionInt ("DIGITE A TEMPERATURA PARA SER CONVERTIDA")

if ( conversaoDe === 1 ){

    if( conversaoPara === 2){
    temperatura = temperatura + 273.15 
    console.log ( temperatura + " Graus Kelvin")
    } else if (conversaoPara === 3){
        temperatura = (temperatura * 1.8) + 32
        console.log ( temperatura + " Graus Fahrenheit")
    }
  

}
if ( conversaoDe === 2 ){

    if( conversaoPara === 1){
    temperatura = temperatura - 273.15
    console.log ( temperatura + " Graus Celsius")

    } else if (conversaoPara === 3){
        temperatura = (temperatura  - 273.15) * 1.8 + 32
        console.log ( temperatura + " Graus Fahrenheit")
    }
  

}
if ( conversaoDe === 3 ){

    if( conversaoPara === 1){
    temperatura = (temperatura - 32) * (5/9)
    console.log ( temperatura + " Graus Celsius")

    } else if (conversaoPara === 2){
        temperatura = (temperatura  - 32) * (5/9) + 273.15 
        console.log ( temperatura + " Graus Kelvin")
    }
  

}
