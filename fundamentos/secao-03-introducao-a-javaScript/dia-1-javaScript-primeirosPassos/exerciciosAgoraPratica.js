console.log("Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false. Bonus: use somente um if");

const num1 = 1;
const num2 = 15;
const num3 = 19;

if (num1 % 2 === 0 || num2 % 2 === 0 || num3 % 2 === 0) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele deve retornar false. Bonus: use somente um if.")
const num4 = 14;
const num5 = 15;
const num6 = 10;

if (num4 % 2 !== 0 || num5 % 2 !== 0 || num6 % 2 !== 0) {
    console.log(true);
} else {
    console.log(false);
}

console.log("Utilize if/else para escrever um código que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda, descontado o custo do produto) a empresa terá ao vender mil desses produtos.Atente que, sobre o custo do produto, incide um imposto de 20%.Seu código também deve emitir uma mensagem de erro e encerrar caso algum dos seus valores de entrada seja menor que zero.O lucro de um produto é o resultado da subtração do valor de venda pelo custo do mesmo, sendo que o imposto de 20% também faz parte do valor de custo.valorCustoTotal = valorCusto + impostoSobreOCusto;lucro = valorVenda - valorCustoTotal (lucro de um produto);");
const valorProduto = 40;
let valorTotal = null;
const valorVenda = 60;
let lucro = null;

if (valorProduto < 0 || valorVenda < 0) {
    console.log("Os valores não podem ser menores que Zero!");
} else {
    lucro = (valorVenda - (valorProduto + valorProduto * 0.2)) * 1000;
    console.log(lucro);
}

console.log("Utilize if/else para escrever um código que, dado um salário bruto, calcule o líquido a ser recebido.Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR.A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, use as seguintes referências:INSS (Instituto Nacional do Seguro Social)Salário bruto até R$ 1.556,94: alíquota de 8%Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88IR (Imposto de Renda)Até R$ 1.903,98: isento de imposto de rendaDe R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do impostoDe R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do impostoDe R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do impostoAcima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.Exemplo: Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:R$ 2.670,00: salário com INSS já deduzido;7.5%: alíquota de imposto de renda;R$ 142,80 parcela a se deduzir do imposto.Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.Resultado: R$ 2.612,55.");
const salarioBruto = 6000;
let salarioBase = 0;
let salarioLiquido = 0;
let ir = 0;

if (salarioBruto <= 1556.94) {
    salarioBase = salarioBruto * 0.8;
} else if (salarioBruto > 1556.94 && salarioBruto <= 2594.92) {
    salarioBase = salarioBruto * 0.9;
} else if (salarioBruto > 2594.92 && salarioBruto <= 5189.82) {
    salarioBase = salarioBruto - (salarioBruto * 0.11);
} else {
    salarioBase = salarioBruto - 570,88;
}
console.log("O seu salário base é: "+salarioBase);

if (salarioBase <= 1903.98){
    salarioLiquido = salarioBase;
} else if(salarioBase > 1903.98 && salarioBase <=2826.65){
    ir = (salarioBase*0.075)-142.80;
    salarioLiquido = salarioBase - ir;
} else if(salarioBase > 2826.65 && salarioBase <= 3751.05){
    ir = (salarioBase*0.15)-354.80;
    salarioLiquido = salarioBase - ir;
} else if(salarioBase > 3751.05 && salarioBase <=4664.68){
    ir = (salarioBase*0.225)-636.13;
    salarioLiquido = salarioBase - ir;
} else {
    ir = (salarioBase*0.275)-868.36;
    salarioLiquido = salarioBase - ir;
}
console.log("O seu salario liquido é "+salarioLiquido);