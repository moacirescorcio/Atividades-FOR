import { question } from "readline-sync";

//7. Leia um número N, some todos os números inteiros entre 1 e N e escreva o resultado obtido.

function main(){
    const n = Number(question('Digite um número: '))

    let resultado = n
    for (let i=0; i < n; i++){
        resultado += i
    }

    console.log(resultado)
}

main()