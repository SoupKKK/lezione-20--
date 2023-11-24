
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        document.querySelector('header').classList.add('scrolled');
        document.querySelector('.mainButton').classList.add('scrolled');
    } else {
        document.querySelector('header').classList.remove('scrolled');
        document.querySelector('.mainButton').classList.remove('scrolled');
    }
});

const ms = document.querySelectorAll('svg text');

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function toggleMs() {
    ms.forEach((m) => {
      const randomNum = getRandomInt(10);

      if (randomNum >= 5) {
        m.setAttribute('opacity', '0');
      } else {
        m.setAttribute('opacity', '1');
      }
    });
  }

  setInterval(toggleMs, 1000);