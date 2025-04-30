
const cards = [
  {
    image: "card1.jpg",
    title: "Карточка 1",
    description: "Описание для карточки 1"
  },
  {
    image: "card2.jpg",
    title: "Карточка 2",
    description: "Описание для карточки 2"
  },
  {
    image: "card3.jpg",
    title: "Карточка 3",
    description: "Описание для карточки 3"
  },
  // Добавь больше карточек
];

let currentIndex = 0;

const cardElement = document.getElementById("card");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

function updateCard() {
  const card = cards[currentIndex];
  cardElement.querySelector("img").src = card.image;
  cardElement.querySelector("h2").textContent = card.title;
  cardElement.querySelector("p").textContent = card.description;
}

prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length;
  updateCard();
});

nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length;
  updateCard();
});

// Инициализация первой карточки
updateCard();
