// tabuada

let numero = 8;

for(let i=1;i<=10;i++){
    console.log(numero + 'X' + i + '=' + numero * i);
}

let listaNomes = ['Carlos', 'Maria', 'Ordaqui'];

for(let i=0;i<listaNomes.length;i++){
    console.log("Seja bem vindo " + listaNomes[i]);
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log():

let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let name of names){ //cria a variavel 'name' e cada vez que passa no laço ele atribui um elemento do array 'names'.
    console.log(name); 
} 
