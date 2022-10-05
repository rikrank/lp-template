// cont配下か否か
const isCont = process.env.NODE_ENV === 'cont';

import imagemin from "imagemin-keep-folder";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import imageminSvgo from "imagemin-svgo";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGifsicle from "imagemin-gifsicle";

const srcPath = isCont ? "cont/**" : "assets"
const outPath = isCont ? "**" : "assets"

const srcDir = `./src/${srcPath}/img/**/*.{jpg,jpeg,png,gif,svg}`;
const outDir = `./dist/${outPath}/img/**/*`;

const regex = isCont ? /cont\// : /assets\//;
const replaceOutputDir = isCont ? `../dist/` : `../dist/assets/`;

const convertWebp = (targetFiles) => {
  imagemin([targetFiles], {
    use: [imageminWebp({ quality: 50 })],
  });
};

imagemin([srcDir], {
  plugins: [
    imageminMozjpeg(),
    imageminPngquant(),
    imageminGifsicle(),
    imageminSvgo(),
  ],
  replaceOutputDir: (output) => {
    return output.replace(regex, replaceOutputDir);
  },
}).then(() => {
  convertWebp(outDir);
  console.log("Images are optimized✨");
});
