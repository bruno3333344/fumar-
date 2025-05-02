const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const popup = document.getElementById('popup');
const response = document.getElementById('response');

// Mover el botón "No" cuando el mouse se acerca
noBtn.addEventListener('mouseover', () => {
  const popupRect = popup.getBoundingClientRect();
  const maxX = window.innerWidth - noBtn.offsetWidth;
  const maxY = window.innerHeight - noBtn.offsetHeight;

  const newX = Math.floor(Math.random() * maxX);
  const newY = Math.floor(Math.random() * maxY);

  noBtn.style.position = 'absolute';
  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Mostrar mensaje si elige "Sí"
yesBtn.addEventListener('click', () => {
  popup.style.display = 'none';
  response.classList.remove('hidden');
});
