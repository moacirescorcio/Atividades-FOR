import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))
    let numerador = 1
    let r = 0
    
    for (let denominador = 1; denominador <= 50; denominador++){
            
        r += numerador / denominador 
        numerador += 2
        
    }

    

    console.log(`Resultado da operação é ${r.toFixed(2)}`)
}

main()