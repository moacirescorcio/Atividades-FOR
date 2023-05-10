import { question } from "readline-sync";

function main(){
    const eleitores = Number(question('Número de eleitores: '))

    let a = 0
    let b = 0
    let c = 0
    let nulo = 0
    let branco = 0 
    for(let i = 0; i < eleitores; i++){
        let voto = Number(question('Digite em quem você vota (1 - CANDIDATO A // 2 - CANDIDATO B // 3 - CANDIDADO C // 9 - NULO // 0 - BRANCO'))

        if (voto == 1){
            a++
        }else if (voto == 2){
            b++
        }else if (voto == 3){
            c++
        }else if (voto == 9){
            nulo++
        }else if(voto == 0){
            branco++
        }
    }
    if (a > b && a > c){
        console.log(`\n>>>> Candidato A foi o vencedor com ${a} votos!\n`)
    }else if(b > a && b > c){
        console.log(`\n>>>>Candidato B foi o vencedor com ${b} votos!\n`)
    
    }else{
        console.log(`\n>>>>Candidato B foi o vencedor com ${c} votos!\n`)
    }
    console.log(`VOTOS BRANCOS: ${branco}`)
    console.log(`VOTOS NULOS: ${nulo}`)
    console.log(`VOTOS PARA O CANDIDATO A: ${a}`)
    console.log(`VOTOS PARA O CANDIDATO B: ${b}`)
    console.log(`VOTOS PARA O CANDIDATO C: ${c}`)
}

main()