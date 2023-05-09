import { question } from "readline-sync"

//13. Leia N e uma lista de N números e escreva o maior número da lista.

function main(){
    const n = Number (question('Digite um número: '))

    let soma = 0
    let numero_lista = 0
    let i = 0
    let maior = 0
    for (; i < n; i++){
        numero_lista = Number(question('Digite um número para a lista: ')) 
        if(numero_lista > maior){
            maior = numero_lista
        }
    }
    
    console.log(`O maior número digitado foi ${maior}`)
}

main()