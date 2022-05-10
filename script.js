let slider = document.querySelector(".slider");
let slides = document.querySelectorAll(".slide");
let prevButton = document.querySelector(".prevButton");
let nextButton = document.querySelector(".nextButton");
let slideCount = slides.length;
let activeSlideIndex = 0;
let navigation = document.querySelector(".navigation");

//Show the first slide on site load
slides[activeSlideIndex].classList.add("active");

//creat navigation bullets
for (let i = 0; i < slideCount; i++) {
  let bullet = `<input type="radio" class="bullet" name="nav" data-id ${i}/>`;
  navigation.innerHTML += bullet;
}

let bullets = document.querySelectorAll(".bullet");

function resetSlides() {
  slides.forEach((slide) => slide.classList.remove("active"));
}

nextButton.addEventListener("click", function () {
  resetSlides();
  activeSlideIndex++;
  if (activeSlideIndex > slideCount - 1) {
    activeSlideIndex = 0;
  }
  slides[activeSlideIndex].classList.add("active");
});

prevButton.addEventListener("click", function () {
  resetSlides();
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = slideCount - 1;
  }
  slides[activeSlideIndex].classList.add("active");
});

// navigating with bullet navs

bullets.forEach((item) => {
  item.addEventListener("change", function (e) {
    resetSlides();
    activeSlideIndex = e.target.dataset.id;
    slides[activeSlideIndex].classList.add("active");
  });
});
