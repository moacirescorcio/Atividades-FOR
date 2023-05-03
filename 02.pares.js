import { question } from "readline-sync";

//2. Leia N e escreva todos os números inteiros pares de 1 a N.

function main(){
    const n = Number(question('Digite um número: '))

    for (let i = 0; i<n; i++){
        if (i % 2 == 0){
            console.log(i)
        }
    }
}

main()