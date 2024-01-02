init();

async function init() {
    const openSidebar = document.querySelector(".sidebar__toggle-menu");
    const sidebar = document.querySelector(".sidebar__container");
    const sidebarList = document.querySelector(".sidebar__list");
    const searchIcon = document.querySelector(".sidebar__search-icon");
    const searchInput = document.querySelector(".sidebar__search-input");
    let activeCategory;

    await fetch("https://anschoolacc.github.io/Uppgift-2-En-biograf-sajt/movies.JSON")
        .then((res) => res.json())
        .then((data) => {
            const categories = [...new Set(data.map((movie) => movie.category))];
            categories.forEach((category) => {
                const li = document.createElement("li");
                li.classList.add("sidebar__list-item");
                li.textContent = capitalize(category);
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
        } else if (e.target.classList.contains("sidebar__list-item")) {
            activeCategory !== e.target ? activeCategory?.classList.remove("sidebar__list-item--active") : null;
            e.target.classList.toggle("sidebar__list-item--active");
            activeCategory = e.target;
        }
    });

    searchInput.addEventListener("input", (e) => {
        console.log(e.target.value); // For filtering later
    });
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}