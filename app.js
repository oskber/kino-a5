import express, { response } from "express";
import { engine } from "express-handlebars";
import fs from "fs/promises";
import { loadMovie, loadMovies } from "./movies.js";

const app = express();

app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (request, response) => {
  response.render("index");
});
app.get("/aboutus", async (request, response) => {
  response.render("aboutUs");
});
app.get("/movies", async (request, response) => {
  response.render("movies");
});
app.get("/404", async (request, response) => {
  response.render("404");
});

app.get("/newmovies", async (req, res) => {
  const movies = await loadMovies();
  res.render("newmovies", { movies });
});

app.get("/newmovies/:movieId", async (req, res) => {
  const movie = await loadMovie(req.params.movieId);
  res.render("amovie", { movie });
});

app.use("/static", express.static("./static"));

export default app;
