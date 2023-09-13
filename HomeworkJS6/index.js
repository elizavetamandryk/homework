const cardsArray = [
  { en: "apple", ru: "яблоко" },
  { en: "banana", ru: "банан" },
  { en: "melon", ru: "дыня" },
  { en: "pineapple", ru: "ананас" },
];

const cardsBox = document.querySelector("#card");

for (let i = 0; i < cardsArray.length; i++) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.textContent = cardsArray.ru;

  card.onclick = () => {
    if (card.textContent === cardsArray[i].ru) {
      card.textContent = cardsArray[i].en;
    } else {
      card.textContent = cardsArray[i].ru;
    }
  };

  cardsBox.append(card);
}
