init();

async function init() {
    const openSidebar = document.querySelector(".sidebar__toggle-menu");
    const sidebar = document.querySelector(".sidebar__container");
    const sidebarList = document.querySelector(".sidebar__list");
    const searchIcon = document.querySelector(".sidebar__search-icon");
    const searchInput = document.querySelector(".sidebar__search-input");

    await fetch("../movies.json")
        .then((res) => res.json())
        .then((data) => {
            const categories = [...new Set(data.map((movie) => movie.category))];
            categories.forEach((category) => {
                const li = document.createElement("li");
                li.classList.add("sidebar__list-item");
                li.textContent = capitalyze(category);
                li.addEventListener("click", (e) => {
                    e.target.classList.toggle("sidebar__list-item--active");
                    removeActive(e.target.textContent);
                });
                sidebarList.appendChild(li);
            });
        })
        .catch((err) => console.log(err));

    sidebar.addEventListener("click", (e) => {
        if (e.target === sidebarList) {
            searchIcon.classList.remove("sidebar__search-icon--hidden");
            searchInput.classList.remove("sidebar__search-input--open");
        } else if (e.target === openSidebar) {
            sidebar.classList.toggle("sidebar__container--open");
            openSidebar.classList.toggle("fa-caret-left");
        } else if (e.target === searchIcon) {
            searchIcon.classList.toggle("sidebar__search-icon--hidden");
            searchInput.classList.toggle("sidebar__search-input--open");
            searchInput.focus();
        }
    });

    searchInput.addEventListener("input", (e) => {
        console.log(e.target.value); // For filtering later
    });
}

function removeActive(activeCategory) {
    const categories = document.querySelectorAll(".sidebar__list-item");
    categories.forEach((category) => {
        if (category.textContent !== activeCategory) {
            category.classList.remove("sidebar__list-item--active");
        }
    });
}

function capitalyze(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}