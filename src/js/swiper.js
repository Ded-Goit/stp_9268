
import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function initSwipers() {
  const isMobile = window.innerWidth < 1200;
  const swiperElements = document.querySelectorAll('.swiper');

  swiperElements.forEach((swiperEl) => {
    const paginationEl = swiperEl.querySelector('.swiper-pagination');

    if (isMobile) {
      if (!swiperEl.swiperInstance) {
        swiperEl.swiperInstance = new Swiper(swiperEl, {
          modules: [Pagination],
          autoHeight: true,
          loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          pagination: {
            el: paginationEl,
            clickable: true,
          },
        });
      }
    } else {
      if (swiperEl.swiperInstance) {
        swiperEl.swiperInstance.destroy(true, true);
        swiperEl.swiperInstance = null;
      }
    }
  });
}

function debounce(func, delay) {
  let timeout;
  return function () {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  };
}

window.addEventListener('load', initSwipers);
window.addEventListener('resize', debounce(initSwipers, 200));