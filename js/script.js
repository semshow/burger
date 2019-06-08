
//***********************/HAMBURGER MENU**********************
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
    let link = document.querySelectorAll('#link');
    for (var i = 0; i < link.length; i++) {
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
//***************************SLIDER */

let sliderDrop = (function (details) {
  let iconButton = document.querySelector('#sliderIcon');
  let _toggleIcon = function (e) {
    iconButton.classList.toggle('slider__icon--active');
  }

  let addIconListener = function () {
    iconButton.addEventListener('mouseenter', _toggleIcon);
    iconButton.addEventListener('mouseleave', _toggleIcon);
  }

  return {
    iconHover: addIconListener
  }
})();

sliderDrop.iconHover();

//********************аккордеон костыль************

let teamAccordeon = () => {
  let teamList = document.querySelector('.team__accordeon');
  teamList.addEventListener('click', e => {
    e.preventDefault();
    let target = e.target;
    const accordeonItem = target.closest('.accordeon__item');
    const accordeonItems = document.querySelectorAll('.accordeon__item');
    if (target.className === 'accordeon__link') {
      if (!accordeonItem.classList.contains('accordeon__item--active')) {
        for (let i = 0; i < accordeonItems.length; i++) {
          accordeonItems[i].classList.remove('accordeon__item--active');
        }
        accordeonItem.classList.add('accordeon__item--active');
      }
      else {
        accordeonItem.classList.remove('accordeon__item--active');
      }
    }
  });
};

teamAccordeon();


//***************************аккордеон норм *****************

// let teamAccordeon = () => {
//   let accordeonLink = document.querySelectorAll('.accordeon__link');
//   accordeonLink.forEach(function (personName) {
//     personName.addEventListener('click', function (e) {
//       e.preventDefault();
//       let activePerson = document.querySelector('.accordeon__item.accordeon__item--active');
//       if (activePerson) {
//         let accordeonContent = activePerson.querySelector('.accordeon__item-description');
//         accordeonContent.style.height = "0px";
//         activePerson.classList.remove('accordeon__item--active');
//       }

//       if (!activePerson || activePerson.querySelector('accordeon__link') !== e.target) {
//         let currentPerson = e.target.closest('.accordeon__item');
//         currentPerson.classList.add('accordeon__item--active');
//         let currentPersonInfo = currentPerson.querySelector('.accordeon__item-description');
//         currentPersonInfo.style.height = currentPersonInfo.scrollHeight + 'px';
//       }
//     })
//   })
// }

// teamAccordeon();


//////Аккордеон Мелюков

// const element = document.querySelector(".team__accordeon");

// createAccordeon(element);

// function createAccordeon(element) {
//   let lastActive;

//   // element.classList.add("accordeon");
//   element.addEventListener("click", function (e) {
//     e.preventDefault();
//     if (e.target.classList.contains("accordeon__link")) {
//       if (lastActive) {
//         lastActive.classList.remove("accordeon__item--active");
//       }

//       lastActive = e.target.parentNode;
//       lastActive.classList.add("accordeon__item--active");
//     }
//   });
// }


///////////////////////Меню аккордеон

let menuAccordeon = () => {

  let calculateWidth = () => {
    let windowWidth = window.innerWidth;
    let links = document.querySelectorAll('.menu__accordeon-top');
    let linksWidth = parseFloat(getComputedStyle(links[0]).width);
    let reqWidth = windowWidth - linksWidth * links.length;
    return reqWidth > 550 ? 550 : reqWidth;
  };

  let menuAccordeonLink = document.querySelectorAll('.menu__accordeon-top');
  menuAccordeonLink.forEach(function (personName) {
    personName.addEventListener('click', function (e) {
      e.preventDefault();
      let activePerson = document.querySelector('.menu__accordeon-item.menu__accordeon-item--active');
      if (activePerson) {
        let menuAccordeonItem = activePerson.querySelector('.menu__accordeon-hide');
        menuAccordeonItem.style.width = "0px";
        activePerson.classList.remove('menu__accordeon-item--active');
      }

      if (!activePerson || activePerson.querySelector('.menu__accordeon-top') !== this) {
        let currentPerson = this.closest('.menu__accordeon-item');
        currentPerson.classList.add('menu__accordeon-item--active');

        let currentPersonInfo = currentPerson.querySelector('.menu__accordeon-hide');
        currentPersonInfo.style.width = calculateWidth() + 'px';
      }

    })
  })
}

menuAccordeon();


///////////// slider

// const slide = (function () {
//   const left = document.querySelector('.slider__left');
//   const right = document.querySelector('.slider__right');
//   const slider = document.querySelector('.slider__list');
//   const computed = getComputedStyle(slider);
//   let sliderWidth = parseInt(computed.width);

//   var sliderItemCounter = slider.children.length;

//   let moveSlide = function (direction) {
//     direction.addEventListener('click', function (e) {
//       e.preventDefault();
//       let currentRight = parseInt(computed.right);
//       console.log(currentRight);

//       if (currentRight < (sliderItemCounter - 1) * sliderWidth && direction == right) {
//         slider.style.right = currentRight + sliderWidth + "px";
//         console.log(slider.style.right);
//       }

//       if (currentRight > 0 && direction == left) {
//         slider.style.right = currentRight - sliderWidth + "px";
//       }
//     });
//   }

//   let addListeners = function () {
//     moveSlide(right);
//     moveSlide(left);
//   }

//   return { init: addListeners }
// })();

// slide.init();


///********************SLIDER JQUERY */
$(function () {

  var moveSlide = function (container, slideNum) {
    items = container.find('.slider__item'),
      activeSlide = items.filter('.slider__active'),
      reqItem = items.eq(slideNum),
      reqIndex = reqItem.index(),
      list = container.find('.slider__list'),
      duration = 500;

    if (reqItem.length) {
      list.animate({
        'left': -reqIndex * 100 + '%'
      }, duration, function () {
        activeSlide.removeClass('slider__active');
        reqItem.addClass('slider__active');
      });
    }
  }

  $('.slider__arrow').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
      container = $('.slider__wrap'),
      items = container.find('.slider__item'),
      activeItem = items.filter('.slider__active'),
      nextItem = activeItem.next(),
      prevItem = activeItem.prev();

    if ($this.hasClass('slider__right')) {
      if (nextItem.length) {
        moveSlide(container, nextItem.index());
      } else {
        moveSlide(container, items.first().index());
      }

    }
    if ($this.hasClass('slider__left')) {
      if (prevItem.length) {
        moveSlide(container, prevItem.index());
      } else {
        moveSlide(container, items.last().index());
      }
    }
  });
});


