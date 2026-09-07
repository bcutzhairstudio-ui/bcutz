/* =========================================================
   BCUT'Z — MOBIL MENÜ
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");

if (menuToggle && navigation) {

    function closeMenu() {
        navigation.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    }

    function openMenu() {
        navigation.classList.add("active");
        menuToggle.setAttribute("aria-expanded", "true");
        menuToggle.textContent = "✕";
    }

    menuToggle.addEventListener("click", function () {
        if (navigation.classList.contains("active")) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    navigation.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Escape") {
            closeMenu();
        }
    });

    window.addEventListener("resize", function () {
        if (window.innerWidth > 700) {
            closeMenu();
        }
    });
}

/* =========================================================
   BELSŐ LINKES GÖRGETÉS
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
