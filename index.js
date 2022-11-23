import fs from "fs";

export const generateImg = (nameImg, img) => {
  const type = img.split("base64")[0].split("/")[1].replace(/.$/, "");
  const newImg = img.split("base64")[1].substring(1);

  fs.writeFileSync(`./assets/${nameImg}.${type}`, newImg, "base64");
};
