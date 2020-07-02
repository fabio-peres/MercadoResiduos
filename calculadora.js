let data = new Date;
let valorBase = 100;
function calculadora(anoFabricacao, i) {
    let estado = [1, 2, 3, 4];
    let idadeCel = data.getFullYear() - anoFabricacao;
    let pontos = 0;
    if (idadeCel >= 6) {
        pontos = valorBase * 2 / (estado.length / estado [i - 1]);
    } else if (idadeCel > 0) {
        pontos = valorBase * (10 - idadeCel)  *  (estado [i - 1] / estado.length);
    } else {
        pontos = valorBase * 10 * (estado [i - 1] / estado.length);
    }

    return pontos;
}

console.log(calculadora(2014,1));