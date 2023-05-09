import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    let numero = 0
    for (let i = n-1; i > 0; i--){
        numero = Math.sqrt(i)
        if (Number.isInteger(numero)){
            console.log(i)
            break
        }
    }
}
main()