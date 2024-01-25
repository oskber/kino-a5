import { expect, test } from "@jest/globals";
import request from "supertest";
import app from "../app";

test("Encanto page shows title of movie", async () => {
  const response = await request(app)
    .get("/newmovies/2")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("Encanto");
});
test("Pulp Fiction page shows title of movie", async () => {
  const response = await request(app)
    .get("/newmovies/8")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("Pulp Fiction");
});
test("Min granne Totoro page shows title of movie", async () => {
  const response = await request(app)
    .get("/newmovies/4")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("Min granne Totoro");
});
test("Isle of dogs page shows title of movie", async () => {
  const response = await request(app)
    .get("/newmovies/1")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("Isle of dogs");
});
test("The Shawshank Redemption page shows title of movie", async () => {
  const response = await request(app)
    .get("/newmovies/3")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("The Shawshank Redemption");
});
test("Forrest Gump page shows title of movie", async () => {
  const response = await request(app)
    .get("/newmovies/6")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("Forrest Gump");
});
test("The Muppets page shows title of movie", async () => {
  const response = await request(app)
    .get("/newmovies/5")
    .expect("Content-Type", "text/html; charset=utf-8")
    .expect(200);

  expect(response.text).toMatch("The Muppets");
});
