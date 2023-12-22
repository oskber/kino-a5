async function fetchMovies() {
  const response = await fetch("./movies.JSON");
  const jsonData = await response.json();
  console.log(jsonData);
}
fetchMovies();

async function viewTop3() {
  //fetch movie data from json
  const response = await fetch("./movies.JSON");
  const jsonData = await response.json();

  //sort movies by rating, top to bottom
  const sortedMovies = jsonData.sort((a, b) => b.rating - a.rating);
  for (let i = 0; i < 3; i++) {
    const topMovies = sortedMovies[i];
    console.log(topMovies);
    const topDiv = document.querySelector(".view__top3__container");
    const element = document.createElement("div");
    element.innerHTML = `${topMovies.title} rating: ${topMovies.rating}`;
    topDiv.append(element);
  }
}

viewTop3();

async function viewCurrent() {
  //fetch movie data from json
  const response = await fetch("./movies.JSON");
  const jsonData = await response.json();

  for (let i = 0; i < jsonData.length; i++) {
    const movie = jsonData[i];

    if (movie.isNew === true) {
      console.log(`${movie.title} is a current movie`);
      const currentDiv = document.querySelector(".view__current__container");
      const element = document.createElement("div");
      element.innerHTML = `${movie.title} is new`;
      currentDiv.append(element);
    }
  }
}

viewCurrent();
