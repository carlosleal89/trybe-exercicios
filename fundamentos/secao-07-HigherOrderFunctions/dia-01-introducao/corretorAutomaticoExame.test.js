const {getPoints, totalPoints} = require('./corretorAutomaticoExame');

const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];
describe('Testa se a função getPoints() retorna o valor esperado', () => {
    it('Testa se a função getPoints() retorna a pontuação esperada', () => {
        expect(getPoints(rightAnswers, studentAnswers)).toEqual(5);
    });
    it('Testa se a função totalPoints() retorna a pontuação esperada', () => {
        expect(totalPoints(rightAnswers, studentAnswers, getPoints)).toEqual(5);
    })
})