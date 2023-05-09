import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    let denominador = n
    let s = 0
    let numerador = 1
    for (; numerador <= n; numerador++){
        s += numerador / denominador
        denominador--
    }
    console.log(`Resultado da operação é ${s.toFixed(2)}`)
}

main()