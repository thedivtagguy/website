const fs = require("fs");
const mkdirp = require("mkdirp");
const resize = require("./resize-image.cjs");

const CWD = process.cwd();
const pathIn = `${CWD}/images`;
const pathOut = `${CWD}/static/common/assets/resources`;
const sizes = [32, 640, 960, 1280];

function getNewImages() {
  const filesIn = fs.readdirSync(pathIn).filter((d) => d.includes(".jpg") || d.includes(".png"));
  const filesOut = fs.readdirSync(`${pathOut}/${sizes[0]}`).filter((d) => d.includes(".jpg") || d.includes(".png"));

  return filesIn.filter((d) => !filesOut.includes(d));
}

function makeThumbnail(file) {
  return new Promise((resolve, reject) => {
    const promises = sizes.map((size) =>
      resize({ pathIn, pathOut, file, size, blur: size === sizes[0] })
    );

    Promise.all(promises).then(resolve).catch(reject);
  });
}

(async () => {
  console.log("task: resizing thumbnails - resources");

  sizes.forEach((size) => mkdirp.sync(`${pathOut}/${size}`));

  const files = getNewImages();

  try {
    for (let file of files) {
      await makeThumbnail(file);
    }
  } catch (err) {
    console.error(err);
  }

  console.log("DONE: resizing thumbnails - resources");
  process.exit();
})();
