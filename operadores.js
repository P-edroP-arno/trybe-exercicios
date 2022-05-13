const currentHour = 07;

let message = "";

if (currentHour >= 22){
    message = "Não deveriamos comer nada, é hora de dormir";
}else if (currentHour >= 18 && currentHour <= 22) {
     message = "Rango da noite, bora jantar XD";
}else if (currentHour >= 14 && currentHour <= 18) {
     message = "Ta na hora do lanche, vamos de bolo e café";
}else if (currentHour >= 11 && currentHour <= 14) {
     message = "Hora do almoço!!";
}else (currentHour >= 5 && currentHour <= 11) 
     message = "Hmm, cheirinho de café e pão de queijo";

console.log(message)

//

var weekDay = "Quarta-Feira"

if (weekDay === "Sábado" || weekDay === "Domingo" ){
    console.log("FINALMEMTE, descanso merecido!")
}else{
    console.log("Oba, mais um dia de aprendizado na Trybe >:D")
}