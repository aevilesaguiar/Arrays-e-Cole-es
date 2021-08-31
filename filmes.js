
let filmesOne = ["Pequeno princípe", " ... E o Vento Levou ",  "O Poderoso Chefão",   "O Mágico de Oz",  "2001 - Uma Odisseia no Espaço " ];
let filmesTwo = ["Clube dos Cinco ", " Curtindo a vida Adoidado",  "Juventude Transviada ",   "Cidadão Kane ",  "Cantando na Chuva " ];

  
  filmesOne = filmesOne.map((filmesOne) => filmesOne.toUpperCase());
  filmesTwo = filmesTwo.map((filmesTwo) => filmesTwo.toUpperCase());
  let filmes = [];
  function unirArray(one, two) {
    filmes = one.concat(two);
  }
  unirArray(filmesOne, filmesTwo);
  console.log(filmes);
  let jogo = filmes.pop();
  
  const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
  const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
  