import { question } from "readline-sync";

//Uma determinada empresa armazena para cada funcionário uma ficha contendo o código, o número de horas trabalhadas e o seu no de dependentes. Considerando que a empresa paga R$ 12,00 por hora e R$ 40,00 por dependentes e que sobre o salário são feitos descontos de 8,5% para o INSS e 5% para IR. Escreva um algoritmo que leia o código, número de horas trabalhadas e número de dependentes de N funcionários. Após a leitura de cada ficha, escreva os valores descontados para cada imposto e o salário líquido do funcionário.

function main(){
    const n = Number(question('Quantos funcionários: '))

    for(let i = 0; i < n; i++){
        const codigo = Number(question('Código do funcionário: '))
        const horas_trabalhadas = Number(question('Horas trabalhadas: '))
        const n_dependentes = Number(question('Quantos dependentes: '))

        let salario_bruto = calcular_salario_bruto(horas_trabalhadas,n_dependentes)
        let desconto_inss = calcular_inss(salario_bruto)
        let desconto_ir = calcular_ir(salario_bruto)
        let salario_liquido = calcular_salario_liquido(salario_bruto,desconto_inss,desconto_ir)

        console.log(`>>> SALÁRIO DO FUNCIONÁRIO ${codigo} <<<`)
        console.log(`=> Desconto INSS: R$${desconto_inss.toFixed(2)}`)
        console.log(`=> Desconto IR: R$${desconto_ir.toFixed(2)}`)
        console.log(`=> Salário líquido: R$${salario_liquido.toFixed(2)}\n`)
    }



}

function calcular_salario_bruto(horas_trabalhadas,n_dependentes){
    let salario
    salario = (horas_trabalhadas * 12) + (n_dependentes * 40)
    return salario
}

function calcular_inss(salario_bruto){
    let desconto
    desconto = salario_bruto * (8.5/100)
    return desconto
}

function calcular_ir(salario_bruto){
    let desconto
    desconto = salario_bruto * (5/100)
    return desconto
}

function calcular_salario_liquido(salario_bruto,desconto_inss,desconto_ir){
    let salario
    salario = salario_bruto - desconto_inss - desconto_ir
    return salario
}

main()