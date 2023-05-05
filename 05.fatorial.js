import { question } from "readline-sync";

//5. Leia um número, calcule e escreva seu fatorial.

function main(){
    const n = Number(question('Digite um número: '))

    let resultado = n
    for (let i = 1; i < n; i++){
        resultado *= i
    }
    console.log(`O fatorial de ${n} é igual a ${resultado}.`)
}

main()