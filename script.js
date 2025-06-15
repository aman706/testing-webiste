let brandIndex = 0;

function slideBrands(direction) {
  const cards = document.querySelectorAll('.brand-card');
  const totalCards = cards.length;
  const cardsPerView = 3;
  const maxIndex = Math.ceil(totalCards / cardsPerView) - 1;

  brandIndex += direction;

  if (brandIndex < 0) brandIndex = 0;
  if (brandIndex > maxIndex) brandIndex = maxIndex;

  const carousel = document.querySelector('.brands-carousel');
  const shiftPercent = brandIndex * (100 / (totalCards / cardsPerView));

  carousel.style.transform = `translateX(-${shiftPercent}%)`;
}
