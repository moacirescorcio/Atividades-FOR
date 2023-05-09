import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    let denominador = n
    let numerador = 1
    let i = 1
    let r = 0
    for (; i <= n; i++){
        denominador -= 1
        numerador += 1
       if (i % 2 == 0){
            r -= denominador/numerador
            
        }else{
            
            r += numerador / denominador
        }      
    }
    console.log(`Resultado da operação é ${r.toFixed(2)}`)
}

main()