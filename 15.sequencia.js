import { question } from "readline-sync";

function main(){
    const n = Number(question('Digite um número: '))

    let prox = 1
    let razao = 2
    for (let i = 1; i <= n; i++){
        console.log(prox)
        prox =  prox + razao
        razao++
        
    }
}

main()