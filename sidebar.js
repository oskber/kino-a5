const openSidebar = document.querySelector(".sidebar__toggle-menu");
const sideBar = document.querySelector(".sidebar__container");
const searchIcon = document.querySelector(".sidebar__search-icon");
const searchInput = document.querySelector(".sidebar__search-input");
const categories = document.querySelectorAll(".category");

function removeActive(categories, target) {
    categories.forEach((category) => {
        if (category !== target) {
            category.classList.remove("sidebar__list-item--active");
        }
    });
}

openSidebar.addEventListener("click", () => {
    sideBar.classList.toggle("sidebar--open");
    openSidebar.classList.toggle("fa-caret-left");
});

searchIcon.addEventListener("click", () => {
    searchIcon.classList.toggle("sidebar__search-icon--hidden");
    searchInput.classList.toggle("sidebar__search-input--open");
    searchInput.focus();
});

sideBar.addEventListener("click", (e) => {
    if (e.target !== sideBar.firstElementChild) return;
    searchIcon.classList.remove("sidebar__search-icon--hidden");
    searchInput.classList.remove("sidebar__search-input--open");
});

categories.forEach((category) => {
    category.addEventListener("click", (e) => {
        const category = e.target.textContent; // For filtering later
        console.log(category);
        e.target.classList.toggle("sidebar__list-item--active");
        removeActive(categories, e.target);
    });
});

searchInput.addEventListener("input", (e) => {
    console.log(e.target.value); // For filtering later
});
