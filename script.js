const splashScreen = document.querySelector('.splash');

splashScreen.addEventListener('click', () => {
  splashScreen.style.opacity = 0;
  setTimeout(() => {
    splashScreen.classList.toggle('hidden');
  }, 610);
});
