// Escreva um algoritmo para verificar se uma roleta de cassino é viciada. A roleta tem 37 números (de 0 a 36), 
// sendo que o número 0 é verde e os demais são divididos igualmente entre vermelho e preto (impares são vermelho, pares são pretos). O programa deve contar quantas vezes cada cor (verde, vermelho, preto) foi gerada e verificar se alguma cor tem uma frequência maior que 40%. 
// Se houver, o programa deve indicar que a roleta pode estar viciada.

var numero = []
var verde
var vermelho
var preto

for ( var i = 0; i < 500; i ++){

    numero [i] = parseInt(Math.random()*37)

    if(numero === 0){
        verde++

    } else if ( numero%2!=0){
        impar++
    }else if ( numero%2===0){
        par++
    } if (verde >=400 || preto >=400 || vermelho >= 400){

        console.log("Roleta Viciada")
    }
} console.log(verde)
console.log(vermelho)
console.log(preto)




