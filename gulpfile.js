const { src, dest, series, watch } = require("gulp");
const sass = require("gulp-sass");
const csso = require("gulp-csso");
const include = require("gulp-file-include");
const htmlmin = require("gulp-htmlmin");
const del = require("del");
let uglify = require("gulp-uglify-es").default;
const concat = require("gulp-concat");
const autoprefixer = require("gulp-autoprefixer");
const sourcemaps = require("gulp-sourcemaps");
const sync = require("browser-sync").create();

function html() {
  return src("src/**/**.html")
    .pipe(
      include({
        prefix: "@@",
      })
    )
    .pipe(
      htmlmin({
        collapseWhitespace: false,
      })
    )
    .pipe(dest("dist"));
}

function scss() {
  return src("src/scss/**.scss")
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(
      autoprefixer({
        browsers: ["last 2 versions"],
      })
    )
    .pipe(csso())
    .pipe(concat("index.css"))
    .pipe(sourcemaps.write("."))
    .pipe(dest("dist"));
}

function img() {
  return src("src/img/**").pipe(dest("dist/img"));
}

function fonts() {
  return src("src/fonts/**").pipe(dest("dist/fonts"));
}

function script() {
  return src("src/js/**.js")
    .pipe(concat("index.js"))
    .pipe(uglify())
    .pipe(dest("dist"));
}

function clear() {
  return del("dist");
}

function serve() {
  sync.init({
    server: "./dist",
  });

  watch("src/**/**.html", series(html)).on("change", sync.reload);
  watch("src/scss/**.scss", series(scss)).on("change", sync.reload);
  watch("src/js/**.js", series(script)).on("change", sync.reload);
  watch("src/img", series(img)).on("change", sync.reload);
  watch("src/fonts", series(fonts)).on("change", sync.reload);
}

exports.build = series(clear, scss, script, html, img, fonts);
exports.serve = series(clear, scss, script, html, img, fonts, serve);
exports.clear = clear;
