let salarioBruto = parseFloat(input('informe o salario bruto: '));

let inssFaixa1Inicio = 0;
let inssFaixa1Fim = 1_518.00;
let inssFaixa1Aliquota = 7.5;


let faixa1 = {
    inicio: 0,
    fim: 1_518.00,
    aliquota: 0.075
};

let faixa2 = {
    inicio: 1_518.01,
    fim: 2_793.00,
    aliquota: 0.00
}

let tabelaINSS = [faixa1,faixa2];

console.table(tabelaINSS);

let faixaEncontrada = {};
for (let i = 0; i < tabelaINSS.length; i++){
    const faixa = tabelaINSS[i];
    if(salarioBruto >= faixa.inicio &&
        salarioBruto <= faixa.fim) {
            faixaEncontrada = faixa;
            break;
        }
}

console.log(faixaEncontrada);
