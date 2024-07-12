// Você precisa desenvolver um algoritmo para calcular a pontuação de todos os jogadores de um time de futebol.
// Nesse momento será analisada apenas a quantidade de gols, passes certos e passes errados.

// Cada Gol: 50 Pontos
// Cada Passe Certo: 10 Pontos
// Cada Passe Errado: -5 Pontos
// // Você deve solicitar o nome do jogador, quantidade de gols, numero de passes certos e quantidade de passes errados. 
// O algoritmo deve calcular a pontuação de casa jogador e informar se o jogador foi bem ou mal na partida, levando como base a seguinte tabela. 
// No final, deve apresentar o jogador com melhor pontuação.

// Pontuação < 50 - Péssima partida.
// Pontuação de 50 até 100 - Partida ruim.
// Pontuação de 100 até 150 - Fez o básico
// Pontuação de 150 até 200 - Foi bem na partida
// Pontuação acima de 200 - Jogou demais

import leia from "readline-sync"

var nome
var gols = 0
var passeCerto = 0
var passeErrado = 0
var pontuação 
var maiorPontuacao = 0
var jogador = 0

while(jogador < 2 ){
    nome = leia.question ("DIGITE O NOME DO JOGADOR \n")
    gols = leia.questionInt("DIGITE A QUANTIDADE DE GOLS \n")    
    passeCerto = leia.questionInt("DIGITE A QUANTIDADE DE PASSES CERTOS \n") 
    passeErrado = leia.questionInt("DIGITE A QUANTIDADE DE PASSES  ERRADOS \n")

        pontuação = ((gols*50) + (passeCerto*10) ) - (passeErrado * 5)

    if( pontuação < 50){
    console.log ("O JOGADOR " + nome + " TEVE UMA PESSIMA PARTIDA")

        } else  if( pontuação > 50 || pontuação < 100){
            console.log ("O JOGADOR " + nome + " PARTIDA RUIM ")

         } else  if( pontuação >= 100 || pontuação < 150){
             console.log ("O JOGADOR " + nome + " FEZ O BASICO")

        }else  if( pontuação >= 150 || pontuação <= 200){
            console.log ("O JOGADOR " + nome + " FOI BEM NA PARTIDA")

         }else  if( pontuação > 200){
            console.log ("O JOGADOR " + nome + " JOGOU DEMAIS")  
        }
    
     if (pontuação > maiorPontuacao) {

    maiorPontuacao = pontuação
    nome = nome
   } jogador++



   

}console.log( nome + " FOI O MELHOR JOGADOR DA PARTIDA")

