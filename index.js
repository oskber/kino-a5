import express, { response } from "express";
import { engine } from "express-handlebars";
import fs from "fs/promises";

const app = express();
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", "./templates");

app.get("/", async (request, response) => {
  const filePath = "static/index.html";
  const buf = await fs.readFile(filePath);
  const html = buf.toString();

  response.send(html);
});

app.use("/", express.static("./"));

app.listen(5080);