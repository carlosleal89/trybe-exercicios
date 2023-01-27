let car = {
  type: 'VW',
  model: 'Fusca',
  color: 'blue',
};

car['topSpeed'] = '80km/h';
car['typeModel'] = car.type + ' ' + car.model;

console.log(car.type);
console.log(car['type']);
console.log(car.topSpeed);
console.log(car.typeModel);


let diasDaSemana = {
    1: 'domingo',
    2: 'segunda',
    3: 'terça',
    4: 'quarta',
    5: 'quinta',
    6: 'sexta',
    7: 'sábado',
  };  
  //diasDaSemana.1; // SyntaxError: Unexpected number => pq a propriedade é nomeado com Numero e nesse caso só pode ser acessada por [];
  console.log(diasDaSemana['1']); // domingo


  let conta = {
    agencia: '0000',
    banco: {
      cod: '012',
      id: 4,
      nome: 'TrybeBank',
    },
  };
  
  let infoDoBanco = 'banco';
  console.log(conta[infoDoBanco]); // { cod: '012', id: 4, nome: 'TrybeBank' }
  console.log(conta[infoDoBanco]['nome']); // TrybeBank  
  console.log(conta.agencia); // 0000
  console.log(conta['agencia']); // 0000  
  console.log(conta.banco.cod); // 012
  console.log(conta['banco']['id']); // 4



  let usuario = {
    id: 99,
    email: 'jakeperalta@gmail.com',
    infoPessoal: {    //exemplo de objeto dentro de objeto;
      nome: 'Jake',
      sobrenome: 'Peralta',
      endereco: {
        rua: 'Smith Street',
        bairro: 'Brooklyn',
        cidade: 'Nova Iorque',
        estado: 'Nova Iorque',
      },
    },
  };
  
  console.log(usuario['id']); // 99
  console.log(usuario.email); // jakeperalta@gmail.com
  console.log(usuario.infoPessoal.endereco.rua); // Smith Street   exemplo para acessar um objeto dentro de outro.
  console.log(usuario['infoPessoal'].endereco['rua']); //exemplo de acessar propriedades com . ou colchetes.
  console.log(usuario['infoPessoal']['endereco']['cidade']); // Nova Iorque


  //exemplo de objeto dentro array
  let moradores = [
    {
      nome: 'Luiza',
      sobrenome: 'Guimarães',
      endereco:{
      andar: 10,
      apartamento: 1005},
    },
    {
      nome: 'William',
      sobrenome: 'Albuquerque',
      andar: 5,
      apartamento: 502,
    },
    {
      nome: 'Murilo',
      sobrenome: 'Ferraz',
      andar: 8,
      apartamento: 804,
    },
    {
      nome: 'Zoey',
      sobrenome: 'Brooks',
      andar: 1,
      apartamento: 101,
    },
  ];
  
  let primeiroMorador = moradores[0];
  console.log(primeiroMorador); // { nome: 'Luiza', sobrenome: 'Guimarães', andar: 10, apartamento: 1005 }
  console.log(moradores[0]['endereco'].andar); // acessando propriedade pelo indice do array, notação de colchetes e notação de ponto
  
  let ultimoMorador = moradores[moradores.length - 1];
  console.log(ultimoMorador); // { nome: 'Zoey', sobrenome: 'Brooks', andar: 1, apartamento: 101 }
  console.log(ultimoMorador.nome); // Zoey
  console.log(moradores[1].nome);