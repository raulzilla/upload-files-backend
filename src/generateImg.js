import fs from "fs";
import { simpleGit } from "simple-git";

export const generateImg = (nameImg, img, type) => {
  const newImg = img.split("base64")[1].substring(1);

  fs.writeFile(`./assets/${nameImg}.${type}`, newImg, "base64", (e) => {
    if (e) console.error(e);
  });
  return publishImg();
};

const publishImg = () => {
  const git = simpleGit();

  git.add(".");
  git.commit("new image");
  git.push();
};
