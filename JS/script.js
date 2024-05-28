$(function () {
  $(".slider__gallery").slick();
});
const menuBtn = document.querySelector(".menu__btn");
const menuClose = document.querySelector(".menu__close");
const menuList = document.querySelector(".menu__item");

menuBtn.addEventListener("click", () => {
  menuList.classList.toggle("menu__item-open");
});
menuClose.addEventListener("click", () => {
  menuList.classList.remove("menu__item-open");
});

//popup логин
const openPopup = document.querySelector("#popup-open");
const closePopup = document.querySelector("#close");
const popUp = document.querySelector("#popup");
const openPopup1 = document.querySelector("#popup-open1");
const openPopup2 = document.querySelector("#popup-open2");

openPopup.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("activ");
});

closePopup.addEventListener("click", function () {
  popUp.classList.remove("activ");
});

const popupClose = document.querySelector("#close");
popupClose.addEventListener("click", function () {
  popUp.classList.add("remove");
});

openPopup1.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("activ");
});
openPopup2.addEventListener("click", function (e) {
  e.preventDefault();
  popUp.classList.add("activ");
});
