/* <button id="meu-btn">CLICK</button> */

// const btn = document.getElementById("meu-btn");

// //Atrelando um evento ao ELEMENTO
// btn.addEventListener("click", function(){

//     //Função matemática Math
//     //Math.randon = retorna números aleatórios entre 0 e 1 . Ex: 0.121821927
//     //Math.floor = Função de arrendodamento para baixo
//     //Math.ceil = Função de arrendodamento para cima
//     //Math.round = Função de arrendodamento aleatório

//     let r = 0;
//     let g = 0;
//     let b = 0;
//     //Numeros aleatório gerados...
//     r = Math.round(Math.random() * 255);
//     g = Math.round(Math.random() * 255);
//     b = Math.round(Math.random() * 255);

//     // this.setAttribute("style", "background-color:rgb("+r+","+g+","+b+");");
//     this.setAttribute("style", `background-color:rgb(${r},${g},${b});`);

// } );

//DESAFIO
//Recupere o elemento tit-sec e atrele a ele um evento de click.
//Quando clicado o elemento deve diminuir em 10px.


//ARREYS E SEUS METODOS

let frutas = ["banana", "maça", "pêra", "uva", "melancia", "ameixa", "morango", "goiaba" ]

// console.log(frutas);
// //descobrindo o tamanho da lista com a propriedade lenght
// console.log(`tamanho do array : ${frutas.length}`);

// //adicionando um item ao final do array com o método push 
// frutas.push("fruta conde");
// console.table(frutas)


// //adicionando im item no inicio do array com o método unshift
// frutas.unshift("jabuticaba")
// console.log(frutas)


// //remover um intem do funal do array com o métido pop()
// frutas.pop();
// console.log(frutas);

// //remover um item do inicio do array com o método shift()
// frutas.shift();
// console.log(frutas);


// //localizando um item com o método indexOf(ItemNome)
// let indice = frutas.indexOf("morango");
// console.log(indice);

//remover um item precisamos  da posição e a quantdad de indices  que bão ser removidos


// let indice = frutas.indexOf("ameixa");
// console.log(indice);
// console.log(`FRUTA QUE ESTAVA NO INDICE ANTES DA REMOÇÃO: ${frutas[indice]}`);
// frutas.splice(indice,1);
// console.log(`FRUTA QUE FICOU NO INDICE ANTES DA REMOÇÃO: ${frutas[indice]}`);

// frutas.forEach((fruta)=>{
//     console.log(`olha ela: ${fruta}`);
// })

let nr1 = [1,2,3,4,5,];
let nr2 = [6,7,8,9,10];

let