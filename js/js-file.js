// --------------- map ------------------
function mapInit() {
  var map = new ymaps.Map(document.querySelector('.map'), {
    center: [59.939246, 30.330042],
    zoom: 16,
    controls: ['zoomControl'],
  });

  var placemark = new ymaps.Placemark([59.938631, 30.323055], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/pin.svg',
    iconImageSize: [80, 140],
    iconImageOffset: [-40, -140],
  });

  map.geoObjects.add(placemark);
}

ymaps.ready(mapInit);

// --------------- model-feedback ------------------
var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".modal");
var close = document.querySelector(".feedback-close");
var form = popup.querySelector("form");
var nameUser = popup.querySelector("[name=feedback-name]");
var mailUser = popup.querySelector("[name=feedback-mail]");
var text = popup.querySelector("[name=feedback-comment]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("nameUser");
} catch (err) {
  isStorageSupport = false
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    nameUser.value = storage;
    mailUser.focus();
  } else {
    nameUser.focus();
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

form.addEventListener("submit", function (evt) {
  if (!nameUser.value || !mailUser.value || !text.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("nameUser", name.value);
    }
  }
});

window.addEventListener("keydown",function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});
