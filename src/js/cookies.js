document.addEventListener('DOMContentLoaded', () => {
  const wrapper = document.querySelector('.cookies-wrapper');
  const key = 'cookiesAccepted';

  if (!wrapper) return;

  const show = () => {
    wrapper.classList.add('visible');
    document.body.style.overflow = 'hidden';
  };

  const hide = () => {
    wrapper.classList.remove('visible');
    document.body.style.overflow = '';
  };

  // Checking if the user has already selected
  const savedValue = localStorage.getItem(key);
  if (savedValue === null) {
    show(); // Show modal only if not already selected
  }

  // Click processing
  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action; // "true" або "false"
      localStorage.setItem(key, action);
      hide();
    });
  });
  // Closing on Esc
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && wrapper.classList.contains('visible')) {
      hide();
    }
  });
});
