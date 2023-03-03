// Crie uma HOF que receberá três parâmetros:

const { get } = require("http");

// O primeiro será um array de respostas corretas (soluções);

// O segundo será um array contendo as respostas fornecidas por uma pessoa estudante;

// O terceiro é uma função que compara os dois arrays e então dá uma pontuação baseada nos acertos. Para isso, essa função usará os seguintes critérios:

// Uma resposta correta adiciona 1 ponto à pontuação final;

// A ausência de uma resposta não altera a pontuação (quando for “N.A”);

// Uma resposta incorreta reduz a pontuação final em 0.5 ponto.

// Ao final, a HOF deve retornar o total de pontos obtidos através das respostas fornecidas pela pessoa estudante. Utilize os seguintes arrays:

const rightAnswers =   ['A', 'C'  , 'B', 'D', 'A', 'A', 'D'  , 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

function getPoints(rA, sA) {
    let total = 0;
    for (let i = 0; i < rA.length; i += 1){
        if(rA[i] === sA[i]) {
            total += 1;
        } else if (rA[i] !== sA[i] && sA[i] !== 'N.A'){
            total -= 0.5;
        }
    }
    return total;
}

console.log(getPoints(rightAnswers, studentAnswers));

function totalPoints(rightAnswers, answers, points) {
    return points(rightAnswers, answers);
}

console.log(totalPoints(rightAnswers, studentAnswers, getPoints));

module.exports = {getPoints, totalPoints};




