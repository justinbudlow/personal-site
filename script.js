const toggleButton = document.getElementById('darkModeToggle');
const body = document.body;

// Load preference on page load
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark-mode');
}

// Handle toggle
toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  // Save the new preference
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});