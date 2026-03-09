/*alterar a cor dos botões de redes sociais*/
function icon(event) {
  /*guarda o i em uma variável "iconeAtual"*/
  let iconeAtual = event.currentTarget.querySelector("i");
  /*muda a cor mesmo que não seja o ícone do LinkedIn*/
  if (iconeAtual.classList.contains("fa-linkedin-in")) {
    iconeAtual.style.color = "rgb(255, 255, 255)";
  } else {
    iconeAtual.style.color = "rgb(255, 255, 255)";
  }
}

/*alterar a cor dos ícones de especialidades*/
function espIcon(event) {
  let espAtual = event.currentTarget.querySelector("i");

  if (espAtual.classList.contains("bi bi-code-square")) {
    espAtual.style.color = "rgb(255, 255, 255)";
  } else {
    espAtual.style.color = "rgb(255, 255, 255)";
  }
}

/*
MENU MOBILE - SCRIPTS
*/
let btnMenu = document.querySelector("#abrir_menu"); //menu hambúrguer
let menuMob = document.querySelector("#menu_mobile");//menu mobile
let transparencia = document.querySelector("#overlay_menu");//overlay transparente do menu mobile

//ARROW FUNCTION ACIONADO AO RECEBER EVENTO CLICK
/*
função: ao usuário clicar, o menu mobile e o overlay aparecem
*/
btnMenu.addEventListener("click", () => {
  //ADICIONA UMA CLASSE AO ITEM
  menuMob.classList.add('show-menu');
});

/*
função: ao usuário clicar, o menu mobile desaparece junto com o overlay
*/
menuMob.addEventListener("click", () => {
  //REMOVE UMA CLASSE DO ITEM
  menuMob.classList.remove('show-menu');
});

/*
função: ao usuário clicar, o menu mobile desaparece junto com o próprio overlay
*/
transparencia.addEventListener("click", () => {
  //REMOVE UMA CLASSE DO ITEM
  menuMob.classList.remove('show-menu');
});

/*função carregadda junto com a página*/
window.onload = function () {
  //pega TODOS os botões da div: .btn-github
  let botoesSociais = document.querySelectorAll(".btn-github");

  botoesSociais.forEach((botao) => {
    botao.onmouseenter = icon;
    botao.onmouseleave = function (event) {
      event.currentTarget.querySelector("i").style.color = "rgb(0, 0, 0)";
    };
  });

  //pega todos os ícones da div: especialidades-box
  let especialidades = document.querySelectorAll(".especialidades-box");

  especialidades.forEach((esp) => {
    esp.onmouseenter = espIcon;
    esp.onmouseleave = function (event) {
      event.currentTarget.querySelector("i").style.color = "rgb(255, 213, 0)";
    };
  });
};

/*-----------------------------------------------*/
/*SCROLL REVEAL - ANIMAÇÕES*/
//SEÇÃO SOBRE
ScrollReveal().reveal(".txt-sobre", {
  origin: "left",
  duration: 2000,
  distance: "10%",
});

ScrollReveal().reveal("#titleCall", {
  origin: "left",
  duration: 2000,
  distance: "20%",
});

ScrollReveal().reveal(".especialidades-box", {
  origin: "bottom",
  duration: 1500,
  distance: "20%",
});

ScrollReveal().reveal(".img-port", {
  origin: "left",
  duration: 1500,
  distance: "20%",
});

ScrollReveal().reveal("form", {
  origin: "left",
  duration: 2000,
  distance: "20%",
});
