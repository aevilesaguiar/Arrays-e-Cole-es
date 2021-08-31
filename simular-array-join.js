let letras = ["A","e","v","i","l","e","s"];
let separador = "";
function foramrPalavra(item) {
  separador += item;
}
letras.forEach(foramrPalavra);
console.log(separador);