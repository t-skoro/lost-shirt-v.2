(function () {
    const switcherContaiter = document.querySelector('.product-colors');
    const displayPicture = document.querySelector('.product-showroom__pic-image');

    switcherContaiter.addEventListener('change', e => {
        const $this = e.target;
        if (!$this.matches('.product-colors__radio')) return;

        const imgPath = $this.getAttribute('data-imgpath');
        displayPicture.src = imgPath;
    });

})();