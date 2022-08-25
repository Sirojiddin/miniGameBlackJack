"use strict";

// let colorPickArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

document.addEventListener("click", function () {
  // Card Suit and values
  let cardValue = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  let cardSuit = ["♠️", "♣️", "♥️", "♦️"];
  for (let i = 0; i < 5; i++) {
    let selectedCard = [];
    let valueRandomizer = Math.floor(Math.random() * cardValue.length);
    let suitRandomizer = Math.floor(Math.random() * cardSuit.length);
    selectedCard.unshift(cardValue[valueRandomizer], cardSuit[suitRandomizer]);
    document.querySelector(`#card${i + 1}`).textContent = selectedCard.join("");
    console.log(selectedCard);
  }
});
