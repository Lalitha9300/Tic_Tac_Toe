const cells = document.querySelectorAll('[data-cell]');

cells.forEach(cell => {
  cell.addEventListener('click', () => {
    // Handle click event, e.g., mark cell with "X" or "O"
    cell.textContent = 'X';
  });
});
