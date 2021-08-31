
let softwares = ['photoshop', 'AutoCad', 'MatLab','word', "excel"]
let softwares2 = [ 'AutoCad', 'MatLab','word', "excel"]
let dados = "  Aeviles  de Aguiar Silva"

//Acessar elementos específicos de um array.
console.log(dados.split(' '));
console.log(dados);

let data = ["08/08/1996", "30/08/2021", "12/12/2021"];
console.log(data.push("159"));
console.log(data);

data[1]="357";
console.log(data)

let nome = dados.replace("  ", "");//ela eliminou dois espaços e ecolocou 1
console.log(nome)

//Modificar cada um dos elementos de um array e imprimi-los no console.

softwares[0]='outlook';
console.log(softwares);
softwares[1]='Eclipse';
console.log(softwares);
softwares[2]='Excel';
console.log(softwares);
//Adicionar elementos a um array.
softwares.unshift('power point','zoom');//adiciona um ou mais elementos no inicio do array
console.log(softwares);

softwares.push('paint');//adiciona um ou mais elemtnos ao final do array
console.log(softwares);

//Extrair elementos de um array.
softwares.pop(); //elimina o ultimo elemento
console.log(softwares);


//O join()método cria e retorna uma nova string concatenando todos os elementos em uma matriz 

console.log(['a', 'b', 'c', 'd'].join(' - '))
//retorna "a - b - c - d"
const fruits = ["Banana", "Orange", "Apple", "Mango"];  
console.log( fruits.join(" * ")); // resultado Banana * Orange * Apple * Mango





//E.	Comparar elementos de um array com os elementos de outro. 
//O sort()método classifica os elementos de um arrayno lugare retorna a matriz classificada. 
//A ordem de classificação padrão é crescente, construída sobre a conversão dos elementos em strings e, 
//em seguida, a comparação de suas sequências de valores de unidades de código UTF-16.
console.log("COMPARANDO")
softwares.sort(); 
console.log(softwares)
softwares2.sort();
console.log(softwares2)
if (softwares==softwares2) {
    console.log(" é igual")
}else{
    console.log(" é diferente")
}

