
document.addEventListener("DOMContentLoaded", function () {

    const products = document.querySelectorAll(".cart-item");

    const summary = document.getElementById("cart-summary");

    const subtotalElement =
        document.getElementById("summary-subtotal");

    const totalElement =
        document.getElementById("summary-total");


    // FORMATA O VALOR EM REAL BRASILEIRO

    function formatCurrency(value) {

        return value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        });

    }


    // ATUALIZA O RESUMO

    function updateSummary() {

        const selectedRadio =
            document.querySelector(".product-check:checked");

        if (!selectedRadio) {

            summary.hidden = true;

            return;

        }

        const product =
            selectedRadio.closest(".cart-item");

        const price =
            Number(product.dataset.price);

        summary.hidden = false;

        subtotalElement.textContent =
            formatCurrency(price);

        totalElement.textContent =
            formatCurrency(price);

    }


    // EVENTOS DOS PRODUTOS

    products.forEach(function (product) {

        const radio =
            product.querySelector(".product-check");

        const removeButton =
            product.querySelector(".cart-item__remove");


        // SELECIONA O PRODUTO AO CLICAR NO CARTÃO

        product.addEventListener("click", function (event) {

            if (
                event.target.closest("input") ||
                event.target.closest("button") ||
                event.target.closest("a")
            ) {
                return;
            }

            radio.checked = true;

            updateSummary();

        });


        // ATUALIZA AO SELECIONAR O RADIO

        radio.addEventListener("change", updateSummary);


        // REMOVE O PRODUTO

        removeButton.addEventListener("click", function () {

            product.remove();

            updateSummary();

        });

    });


    // INICIALIZA O RESUMO

    updateSummary();


    // MENU DO CABEÇALHO

    const menuButton =
        document.querySelector(".menu-toggle");

    const siteMenu =
        document.querySelector(".site-menu");


    if (menuButton && siteMenu) {

        menuButton.addEventListener("click", function () {

            const isOpen =
                siteMenu.classList.toggle("is-open");

            menuButton.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });

    }

});