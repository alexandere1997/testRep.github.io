/*class Slider {
  constructor(page, btns){
    this.page = document.querySelector(page);
    this.slides = this.page.children;
    this.btns = document.querySelectorAll(btns);
    this.slideIndex = 1;
  }
  showSlides(n) {
    if(n > this.slides.length) {
      this.slideIndex = 1;
    }
    if(n < 1) {
      this.slideIndex = this.slides.length;
    }
    for (const slide of this.slides) {
      slide.style.display = "none";
    }

    this.slides[this.slideIndex  - 1].style.display = "flex"
  }
  plusSlides(n) {
    this.showSlides(this.slideIndex += n);
  }
  init() {
    this.btns.forEach(item => {
      item.addEventListener("click", () => {
        this.plusSlides(1);
      })
    });

    this.showSlides(this.slideIndex);
  }
}

const showSlider = new Slider(".portfolio__content",".btn");
showSlider.init();
*/