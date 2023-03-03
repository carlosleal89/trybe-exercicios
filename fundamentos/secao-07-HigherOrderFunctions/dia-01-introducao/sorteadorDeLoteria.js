// gerar numero entre 1 e 5
// parametros numero da aposta e função que checa se o numero apostado é igual ao numero gerado
// retorno 'Tente novamente' ou 'Parabens, ganhou'

const sortNum = () => Math.floor(Math.random() * 5) + 1;

const bet = (num, sortNumber) => {
    if (num === sortNumber()) {
       return 'Parabens, ganhou';
    }
    return 'Tente novamente'
};

console.log(bet(5, sortNum));

 