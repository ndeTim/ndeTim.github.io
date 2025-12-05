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

updateSlider();



function openPopupById(id) {
  const popup = document.getElementById(id);
  if (!popup) return console.warn('Popup not found:', id);
  popup.style.display = 'flex';
}

// Делегируем клики по документу (ловит и картинки, и дивы внутри карточки)
document.addEventListener('click', (e) => {
  // если кликнули по элементу или его родителю, у которого есть data-popup
  const popupTrigger = e.target.closest('[data-popup]');

  if (popupTrigger) {
    const id = popupTrigger.dataset.popup;
    openPopupById(id);
    return;
  }

  // (Опционально) если хочешь, чтобы конкретно клики по .slide тоже работали без data-popup:
  const slide = e.target.closest('.slide');
  if (slide && slide.dataset.popup) {
    openPopupById(slide.dataset.popup);
    return;
  }
});

// Закрытие всех попапов
const popups = document.querySelectorAll(".popup");
popups.forEach(popup => {
    const closeBtn = popup.querySelector(".close","close2");
    closeBtn.addEventListener("click", () => {
        popup.style.display = "none";
    });

    popup.addEventListener("click", (e) => {
        if (e.target === popup) popup.style.display = "none";
    });
});