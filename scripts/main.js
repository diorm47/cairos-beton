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
window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  
  if (window.scrollY > 100) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
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



const tabsPrices = document.querySelector(".prices_btns");
const tabButtonPrices = document.querySelectorAll(".prices_btns .filter_btn");
const contentsPrices = document.querySelectorAll(".prices_table");

if (tabsPrices) {
  tabsPrices.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("filter_btn")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButtonPrices.forEach((btn) => {
        btn.classList.remove("active_filter_btn");
      });
      target.classList.add("active_filter_btn");

      contentsPrices.forEach((content) => {
        content.classList.remove("active_filter_btn");
      });
      const element = document.getElementById(id);
      element.classList.add("active_filter_btn");
    }
  };
}


