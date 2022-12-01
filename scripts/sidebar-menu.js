// Изолируем переменные и ф-ии в одном модуле от переменных и ф-й в другом модуле (файле) с помощью самовызывающейся ф-ии IIFE
(function () {
    const openingBtn = document.querySelector('.sidebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sidebar = document.querySelector('.sidebar');

    openingBtn.addEventListener('click', function () {
        sidebar.classList.add('sidebar--opened')
    });

    closingBtn.addEventListener('click', function () {
        sidebar.classList.remove('sidebar--opened');
    });
})();

