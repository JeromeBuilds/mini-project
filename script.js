const footerLinks = document.querySelectorAll(".footer__link");

footerLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
        const targetId = link.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        event.preventDefault();

        const target = document.querySelector(targetId);

        window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
        });
    });
});