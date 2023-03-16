//desestruture as estações do ano e espalhe-as em um array de meses do ano.

const yearSeasons = {
    spring: ['March', 'April', 'May'],
    summer: ['June', 'July', 'August'],
    autumn: ['September', 'October', 'November'],
    winter: ['December', 'January', 'February'],
  };
  
  const {spring, summer, autumn, winter} = yearSeasons;

  const newSeasons = [...spring, ...summer, ...autumn, ...winter];


  console.log(newSeasons);
  