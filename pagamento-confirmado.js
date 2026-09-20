
const pesquisa = document.querySelector("#form-pesquisa");
const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");

// PESQUISA

pesquisa.addEventListener("submit", function (evento) {

    evento.preventDefault();

    alert("Função de pesquisa em desenvolvimento.");

});

// MENU

menuButton.addEventListener("click", function () {

    const aberto = menu.classList.toggle("is-open");

    menuButton.setAttribute(
        "aria-expanded",
        String(aberto)
    );

});