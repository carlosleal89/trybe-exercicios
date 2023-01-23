const currentHour = 5;
let message = "";
if(currentHour >= 22){
    message = "Não deve comer, hora de dormir.";
} else if (currentHour >= 18 && currentHour < 22){
    message = "rango da noite.";
} else if (currentHour >= 14 && currentHour < 18){
    message = "fazer bolo.";
} else if (currentHour >= 11 && currentHour < 14){
    message = "almoço";
} else if (currentHour > 4 && currentHour < 11){
    message = "hora do café";
}
 console.log(message);



 let weekDay = "sabado";
 if(weekDay == "segunda feira" || weekDay == "terca feira" || weekDay == "quarta feira"){
    console.log('dia de aula');
 } else if (weekDay == "sabado" || weekDay == "domingo"){
    console.log('final de semana');
 }

 console.log((2 + 2) === 4);
 console.log(!(2 + 2) === 4);

 let statusProcess = "Aprovada";

 switch(statusProcess){
    case "Aprovada": console.log("Parabéns.");
    break;
    case "lista":console.log("Lista de espera.");
    break;
    case "reprovada": console.log("reprovado");
    break;
    default: "informação incorreta.";
 }