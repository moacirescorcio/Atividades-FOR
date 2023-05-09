import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    let denominador = n
    let numerador = 1
    let i = 1
    let r = 0
    for (; i <= n; i++){
        r += numerador / denominador
        
    }
    console.log(`Resultado da operação é ${s.toFixed(2)}`)
}

main()