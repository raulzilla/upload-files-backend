import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { generateImg } from "./generateImg.js";
import { config } from "dotenv";

const app = express();
config();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));

app.post("/generate-img", async (_, response) => {
  const res = await response.req.body;

  response.send(generateImg(res.nameImg, res.img));
});

app.get("/", (_, res) => {
  res.send("API está executando normalmente");
});

app.listen(process.env.PORT, () =>
  console.log(`O servidor esta rodando na porta localhost:${process.env.PORT}`)
);
