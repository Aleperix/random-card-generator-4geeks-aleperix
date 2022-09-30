/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["&#9824;", "&#9829;", "&#9827;", "&#9830;"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, "Q", "K", "J"];

let card = document.querySelector(".card");
let cardWidth = document.querySelector("#cardWidth");
let cardHeight = document.querySelector("#cardHeight");
let toggleCountdown = document.querySelector("#toggleCountdown");
let myTimer;
let timeleft = 10;

window.onload = function() {
  cardWidth.value = card.style.width.replace("rem", "");
  cardHeight.value = card.style.height.replace("rem", "");
  newCard();
};

document.querySelector("#changeCard").addEventListener("click", newCard);
toggleCountdown.addEventListener("click", function() {
  if (toggleCountdown.innerText == "Desactivar temporizador") {
    toggleCountdown.innerText = "Activar temporizador";
    document.querySelector("#countdown").parentNode.classList.toggle("d-none");
    window.clearInterval(myTimer);
  } else {
    console.log("Estoy en el else");
    timeleft = 10;
    myTimer = window.setInterval(countdown, 1000);
    document.querySelector("#countdown").parentNode.classList.toggle("d-none");
    toggleCountdown.innerText = "Desactivar temporizador";
    countdown();
  }
});
cardWidth.addEventListener("change", function() {
  card.style.width = cardWidth.value + "rem";
});
cardHeight.addEventListener("change", function() {
  card.style.height = cardHeight.value + "rem";
});

function newCard() {
  let cardNumber = document.querySelector("#cardNumber h1");
  let cardSuitTop = document.querySelector("#cardSuitTop h1");
  let cardSuitBottom = document.querySelector("#cardSuitBottom h1");
  cardNumber.innerHTML = numbers[Math.floor(Math.random() * numbers.length)];
  cardSuitTop.innerHTML = suits[Math.floor(Math.random() * suits.length)];
  cardSuitBottom.innerHTML = cardSuitTop.innerHTML;
  let random_boolean = Math.random() < 0.5;
  if (
    cardSuitTop.classList.contains("text-danger") &&
    cardSuitBottom.classList.contains("text-danger")
  ) {
    cardSuitTop.classList.remove("text-danger");
    cardSuitBottom.classList.remove("text-danger");
  }
  if (random_boolean) {
    cardSuitTop.classList.add("text-danger");
    cardSuitBottom.classList.add("text-danger");
  }
}

function countdown() {
  if (timeleft <= 0) {
    newCard();
    document.querySelector("#countdown").innerHTML = "Cambiada!";
    timeleft = 11;
  } else {
    document.querySelector("#countdown").innerHTML =
      "Faltan <strong> " + timeleft + " </strong> segundos";
  }
  timeleft -= 1;
}
