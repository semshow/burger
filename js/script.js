let obj = {
  buttonOpen: '#buttonOpen',
  buttonClose: '#buttonClose',
  menu: '#overlay'

};

let menu = (function (options) {
  let buttonOpen = document.querySelector(options.buttonOpen);
  let buttonClose = document.querySelector(options.buttonClose);
  let menu = document.querySelector(options.menu);
  let body = document.querySelector('body');
  let _toggleMenu = function (e) {
    menu.classList.toggle('hamburger__modal--active');
    body.classList.toggle('body-active-menu');
  }

  let addListeners = function () {
    buttonOpen.addEventListener('click', _toggleMenu);
    let link = document.querySelectorAll('.header__menu-link');
    for(var i=0; i<link.length; i++){
      link[i].addEventListener('click', _toggleMenu)
    }
    // link.addEventListener('click', _toggleMenu);
    buttonClose.addEventListener('click', _toggleMenu);
  }
  return {
    openMenu: addListeners
  }
})(obj);

menu.openMenu();


let sliderDrop = (function (details) {
  let iconButton = document.querySelector('#sliderIcon');
  let _toggleIcon = function (e) {
    iconButton.classList.toggle('slider__icon--active');
  }

  let addIconListener = function() {
    iconButton.addEventListener('mouseenter', _toggleIcon);
    iconButton.addEventListener('mouseleave', _toggleIcon);
  }

  return {
    iconHover: addIconListener
  }
})();

sliderDrop.iconHover();