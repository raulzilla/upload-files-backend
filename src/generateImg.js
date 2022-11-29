import fs from "fs";
import simpleGit from "simple-git";

export const generateImg = (nameImg, img) => {
  const type = img.split("base64")[0].split("/")[1].replace(/.$/, "");
  const newImg = img.split("base64")[1].substring(1);

  fs.writeFileSync(`./assets/${nameImg}.${type}`, newImg, "base64");
  publishImg();
};

const publishImg = () => {
  const git = simpleGit.default();

  git.add(".");
  git.commit("new image");
  git.push();
};
