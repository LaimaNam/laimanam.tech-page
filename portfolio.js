//variables
const sliderWrapper = document.querySelector('.nslider-wrapper');

const projects = [
  {
    technologies: 'REACT',
    link: 'https://brave-johnson-a56726.netlify.app/',
    imgSrc: './assets/mockups/sticky_notes.png',
    title: 'Sticky notes',
  },
  {
    technologies: 'REACT, Nodejs, material-ui',
    link: 'https://github.com/LaimaNam/react-nodejs-final',
    imgSrc: './assets/mockups/vartotojuAdminSystem.png',
    title: 'User management',
  },
  {
    technologies: 'REACT',
    link: 'https://pensive-galileo-3a9e07.netlify.app/',
    imgSrc: './assets/mockups/todoapp.png',
    title: 'Todo App',
  },
  {
    technologies: 'JavaScript',
    link: 'https://elegant-archimedes-cfddc5.netlify.app/',
    imgSrc: './assets/mockups/qg-2.png',
    title: 'Quote generator',
  },
  {
    technologies: 'JavaScript',
    link: 'https://laimanam.tech/',
    imgSrc: './assets/mockups/mypage.png',
    title: 'Webdev portfolio',
  },
  {
    technologies: 'WordPress',
    link: 'https://justsaynomaybeyes.com/',
    imgSrc: './assets/mockups/justsaynomaybeyes-portfolio.png',
    title: 'Artist portfolio',
  },
  {
    technologies: 'JavaScript, Nodejs',
    link: 'https://boring-mcnulty-cd24d9.netlify.app/',
    imgSrc: './assets/mockups/adminsystem.png',
    title: 'Admin system',
  },
  {
    technologies: 'JavaScript, Nodejs',
    link: 'https://github.com/LaimaNam/carwash-reservation-app',
    imgSrc: './assets/mockups/carwashapp.png',
    title: 'Registration form',
  },
  {
    technologies: 'PHP, JavaScript, MySQL',
    link: 'https://github.com/LaimaNam/vcs_project',
    imgSrc: './assets/mockups/phpProject.png',
    title: 'Web + login',
  },
  // {
  //   technologies: 'HTML, CSS',
  //   link: 'https://goofy-northcutt-4d3d42.netlify.app/',
  //   imgSrc: './assets/mockups/hexagon.png',
  //   title: 'Artist portfolio',
  // },
  // {
  //   technologies: 'Bootstrap',
  //   link: 'https://eager-curie-efd85d.netlify.app/',
  //   imgSrc: './assets/mockups/sushi-page.png',
  //   title: 'Sushi place page',
  // },
  // {
  //   technologies: '',
  //   link: '',
  //   imgSrc: '',
  //   title: '',
  // }
];

const renderSliderOutput = (arr) => {
  sliderWrapper.innerHTML = arr.reduce((total, item, index) => {
    total += `
  <div class="nslider-slide" id="slide-${index + 1}">
    <div class="portfolio-item">
      <div>
        <h3>${item.technologies}</h3>
        <a href=${item.link} target="”_blank”">
          <img
            src=${item.imgSrc}
            alt="${item.title}"
        /></a>
      </div>
      <h2>${item.title}</h2>
    </div>
  </div>
    `;
    return total;
  }, '');
};

document.addEventListener('DOMContentLoaded', () => {
  renderSliderOutput(projects);
  const slider = new NSlider({
    elem: document.querySelector('.container'),
    animation: {
      duration: 1000, // Milliseconds
      timingFunction: 'ease-in',
    },
    dots: true,
    keyboardControl: true,
    prevButtonInner: '<',
    nextButtonInner: '>',
    currentSlide: 1,
  });

  // slider();

  setInterval(() => slider.next(), 5000);
});
