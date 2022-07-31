const cardEl = document.querySelectorAll(".card");
let card = [...cardEl];

card.forEach((creditCard) => {
  creditCard.addEventListener("click", function () {
    creditCard.classList.toggle("flip-card");
  });
});
