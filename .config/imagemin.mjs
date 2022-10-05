import imagemin from "imagemin-keep-folder";
import imageminPngquant from "imagemin-pngquant";
import imageminWebp from "imagemin-webp";
import imageminSvgo from "imagemin-svgo";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminGifsicle from "imagemin-gifsicle";

const srcDir = `./src/**/img/**/*.{jpg,jpeg,png,gif,svg}`;
const outDir = `./dist/**/img/**/*`;

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
    // console.log(output.replace('src', 'dist'));
    return output.replace('src', 'dist');

  },
}).then(() => {
  convertWebp(outDir);
  console.log("Images are optimized✨");
});
