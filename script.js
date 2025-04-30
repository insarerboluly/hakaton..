// JavaScript для интерактивных карточек
const cards = document.querySelectorAll('.flashcard');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('flip');
  });
});
