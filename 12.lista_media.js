import { question } from "readline-sync";

//12. Leia N e uma lista de N números e escreva a soma e a média de todos os números da lista.

function main(){
    const n = Number (question('Digite um número: '))

    let soma = 0
    let numero_lista = 0
    let i = 0
    for (; i < n; i++){
        numero_lista = Number(question('Digite um número para a lista: ')) 
        soma += numero_lista
    }
    const media = soma / i
    console.log(`Média dos números é igual a ${media}`)
}

main()