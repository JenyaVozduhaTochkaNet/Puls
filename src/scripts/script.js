const slider = tns({
    container: '.slider__carousel',
    items: 1,
    slideBy: 'page',
    controls: false,
    nav: true,
    navPosition: 'bottom',
    speed: 1000,
});


document.querySelector(".slider__left").addEventListener('click', () => {
    slider.goTo('prev');
});

document.querySelector(".slider__right").addEventListener('click', () => {
    slider.goTo('next');
});

const links = document.querySelectorAll('.cards__link'),
      views =  document.querySelectorAll('.cards__view'),
      hides =  document.querySelectorAll('.cards__hidden'),
      backLinks = document.querySelectorAll('.cards__back'),
      btn = document.querySelectorAll('.tabs__item'),
      tabs = document.querySelectorAll('.cards__tab');

links.forEach((item, id) => {
    item.setAttribute('data-id', id);
    item.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.target.getAttribute("data-id");
            views[id].classList.toggle('cards__view-active');
            hides[id].classList.toggle('cards__hidden-active');
        });
});

backLinks.forEach((item, id) => {
    item.setAttribute('data-id', id);
    item.addEventListener('click', (e) => {
            e.preventDefault();
            const id = e.target.getAttribute("data-id");
            views[id].classList.toggle('cards__view-active');
            hides[id].classList.toggle('cards__hidden-active');
        });
});

btn.forEach((item, id) => {
    item.addEventListener('click', () => {
        tabs.forEach(item => {
            item.classList.remove('cards__tab-active')
        });
        btn.forEach(item => {
            item.classList.remove('tabs__item-active')
        });
        tabs[id].classList.add('cards__tab-active');
        item.classList.add('tabs__item-active');
    })
});

