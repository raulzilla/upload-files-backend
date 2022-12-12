import fs from "fs";
import { simpleGit } from "simple-git";

export const generateImg = (nameImg, img, type) => {
  const newImg = img.split("base64")[1].substring(1);

  fs.writeFileSync(`./assets/${nameImg}.${type}`, newImg, "base64");
  return publishImg();
};

const publishImg = () => {
  const git = simpleGit();

  git.add(".");
  git.commit("new image");
  git.push();

  return "finish";
};
