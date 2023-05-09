import { question } from "readline-sync";

//22. Um fazendeiro possui fichas de controle sobre sua boiada. Cada ficha contém numero de identificação,nome e peso (em kg) do boi. Escreva um algoritmo que leia os dados de N fichas e ao final, escreva o numero de identificação e o peso do boi mais magro e do boi mais gordo.

function main(){
    const n = Number(question('Número de fichas: '))

    let nome 
    let identificação
    let peso
    let magro = Infinity
    let gordo = 0
    let mais_gordo
    let mais_magro
    for (let i = 0; i < n; i++){
        const identificação = Number(question('Número de identifação do boi: '))
        const nome = question('Nome do boi: ')
        const peso = Number(question('Peso (KG): '))

        if(peso > gordo){
            gordo = peso
            mais_gordo = identificação
        }
        if (peso < magro){
            magro = peso
            mais_magro = identificação
        }
    }
    console.log(`Mais gordo: ${mais_gordo} => ${gordo}KG`)
    console.log(`Mais magro: ${mais_magro} => ${magro}KG`)

}

main()