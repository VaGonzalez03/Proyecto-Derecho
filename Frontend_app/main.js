const menuBtn = document.getElementById("menuBtn");
const menuLista = document.getElementById("menuLista");

if (menuBtn && menuLista) {
    menuBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        const abierto = menuLista.classList.toggle("mostrar");
        menuBtn.setAttribute("aria-expanded", abierto);
    });

    document.addEventListener("click", () => {
        menuLista.classList.remove("mostrar");
        menuBtn.setAttribute("aria-expanded", "false");
    });
}