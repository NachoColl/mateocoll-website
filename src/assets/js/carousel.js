(function() {
  const carousel = document.getElementById('projectsCarousel');
  const prevBtn = document.getElementById('carouselPrev');
  const nextBtn = document.getElementById('carouselNext');

  if (!carousel || !prevBtn || !nextBtn) return;

  const scrollAmount = 520;

  function updateArrows() {
    prevBtn.disabled = carousel.scrollLeft <= 0;
    nextBtn.disabled = carousel.scrollLeft >= carousel.scrollWidth - carousel.clientWidth - 10;
  }

  prevBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  });

  carousel.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);

  // Mouse wheel horizontal scroll
  carousel.addEventListener('wheel', (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      carousel.scrollBy({ left: e.deltaY * 3, behavior: 'smooth' });
    }
  }, { passive: false });

  updateArrows();
})();
