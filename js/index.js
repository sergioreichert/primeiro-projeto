/* OBJETIVO 01- quando clicar no botão de veja o trailer, deve abrir o modal com o vídeo do trailer */
/*OBJETIVO 02 - quando o usuário clica no X devemos fechar a modal. */
/* -passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 
 - passo 2 - dar um jeito do js identificar quando o usuário clicar no botão
  - passo 3 - dar um jeito de fechar o elemento da modal no js
   - passo 4 abrir a modal na tela*/


// -passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 
const botaoTrailer = document.querySelector(".botao-trailer")

//passo 2 - dar um jeito do js identificar quando o usuário clicar no botão
botaoTrailer.addEventListener("click", () => {
    //passo 4 abrir a modal na tela
    modal.classList.add("aberto");
    video.setAttribute("src", linkDoVideo);
});

//passo 3 - dar um jeito de pegar o elemento da modal no js
const modal = document.querySelector(".modal");
/*OBJETIVO 02 - quando o usuário clica no X devemos fechar a modal. */
// -passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js 

const botaoFecharModal = document.querySelector(".fechar-modal");
//passo 2 - dar um jeito do js identificar quando o usuário clicar no botão
botaoFecharModal.addEventListener("click",() => {
// passo 3 - fechar a modal
modal.classList.remove("aberto")
video.setAttribute("src", "")
})
const video = document.getElementById("video")
const linkDoVideo = video.src;
//  acima o código está embaralhado por causa que estou aprendendo, mas se for fazer para cliente é bom deixar tudo organizado. Exemplo:
//  colocar as variaveis primeiro como está abaixo.



/*  const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

function alternarModal(){
	modal.classList.toggle("aberto");
}

botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});*/