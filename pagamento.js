
document.addEventListener("DOMContentLoaded", () => {

    const formulario = document.querySelector("#form-pagamento");
    const mensagem = document.querySelector("#mensagem");

    const menuButton = document.querySelector(".menu-toggle");
    const siteMenu = document.querySelector(".site-menu");


    // FORMULÁRIO DE PAGAMENTO

    formulario?.addEventListener("submit", (evento) => {

        evento.preventDefault();

        const dados = new FormData(formulario);

        const endereco = dados.get("endereco");
        const cep = dados.get("cep");
        const pagamento = dados.get("pagamento");

        const nomePagamento =
            pagamento === "pix" ? "PIX" : "Cartão de Crédito";

        mensagem.textContent =
            `Pedido simulado! Entrega: ${endereco}, CEP: ${cep}. Pagamento: ${nomePagamento}.`;

        mensagem.hidden = false;

    });


    // MENU DO CABEÇALHO

    menuButton?.addEventListener("click", () => {

        const aberto = siteMenu.classList.toggle("is-open");

        menuButton.setAttribute(
            "aria-expanded",
            String(aberto)
        );

    });

});