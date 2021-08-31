let numeros = [1, 2, 3, 4, 5, 6];
let total = numeros.reduce(function somarArray(total, numero){
  return total + numero;
 }, 0);
 console.log(total);


 let  numeros1 = [1, 2, 3, 4, 5, 22];
 let  total1 = 0;
 function somarArray(item) {
   total1 += item;

 }

 numeros1.forEach(somarArray);
 console.log(total1);