//////////////********AJAX ********************** 
var ajaxForm = function (form) {
  let formData = new FormData();
  formData.append("name", form.elements.name.value);
  formData.append("phone", form.elements.phone.value);
  formData.append("comment", form.elements.comments.value);
  formData.append("to", "semshow@mail.ru");


  let url = "https://webdev-api.loftschool.com/sendmail";

  const xhr = new XMLHttpRequest();
  xhr.responseType = "json";
  xhr.open("POST", url);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
  xhr.send(formData);

  return xhr;
}

//////*****************OPEN FORM */

var submitForm = function (e) {
  e.preventDefault();
  var form = e.target;
  let request = ajaxForm(form);
  request.addEventListener('load', () => {
    if (request.status >= 400) {
      let content = 'Ошибка соединения с сервером, попробуйте позже';
      overlay.open('.modal__open', `${content}. Ошибка ${request.status}`);
    }
    else {
      let content = request.response.message;
      overlay.open('.modal__open', content);
    }
  });
}

let myForm = document.querySelector('.order__form');
myForm.addEventListener('submit', submitForm);

///////******************OPEN REVIEW */

let reviewOpen = function () {
  let button = document.querySelector('.reviews__item-button');
  let container = document.querySelector('.reviews__list');

  container.addEventListener('click', function (e) {
    e.preventDefault();
    let target = e.target;
    if (target.className == button.className) {
      let content = document.querySelector('#overlay1').innerHTML;
      overlay.open('.modal__open', content);
    }
  });
}

reviewOpen();

//**********************MODAL WINDOW OPEN AND CLOSE************** */

const overlay = (function () {
  let body = document.querySelector('body');
  let link = document.querySelector('.btn--close')

  let openOverlay = function (modalId, content) {
    let overlay = document.querySelector(modalId);
    let innerOverlay = document.querySelector('.order__modal-text');
    if (content) {
      innerOverlay.innerHTML = content;
    }

    overlay.classList.add('modal__open--active');
    body.classList.add('body--locked');

    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeOverlay(modalId);
    })

    overlay.addEventListener('click', (e) => {
      e.preventDefault();
      if (e.target === overlay) {
        closeOverlay(modalId);
      }
    })

    document.addEventListener('keydown', function (e) {
      if (e.keyCode == 27) closeOverlay(modalId);
    });
  }

  let closeOverlay = function (modalId) {
    let overlay = document.querySelector(modalId);
    overlay.classList.remove('modal__open--active');
    body.classList.remove('body--locked');
  }

  return {
    open: openOverlay,
    close: closeOverlay
  }
})();


//*****************ONE PAGE SCROLL */


// var md = new MobileDetect(window.navigator.userAgent),
// isMobile = md.mobile();

// let OnePageScroll = function () {
//   const sections = $('.section');
//   const visible = $('#content');
//   let inscroll = false;

//   let performTransition = function (sectionEq) {

//     if (!inscroll) {
//       inscroll = true;
//       let position = sectionEq * -100 + '%';

//       sections.eq(sectionEq).addClass('section__active').siblings().removeClass('section__active');

