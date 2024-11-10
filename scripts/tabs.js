const tabs = document.querySelector(".tabs_list");
const tabButton = document.querySelectorAll(".filter_btn");
const contents = document.querySelectorAll(".about_beton_block");

if (tabs) {
  tabs.onclick = (e) => {
    let target = e.target;
    while (target && !target.classList.contains("filter_btn")) {
      target = target.parentNode;
    }
    if (target && target.dataset.id) {
      const id = target.dataset.id;
      tabButton.forEach((btn) => {
        btn.classList.remove("active_filter_btn");
      });
      target.classList.add("active_filter_btn");

      contents.forEach((content) => {
        content.classList.remove("active_filter_btn");
      });
      const element = document.getElementById(id);
      element.classList.add("active_filter_btn");
    }
  };
}


