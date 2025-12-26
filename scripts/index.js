const slides = document.querySelectorAll(".slide");
let index = 0;

const step = 250 + 72;

function updateSlider() {
    slides.forEach((s) => {
        s.classList.remove("active");
        s.style.transform = `translateX(${-(index * step)}px)`;
    });

    slides[index].classList.add("active");
}

document.querySelector(".arrow.left").onclick = () => {
    index = Math.max(index - 1, 0);
    updateSlider();
};

document.querySelector(".arrow.right").onclick = () => {
    index = Math.min(index + 1, 5);
    updateSlider();
};

document.querySelector(".arrow.right2").onclick = () => {
    index = Math.min(index + 1, 7);
    updateSlider();
};

updateSlider();



function openPopupById(id) {
  const popup = document.getElementById(id);
  if (!popup) return console.warn('Popup not found:', id);
  popup.style.display = 'flex';
}

document.addEventListener('click', (e) => {
  const popupTrigger = e.target.closest('[data-popup]');

  if (popupTrigger) {
    const id = popupTrigger.dataset.popup;
    openPopupById(id);
    return;
  }

  const slide = e.target.closest('.slide');
  if (slide && slide.dataset.popup) {
    openPopupById(slide.dataset.popup);
    return;
  }
});


const popups = document.querySelectorAll(".popup");

popups.forEach(popup => {
    const closeBtn = popup.querySelector(".close");
    const menuCloseLink = popup.querySelector(".menuButtonCloseMenu");
    const menuCloseLink2 = popup.querySelector(".menuButtonCloseMenu2");
    const menuCloseLink3 = popup.querySelector(".menuButtonCloseMenu3");
    const menuCloseLink4 = popup.querySelector(".menuButtonCloseMenu4");

    if (closeBtn) {
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    if (menuCloseLink) {
        menuCloseLink.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    if (menuCloseLink) {
        menuCloseLink2.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    if (menuCloseLink) {
        menuCloseLink3.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    if (menuCloseLink) {
        menuCloseLink4.addEventListener("click", () => {
            popup.style.display = "none";
        });
    }

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
});


document.querySelector('.dayModeButton').addEventListener('click', () => {
    const theme = document.getElementById('theme');

    if (theme.getAttribute('href') === '/styles/index.css') {
        theme.setAttribute('href', '/styles/index-white.css');
    } else {
        theme.setAttribute('href', '/styles/index.css');
    }
});

document.querySelector('.dayModeButtonMobile').addEventListener('click', () => {
    const theme = document.getElementById('theme');

    if (theme.getAttribute('href') === '/styles/index.css') {
        theme.setAttribute('href', '/styles/index-white.css');
    } else {
        theme.setAttribute('href', '/styles/index.css');
    }
});

window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (!preloader) return;

  preloader.style.opacity = '0';
  preloader.style.pointerEvents = 'none';

  setTimeout(() => {
    preloader.remove();
  }, 300);
});