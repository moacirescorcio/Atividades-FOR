import { question } from "readline-sync";

//8. Leia N , LimiteSuperior e LimiteInferior e escreva todos os múltiplos de N entre os limites lidos.

function main(){
    const n = Number(question('Número: '))
    const limite_inferior = Number(question('Limite inferior: '))
    const limite_superior = Number(question('Limite superior: '))

    console.log(`>>> Os múltiplos de ${n}:`)
    for (let i = limite_inferior; i <= limite_superior; i++){
        if (i % n == 0){
            console.log(i)
        }
    }
}

main()