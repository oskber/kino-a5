async function fetchMovies() {
  const response = await fetch("https://anschoolacc.github.io/Uppgift-2-En-biograf-sajt/movies.JSON");
  return await response.json();
}

const movies = await fetchMovies();


if (window.location.pathname.includes("movies")) {
  const container = document.querySelector(".allMovies");
  renderMovies(container);
}

function renderMovies(container) {
  movies.forEach((movie) => {
    const movieCard = createMovie(movie);
    container.appendChild(movieCard);
  })

}

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


class FetchMovies {
  async Getmovies(){
    const api = 'movies.JSON';
    const response = await fetch (api)
    const movies = await response.json();
    return movies
  }
}

class RenderComingMovies {

  static async renderMovies(){
    const fetchComingMovies = new FetchMovies();
    const comingMovies = await fetchComingMovies.Getmovies();
    console.log('hej')
    console.log(comingMovies);
    

    
   
  }

}

RenderComingMovies.renderMovies();



