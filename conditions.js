//var idade = 18;
//var idade = prompt("Qual sua idade?");

// if (idade >= 18) {
//     console.log("maior de idade");
//     alert("maior de idade");
// } else {
//     console.log("menor de idade");
//     alert("menor de idade");
// }


var count = 0;
while(count <= 5){
    console.log(count);
    count++;
}

for(i=0; i <=10; i++){
    console.log(i);
}

var d = new Date();
console.log(d);

console.log(d.getDay()); // retorna dia da semana
console.log(d.getDate());// retorna dia do mes
console.log(d.getMonth()+1);//retorna o mes atual
console.log(d.getFullYear());// retorna o ano