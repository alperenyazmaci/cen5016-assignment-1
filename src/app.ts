import express, { Express, Request, Response } from "express";
import fibRoute from "./fibRoute";

const app: Express = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.get("/fib/:num", fibRoute);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
