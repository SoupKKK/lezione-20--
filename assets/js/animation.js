//animazione header
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        document.querySelector('header').classList.add('scrolled');
        document.querySelector('.mainButton').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
        document.querySelector('.mainButton').classList.remove('scrolled');
    }
});


//animazione M letters
const ms = document.querySelectorAll('svg text');

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function toggleMs() {
  ms.forEach((m) => {
    const randomNum = getRandomInt(10);

    m.style.transition = 'opacity 0.5s ease-in-out';

    if (randomNum >= 5) {
      m.style.opacity = '0';
    } else {
      m.style.opacity = '1';
    }
  });
}

setInterval(toggleMs, 2000);
