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

const heading = document.querySelector('h1');

heading.addEventListener('click', () => {
  heading.classList.toggle('clicked');
});

const projects = ['Music', 'Photo', 'Thoughts', 'Blog'];
const list = document.getElementById('projectList');

if (list) {
  // Only run this if we're on the page that has #projectList
  projects.forEach(project => {
    const li = document.createElement('li');
    li.textContent = project;
    list.appendChild(li);
  });
}

const user = {
    name: 'Justin',
    isDad: false
  };
  
  if (user.isDad) {
    document.body.classList.add('dad-mode');
  }

  fetch('./nav.html') // add ./ to explicitly say “in the current folder”
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-placeholder').innerHTML = data;
  });