import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    const numerador = 1
    let denominador = 1
    let s = 0
    for (; denominador <= n; denominador++){
        s += numerador / denominador
    }
    console.log(`Resultado da operação é ${s.toFixed(2)}`)
}

main()