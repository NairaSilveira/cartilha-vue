// Destaca no menu o capítulo que está sendo visualizado

const secoes = document.querySelectorAll(".content section");
const linksMenu = document.querySelectorAll(".sidebar a");

window.addEventListener("scroll", () => {

    let secaoAtual = "";

    secoes.forEach(secao => {

        const distancia =
            secao.getBoundingClientRect().top;

        if (distancia <= 150) {
            secaoAtual = secao.getAttribute("id");
        }

    });

    linksMenu.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + secaoAtual) {
            link.classList.add("active");
        }

    });

});

