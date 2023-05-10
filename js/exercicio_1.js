function mudaCor() {
    document.body.style.backgroundColor = "blue";
}

let imagem1 = "https://i.pinimg.com/originals/bd/61/71/bd617116f9c67ee2ef316b5a02d7ea84.jpg";
let imagem2 = "https://i.pinimg.com/564x/4f/58/b2/4f58b2479dbe0b3ae3be01272f3401fb.jpg";

let imagemElement = document.getElementById("imagem");

imagemElement.src = imagem1;


function trocarImagem() {
    if (imagemElement.src === imagem1) {
    imagemElement.src = imagem2;
    } else {
    imagemElement.src = imagem1;
    }
}



let botao = document.getElementById("botao");
let mensagem = document.getElementById("mensagem");

botao.addEventListener("click", function() {
    mensagem.innerText = "eita que delicia";
});


function hideElement() {
    var elemento = document.getElementById("elemento");
    elemento.style.display = "none";
}