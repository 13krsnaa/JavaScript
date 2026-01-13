const tabs = document.querySelectorAll(".tab");
const sections = document.querySelectorAll("section");

function showTab(tabName) {
  // remove active from all tabs
  tabs.forEach((tab) => tab.classList.remove("active"));

  // hide all sections
  sections.forEach((sec) => sec.classList.remove("active"));

  // activate clicked tab
  document.querySelector(`.tab[data-tab="${tabName}"]`).classList.add("active");

  // show related section
  document.getElementById(tabName).classList.add("active");
}

// click event on tabs
tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabName = tab.dataset.tab;

    showTab(tabName);

    // optional: URL hash
    location.hash = tabName;
  });
});

// load tab from URL hash (optional)
const hash = location.hash.replace("#", "");
if (hash) {
  showTab(hash);
}
