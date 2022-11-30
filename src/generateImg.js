import fs from "fs";
import { simpleGit } from "simple-git";

export const generateImg = (nameImg, img) => {
  const type = img.split("base64")[0].split("/")[1].replace(/.$/, "");
  const newImg = img.split("base64")[1].substring(1);

  fs.writeFileSync(`./assets/${nameImg}.${type}`, newImg, "base64");
  return publishImg(nameImg, type);
};

const publishImg = (nameImg, type) => {
  const git = simpleGit();

  git.add(".");
  git.commit("new image");
  git.push();

  return {
    message: "A imagem foi postada",
    url: `https://raw.githubusercontent.com/raulzilla/upload-files-backend/main/assets/${nameImg}.${type}`,
  };
};
