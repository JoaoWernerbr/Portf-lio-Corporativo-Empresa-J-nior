window.addEventListener("load", () => {

    const titulo = document.getElementById("titulo");
    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");
    const btn = document.getElementById("btn");

    const texto = "Bem-vindo ao Futuro da Tecnologia";

    let i = 0;
    titulo.textContent = "";

    function escrever() {
        if (i < texto.length) {
            titulo.textContent += texto.charAt(i);
            i++;
            setTimeout(escrever, 80);
        } else {
            mostrarConteudo();
        }
    }

    function mostrarConteudo() {
        setTimeout(() => p1.classList.add("show"), 300);
        setTimeout(() => p2.classList.add("show"), 800);
        setTimeout(() => btn.classList.add("show"), 1300);
    }

    escrever();
});