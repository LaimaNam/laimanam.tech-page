document.addEventListener('DOMContentLoaded', () => {
  const slider = new NSlider({
    elem: document.querySelector('.container'),
    animation: {
      duration: 1000, // Milliseconds
      timingFunction: 'ease-in',
    },
    dots: true,
    keyboardControl: true,
    // prevButtonInner: '<',
    // nextButtonInner: '>',
    currentSlide: 1,
  });

  //   slider();

  setInterval(() => slider.next(), 5000);
});
