async function fetchMovies() {
  const response = await fetch("https://anschoolacc.github.io/Uppgift-2-En-biograf-sajt/movies.JSON"); // "/movies.JSON"
  return await response.json();
}

const movies = await fetchMovies();


if (window.location.pathname.includes("movies")) {
  const container = document.querySelector(".allMovies");
  renderMovies(container);
} else if (window.location.pathname.includes("index")) {
  const container = document.querySelector(".viewTop3__container");
  renderMovies(container, true);
}

//this function renders movies to movies.html and top3 on index.html
function renderMovies(container, top3) {
  if (!movies) return;
  let render;
  if (top3) {
    render = movies.sort((a, b) => b.rating - a.rating).slice(0, 3);
  } else {
    render = movies;
  }

  render.forEach((movie) => {
    const movieCard = createMovie(movie);
    container.appendChild(movieCard);
  });
}

//function to render current movies
const currentMovies = document.querySelector(".viewCurrent__container");

function renderCurrentMovies() {
  const maxCardsToShow = 5;
  let cardsRendered = 0;

  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i];

    if (movie.isNew === true && cardsRendered < maxCardsToShow && currentMovies) {
      const movieCard = createMovie(movie);
      currentMovies.appendChild(movieCard);
      console.log(movie);
      cardsRendered++;
    }
  }
}
//run function
renderCurrentMovies();

function createMovie(movie) {
  const movieTemplate = document.querySelector(".movieTemplate");
  const temp = movieTemplate.content.cloneNode(true);
  const card = temp.querySelector(".movieTemplate__card");
  const cardCover = temp.querySelector(".movieTemplate__cover");
  const cardImg = temp.querySelector(".movieTemplate__img");
  const cardTitle = temp.querySelector(".movieTemplate__title");
  const cardAge = temp.querySelector(".movieTemplate__ageLimit");
  const cardCat = temp.querySelector(".movieTemplate__category");
  const cardDes = temp.querySelector(".movieTemplate__description");
  const cardBtn = temp.querySelector(".movieTemplate__button");
  card.id = movie.id;
  cardTitle.innerText = movie.title;
  cardAge.innerText = movie.age_limit;
  cardCat.innerText = movie.category;
  cardDes.innerText = movie.description;
  cardImg.style.backgroundImage = `url(${movie.image})`;
  cardCover.style.backgroundImage = `url(${movie.image})`;
  return temp;
}


//Rendering "coming movies".
class RenderComingMovies {

  renderMovies() {
    const comingMovieSection = document.querySelector('.comingMovies__Container');
    movies.forEach(moviez => {
      if (moviez.isReleased === false) {
        comingMovieSection.appendChild(createMovie(moviez));
      }
    })
  }
}
//Calling new instance of class.
const renderer = new RenderComingMovies
renderer.renderMovies();



