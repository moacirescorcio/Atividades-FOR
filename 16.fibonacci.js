import { question } from "readline-sync";

//16. Leia um número N, calcule e escreva os N primeiros termos de seqüência de Fibonacci (0,1,1,2,3,5,8,...). O valor lido para N sempre será maior ou igual a 2.

function main(){
    const n = Number(question('Digite um número: '))

    let a = 0
    let b = 1
    let c = 2
    console.log(`${a}`)
    console.log(`${b}`)

    for (let i = 3; i < n; i++){
        c = b + a
        a=b
        b=c
        
        console.log(c)
        
        
    }
}

main()