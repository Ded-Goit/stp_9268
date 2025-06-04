import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

let swiperInstance = null;

function initCandySwiper() {
  const isMobile = window.innerWidth < 1200;

  if (isMobile && !swiperInstance) {
      swiperInstance = new Swiper('.swiper', {
          autoHeight: true,
        loop: true,
      modules: [Pagination],
      slidesPerView: 1,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }

  if (!isMobile && swiperInstance) {
    swiperInstance.destroy(true, true);
    swiperInstance = null;
  }
}

window.addEventListener('load', initCandySwiper);
window.addEventListener('resize', initCandySwiper);