(function () {
    const controllsContainer = document.querySelector('.products-filter');
    const tabList = document.querySelector('.product-tabs__content');

    const { controlls, tabs } = {
        controlls: {
            activeClass: 'products-filter__item--active',
            items: controllsContainer.children
        },
        tabs: {
            activeClass: 'product-tabs__content-item--active',
            items: tabList.children
        }
    };

    controllsContainer.addEventListener('click', e => {
        e.preventDefault();

        const $this = e.target;

        if (!$this.matches('.products-filter__link')) return;

        const target = $this.getAttribute('href');

        removeClassFromCollection(controlls.activeClass, controlls.items);
        removeClassFromCollection(tabs.activeClass, tabs.items);

        $this
            .closest('.products-filter__item')
            .classList.add(controlls.activeClass);

        tabList.querySelector(target).classList.add(tabs.activeClass);
    });
})();