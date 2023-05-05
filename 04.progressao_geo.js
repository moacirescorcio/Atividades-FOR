import { question } from "readline-sync";

//4. Leia as variáveis A0, Limite e R e escreva os valores menores que Limite gerados pela Progressão Geométrica que tem por valor inicial A0 e razão R.

function main(){
    const a0 = Number(question('Número A0: '))
    const limite = Number(question('Limite: '))
    const razao = Number(question('Razão '))

    let prox = a0
    for (let i = 0; prox < limite; i++){
        prox = a0 * (razao**i)
        if (prox > limite){
            break
        }
        console.log(prox)
    }
}

main()