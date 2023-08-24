import express from "express";
import fs from "fs/promises";
import cors from "cors";

const app = express();
const port = 3333;

app.use(express.json());// to parse JSON bodies
app.use(cors());

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});

app.get("/", (request, response) => {
  response.send("Hello world");
});

app.get("/test", (request, response) => {
  response.send("This is a test route");
});

// app.get("/users", (request, response) => {
//   response.send("My users endpoint!");
// });

app.get("/users", async (request, response) => {
    const data = await fs.readFile("data.json");
    const users = JSON.parse(data);
    console.log(users);
    response.json(users);
});
