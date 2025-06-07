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

  let value;
  try {
    value = localStorage.getItem(key);
  } catch (e) {
    console.warn('LocalStorage unavailable', e);
  }

  if (!value || value !== 'true') show();

  document.querySelectorAll('[data-action]').forEach(btn => {
    btn.addEventListener('click', () => {
      const action = btn.dataset.action;
      try {
        localStorage.setItem(key, action === 'true' ? 'true' : 'false');
      } catch (e) {
        console.warn('LocalStorage error', e);
      }
      hide();
    });
  });
});
