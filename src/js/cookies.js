document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".cookies-wrapper");
    const key = "cookiesAccepted";
    const value = localStorage.getItem(key);

    const show = () => {
      wrapper.style.opacity = "1";
      wrapper.style.visibility = "visible";
      document.body.style.overflow = "hidden";
    };

    const hide = () => {
      wrapper.style.opacity = "0";
      wrapper.style.visibility = "hidden";
      document.body.style.overflow = "";
    };

    if (value !== "true") show();

    document.querySelectorAll("[data-action]").forEach(btn => {
      btn.addEventListener("click", () => {
        localStorage.setItem(key, btn.dataset.action);
        hide();
      });
    });
  });