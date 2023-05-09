import { question } from "readline-sync";

//10. Leia LimiteSuperior e LimiteInferior e escreva todos os números ímpares entre os limites lidos.

function main(){
    const limite_inferior = Number(question('Limite Inferior: '))
    const limite_superior = Number(question('Limite Superior: '))

    console.log(`>>> Números pares entre os limites:`)
    for (let i = limite_inferior; i <= limite_superior; i++){
        if (i % 2 != 0){
            console.log(i)
        }
    }
}

main()