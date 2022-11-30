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

  generateImg(request.nameImg, request.img, request.type);

  res.status(200).json({
    data: `https://raw.githubusercontent.com/raulzilla/upload-files-backend/main/assets/${res.img}.${res.type}`,
  });
});

app.get("/", (_, res) => {
  res.send("API está executando normalmente");
});

app.listen(process.env.PORT, () =>
  console.log(`O servidor esta rodando na porta localhost:${process.env.PORT}`)
);
