import icfaq from '../img/sprite.svg';

document.querySelectorAll('[data-faq-toggle]').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const current = toggle.closest('[data-faq]');
    const currentContent = current.querySelector('[data-faq-content]');
    const currentIcon = toggle.querySelector('use');

    // Закриваємо всі відкриті
    document.querySelectorAll('[data-faq]').forEach(faq => {
      const content = faq.querySelector('[data-faq-content]');
      const icon = faq.querySelector('use');

      if (faq !== current) {
        faq.classList.remove('open');
        content.style.height = null;
        content.style.overflow = 'hidden';
        icon?.setAttribute('href', `${icfaq}#icon-plus`);
      }
    });

    const isOpen = current.classList.contains('open');

    if (isOpen) {
      // Якщо вже відкрито — закриваємо
      current.classList.remove('open');
      currentContent.style.height = null;
      currentContent.style.overflow = 'hidden';
      currentIcon?.setAttribute('href', `${icfaq}#icon-plus`);
    } else {
      // Відкриваємо
      current.classList.add('open');

      const scrollHeight = currentContent.scrollHeight;
      currentContent.style.height = scrollHeight + 'px';
      currentContent.style.overflow = 'visible';
      currentIcon?.setAttribute('href', `${icfaq}#icon-minus`);

      // Опція: після анімації обнуляємо висоту, щоб дозволити адаптацію при зміні вмісту
      currentContent.addEventListener(
        'transitionend',
        function handleTransition() {
          currentContent.style.height = 'auto';
          currentContent.removeEventListener('transitionend', handleTransition);
        }
      );
    }
  });
});