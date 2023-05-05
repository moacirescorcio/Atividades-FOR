import { question } from "readline-sync";

//6. Escreva a tabuada dos números de 1 a 10.

function main(){
    let contador = 0
    let n1 = 1
    let n2 = 1
    console.log(`>>> Tabuada do número ${n1}`)
    for (n2 = 1; contador < 100; n2++){
        if (n2 == 11){
            n2 = 1
            n1++
            if (n1 == 11){
                break
            }
            console.log(`>>> Tabuada do número ${n1}`)
        }       
        
       console.log(`${n1} x ${n2} = ${n1*n2}`)   
                      
    }
}

main()