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

projects.forEach(project => {
  console.log(`Project: ${project}`);
});

const list = document.getElementById('projectList');

projects.forEach(project => {
  const li = document.createElement('li');
  li.textContent = project;
  list.appendChild(li);
});

const user = {
    name: 'Justin',
    isDad: false
  };
  
  if (user.isDad) {
    document.body.classList.add('dad-mode');
  }

  // Load shared navigation into the #nav-placeholder div
fetch('nav.html') // grab the nav file
.then(response => response.text()) // convert it to plain text
.then(data => {
  document.getElementById('nav-placeholder').innerHTML = data; // insert into page
});