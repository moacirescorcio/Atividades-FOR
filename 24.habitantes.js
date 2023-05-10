import { question } from "readline-sync";

//24. A prefeitura de uma cidade fez uma pesquisa entre seus habitantes, coletando dados sobre o salário e número de filhos. Escreva um algoritmo que leia o salário e o número de filhos de N habitantes e escreva: a) média de salário da população; b) média de número de filhos; c) percentual de pessoas com salário de até R$ 1.000,00.

function main(){
    const habitantes = Number(question('Número de habitantes: '))

    let contador_percentual = 0
    let soma_filhos = 0
    let soma_salario = 0
    for (let i = 0; i < habitantes; i++){
        let salario = Number(question('Salário: '))
        let num_filhos = Number(question('Número de filhos: '))
        
        //somando salario e somando filhos
        soma_salario += salario
        soma_filhos += num_filhos

        //verificando se é maior que 1000
        if (salario <= 1000){
            contador_percentual++
        }
    }
    console.log(`Média salarial é de R$${(soma_salario/habitantes).toFixed(2)}`)
    console.log(`Média filhos é de ${(soma_filhos/habitantes).toFixed(1)}`)
    console.log(`O percentual de pessoas que tem salário até R$1000,00 é ${((contador_percentual/habitantes)*100).toFixed(1)}% `)

}

main()