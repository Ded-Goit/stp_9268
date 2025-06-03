document.querySelectorAll('[data-faq-toggle]').forEach(toggle => {
  toggle.addEventListener('click', () => {
    const current = toggle.closest('[data-faq]');
    const currentContent = current.querySelector('[data-faq-content]');
    const currentIcon = toggle.querySelector('use');

    document.querySelectorAll('[data-faq]').forEach(faq => {
      const content = faq.querySelector('[data-faq-content]');
      const icon = faq.querySelector('use');
      if (faq !== current) {
        faq.classList.remove('open');
        content.style.maxHeight = null;
        icon?.setAttribute('href', '#icon-plus');
      }
    });

    const isOpen = current.classList.toggle('open');

    if (isOpen) {
      let maxHeight;

      if (window.innerWidth <= 320) {
        maxHeight = '149px';
      } else if (window.innerWidth >= 1200) {
        maxHeight = '130px';
      } else {
        maxHeight = currentContent.scrollHeight + 'px';
      }

      currentContent.style.maxHeight = maxHeight;
      currentIcon?.setAttribute('href', '#icon-minus');
    } else {
      currentContent.style.maxHeight = null;
      currentIcon?.setAttribute('href', '#icon-plus');
    }
  });
});