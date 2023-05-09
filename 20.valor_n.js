import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    const numerador = 1
    let r = 0
    
    for (let denominador = 1; denominador <= limite; denominador++){
        if (denominador % 2 == 0){
            r -= numerador / denominador 
        }else{
            r += numerador / denominador 
        }
    }
    console.log(`Resultado da operação é ${r.toFixed(2)}`)

}

main()