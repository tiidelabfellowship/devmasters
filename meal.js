const filterButtons = document.querySelectorAll('.filter-button');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Add 'active' class to the clicked button and remove it from others
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
    });
    button.classList.add('active');

    // Show/hide cards based on the selected filter
    cards.forEach(card => {
      card.style.display = 'none'; // Hide all cards

      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block'; // Show matching cards
      }
    });
  });
});