//       visible.css({
//         transform: `translateY(${position}`,
//         "-webkit-transform": `translateY(${position})`
//       });

//       setTimeout(function () {
//         inscroll = false;
//         $(".scroller__link")
//           .eq(sectionEq)
//           .addClass("scroller__link--active")
//           .siblings()
//           .removeClass("scroller__link--active");
//       }, 1000);
//     }
//   }

//   let defineSections = function (sectionsList) {
//     let activeSection = sectionsList.filter(".section__active")
//     return {
//       activeSection: activeSection,
//       nextSection: activeSection.next(),
//       prevSection: activeSection.prev()
//     };
//   };

//   let scrollToSection = function (direction) {
//     let section = defineSections(sections);
//     if (direction === 'up' && section.nextSection.length) {
//       performTransition(section.nextSection.index());
//     }

//     if (direction === 'down' && section.prevSection.length) {
//       performTransition(section.prevSection.index());
//     }
//   };


//   $(".wrapper").on({
//     wheel: function (e) {
//       const deltaY = e.originalEvent.deltaY;
//       const direction = deltaY > 0 ? "up" : "down";
//       scrollToSection(direction);
//     }
//   })

//   $("[data-scroll-to]").on('click', e => {
//     e.preventDefault();
//     performTransition(parseInt($(e.target).data("scroll-to")));
//   })
// }

// OnePageScroll();

//*******************YANDEX MAP****************** */

ymaps.ready(init);

var placemarks = [
  {
    latitude: 59.97,
    longitude: 30.31,
    hitContent: 'Санкт-Петербург, Ул. Литераторов, 18',
    balloonContent: 'Санкт-Петербург, Ул. Литераторов, 18'

  },
  {
    latitude: 59.93,
    longitude: 30.45,
    hitContent: 'Виленский пер., 15, Санкт-Петербург, Россия',
    balloonContent: 'Виленский пер., 15, Санкт-Петербург, Россия'
  },
  {
    latitude: 59.91,
    longitude: 30.34,
    hitContent: 'Лиговский просп., 174, Санкт-Петербург, Россия',
    balloonContent: 'Лиговский просп., 174, Санкт-Петербург, Россия'
  },
  {
    latitude: 59.93,
    longitude: 30.24,
    hitContent: 'Среднегаванский просп., 13, Санкт-Петербург, Россия',
    balloonContent: 'Среднегаванский просп., 13, Санкт-Петербург, Россия'
  }
];
function init() {
  var map = new ymaps.Map('map', {
    center: [59.94, 30.32],
    zoom: 12,
    controls: ['zoomControl'],
    behaviors: ['drag']
  });

  placemarks.forEach(function (obj) {
    var placemark = new ymaps.Placemark([obj.latitude, obj.longitude], {
      hitContent: obj.hitContent,
      balloonContent: obj.balloonContent
    },
      {
        iconLayout: 'default#image',
        iconImageHref: '../img/icons/map-marker.png',
        iconImageSize: [46, 57],
        iconImageOffset: [-23, -57]
      });
    map.geoObjects.add(placemark);
  });

}

////*************************SABANTSEV PAGE SCROLL******** */


const sections = $('.section');
const display = $('.content');
let inscroll = false;
const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();
const switchActiveClassSideMenu = menuItemIndex => {
  $(".scroller__item")
    .eq(menuItemIndex)
    .addClass("scroller__item--active")
    .siblings()
    .removeClass("scroller__item--active")
}

let performTransition = function (sectionEq) {

  if (inscroll) return
  inscroll = true;

  const position = `${sectionEq * -100}%`;
  sections
    .eq(sectionEq)
    .addClass('section__active')
    .siblings()
    .removeClass('section__active');
  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(() => {
    switchActiveClassSideMenu(sectionEq);
    inscroll = false
  }, 1300); //transition duration (1000) + transition innertion delay (300)

};

let scrollToSection = function (direction) {
  const activeSection = sections.filter('.section__active');
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === 'next' && nextSection.length) {
    performTransition(nextSection.index());
  }
  if (direction === 'prev' && prevSection.length) {
    performTransition(prevSection.index());
  }
}


$('.wrapper').on({
  wheel: e => {
    const deltaY = e.originalEvent.deltaY;
    const direction = deltaY > 0 ? "next" : "prev";

    scrollToSection(direction);
  }, touchmove: e=> e.preventDefault()
})


$(document).on("keydown", e => {
  switch (e.keyCode) {
    case 40: scrollToSection('next');
      break;
    case 38: scrollToSection('prev');
      break;
  }
})

$("[data-scroll-to]").on('click', e => {
  e.preventDefault();

  const target = $(e.currentTarget).attr('data-scroll-to');
  performTransition(target);
})

if (isMobile) {
  $(window).swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
      const nextOrPrev = direction === 'up' ? 'next' : 'prev';
      scrollToSection(nextOrPrev);
    }
  })
}





