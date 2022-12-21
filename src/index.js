import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { generateImg } from "./generateImg.js";
import { config } from "dotenv";

const app = express();
config();

app.use(cors());

app.use(bodyParser.json({ limit: "50mb" }));

app.post("/generate-img", async (req, res) => {
  const request = await req.body;
  let isOk = false;

  isOk = generateImg(request.nameImg, request.img, request.type);

  if (isOk) res.json({ data: "test" });
});

app.get("/", (_, res) => {
  res.send("API está executando normalmente");
});

app.listen(process.env.PORT, () =>
  console.log(`O servidor esta rodando na porta localhost:${process.env.PORT}`)
);
