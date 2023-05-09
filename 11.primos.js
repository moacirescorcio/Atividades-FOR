import { question } from "readline-sync";

function main(){
    const limite_inferior = Number(question('Limite Inferior: '))
    const limite_superior = Number(question('Limite Superior: '))

    console.log(`>>> Números primos entre os limites:`)
    for (let i = limite_inferior; i <= limite_superior; i++){
        let contador = 0
        for (let divisor = 1; divisor <= i; divisor++){
            if (i % divisor == 0){
                contador = contador + 1
            }
        }
        if (contador == 2){ 
            console.log(i)
        }
    }   
}

main();
