let meuArray = [1, 2, 5, 7, 9, 4];
let meuArray2 = ['azul',"amarelo", 'verde', "branco"];

let meuArrayInvertido = meuArray.reverse();
console.log(meuArrayInvertido);

let inverter1 = meuArrayInvertido.reverse();
console.log(meuArrayInvertido);


/**
 * Crie a função imprimirInverso que pega um Array como um argumento e imprime 
 * cada elemento em ordem reversa no console (você não precisa inverter o Array).
 */

console.log("COM FUNÇÃO")
 function imprimirInverso(dado) {
    console.log(dado.reverse());
  }
  function inverter(dado) {
    let imprimirInverso = dado.reverse();
    return imprimirInverso;
  }
  imprimirInverso(meuArray);
  console.log(inverter(meuArray2));