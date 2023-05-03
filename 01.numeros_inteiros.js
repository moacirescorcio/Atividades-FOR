import { question } from "readline-sync";

//1. Leia N e escreva todos os números inteiros de 1 a N.

function main(){
    const n = Number(question('Digite um número: '))

    for (let i=1; i<n+1; i++){
        console.log(i)
    }
}

main()