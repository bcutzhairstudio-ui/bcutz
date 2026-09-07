```javascript
/* =========================================================
   BCUT'Z — MOBIL MENÜ
   ========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navigation = document.getElementById("navigation");


if (menuToggle && navigation) {

    menuToggle.addEventListener("click", function () {

        navigation.classList.toggle("active");

        const isOpen =
            navigation.classList.contains("active");

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

        menuToggle.textContent =
            isOpen ? "✕" : "☰";

    });


    /* Menü bezárása kattintás után */

    const navigationLinks =
        navigation.querySelectorAll("a");


    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navigation.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

            menuToggle.textContent = "☰";

        });

    });

}


/* =========================================================
   GOMBOK / LINKES ANIMÁCIÓ
   ========================================================= */

document.querySelectorAll('a[href^="#"]').forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId =
            this.getAttribute("href");

        if (
            !targetId ||
            targetId === "#"
        ) {
            return;
        }


        const target =
            document.querySelector(targetId);


        if (target) {

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});
```
