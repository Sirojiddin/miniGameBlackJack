"use strict";

let cardQueue = 0;
let cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
let cardSuit = ["♠️", "♣️", "♥️", "♦️"];

document.addEventListener("click", function () {
  // Card Suit and values

  let selectedCard = [];

  let randomizer = function (arr) {
    let randomizer = Math.floor(Math.random() * arr.length);
    return arr[randomizer];
  };
  let a = randomizer(cardValue);
  let b = randomizer(cardSuit);
  console.log(b + a);
  console.log(cardQueue);
  if (cardQueue > 4) {
    cardQueue = 0;
    document.querySelector(`#card0`).textContent = " ";
    document.querySelector(`#card1`).textContent = " ";
    document.querySelector(`#card2`).textContent = " ";
    document.querySelector(`#card3`).textContent = " ";
    document.querySelector(`#card4`).textContent = " ";
    document.querySelector("#suz").textContent = "Again";
  } else {
    // document.querySelector(`#card${cardQueue}`).textContent = b + a;
    document.querySelector(`#card${cardQueue}`).style.background = `url(cards/${
      a + b
    }.jpg)`;
    document.querySelector(`#card${cardQueue}`).style.background = "auto";
    document.querySelector("#suz").textContent = "Card";
    cardQueue++;
  }

  //   let valueRandomizer = Math.floor(Math.random() * cardValue.length);
  //   let suitRandomizer = Math.floor(Math.random() * cardSuit.length);

  //   selectedCard.unshift(cardValue[valueRandomizer], cardSuit[suitRandomizer]);
  //   document.querySelector(`#card${i + 1}`).textContent = selectedCard.join("");
  //   console.log(selectedCard);

  //   for (let i = 0; i < 5; i++) {
  //     let selectedCard = [];
  //     let valueRandomizer = Math.floor(Math.random() * cardValue.length);
  //     let suitRandomizer = Math.floor(Math.random() * cardSuit.length);
  //     selectedCard.unshift(cardValue[valueRandomizer], cardSuit[suitRandomizer]);
  //     document.querySelector(`#card${i + 1}`).textContent = selectedCard.join("");
  //     console.log(selectedCard);
  //   }
});
