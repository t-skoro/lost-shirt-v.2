// 1-й вариант
// (function () {
//     const elem = document.querySelector('.products__list');
//     const iso = new Isotope(elem, {
//         itemSelector: '.products__item',
//         filter: '.popular'
//     });

//     const controlls = document.querySelectorAll('.products-filter__link');
//     const activeClass = 'products-filter__item--active';

//     controlls.forEach(function (control) {
//         control.addEventListener('click', function (e) {
//             e.preventDefault();
//             const filterName = control.getAttribute('data-filter');

//             controlls.forEach(function (link) {
//                 link.closest('.products-filter__item').classList.remove(activeClass);
//             });
//             control.closest('.products-filter__item').classList.add(activeClass);
//             iso.arrange({
//                 filter: `.${filterName}`
//             });
//         });

//     });
// })();

//2-й вариант
(function () {
    const elem = document.querySelector(".products__list");
    const iso = new Isotope(elem, {
        itemSelector: ".products__item",
        filter: ".popular"
    });

    const controlsContainer = document.querySelector(".products-filter");

    controlsContainer.addEventListener("click", e => {
        e.preventDefault();
        const $this = e.target;

        if (!$this.matches(".products-filter__link")) return;

        const items = $this.closest(".products-filter").children;
        const filterName = $this.getAttribute("data-filter");

        removeClassFromCollection("products-filter__item--active", items);

        $this
            .closest(".products-filter__item")
            .classList.add("products-filter__item--active");

        iso.arrange({ filter: `.${filterName}` });
    });

})();