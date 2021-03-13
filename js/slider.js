const item = document.querySelectorAll(".item-slider");
const paginations = document.querySelectorAll(".paginations");
const pagi = document.querySelectorAll(".pag");

paginations.forEach((pag) => {
    item.forEach((e) => {
        pag.addEventListener("click", () => {
            pagi.forEach((p) => {
                if (pag.id === p.id) {
                    p.classList.add("active-pagination");
                } else {
                    p.classList.remove("active-pagination");
                }
            });
            if (e.id === pag.id) {
                e.classList.add("active-slider");
            } else {
                e.classList.remove("active-slider");
            }
        });
    });
});