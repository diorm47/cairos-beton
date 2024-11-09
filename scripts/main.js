document.querySelectorAll(".catalog_btn").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active_catalog_btn");

    document.querySelectorAll(".catalog_btn").forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active_catalog_btn");
      }
    });
  });
});

document.querySelectorAll(".nav_menu_item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("active_nav_menu_item");

    document.querySelectorAll(".nav_menu_item").forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("active_nav_menu_item");
      }
    });
  });
});

function togglerMenu() {
  document
    .querySelector(".mob_menu_wrapper")
    .classList.toggle("visible_mob_menu_wrapper");
}

document.querySelectorAll(".faq_item").forEach((item) => {
  item.addEventListener("click", () => {
    item.classList.toggle("faq_item_active");

    document.querySelectorAll(".faq_item").forEach((faq) => {
      if (faq !== item) {
        faq.classList.remove("faq_item_active");
      }
    });
  });
});
