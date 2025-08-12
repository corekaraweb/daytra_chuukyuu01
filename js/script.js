document.querySelector(".drawer-icon").addEventListener("click", () => {
  document.querySelector(".drawer-icon").classList.toggle("is-checked");
  document.querySelector(".drawer-content").classList.toggle("is-checked");
});
document.querySelectorAll(".js-accordion").forEach((el) => {
  el.addEventListener("click", () => {
    el.closest(".qa-box").classList.toggle("is-open");
  });
});
document.querySelectorAll(".drawer-content__link,.drawer-content__button").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".drawer-icon").classList.toggle("is-checked");
    document.querySelector(".drawer-content").classList.toggle("is-checked");
  });
});
const swiper = new Swiper("#js-gallery-swiper", {
  spaceBetween: 70,
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: "#js-gallery-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: "#js-gallery-next",
    prevEl: "#js-gallery-prev",
  },
});
const modalOpenItems = document.querySelectorAll(".js-modal-open");
const modalCloseItems = document.querySelectorAll(".js-modal-close");
modalOpenItems.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".about-modal").showModal();
  });
});
modalOpenItems.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".about-modal").showModal();
  });
});
modalCloseItems.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector(".about-modal").close();
  });
});
const intersectionObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      entry.target.classList.remove("is-in-view");
    }
  });
});
const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach((el) => {
  intersectionObserver.observe(el);
});
