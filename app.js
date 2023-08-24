import express from "express";

const app = express();
const port = 3333;

app.listen(port, () => {console.log(`App running on http://localhost:${port}`); });

app.get("/", (request, response) => { response.send("Hello world"); });

app.get("/test", (request, response) => {
  response.send("This is a test route");
});