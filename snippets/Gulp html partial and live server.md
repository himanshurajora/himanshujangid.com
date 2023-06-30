### Problem:
Have you ever worked with plain html and css without any fancy framework such as React, Angular or Solid. Now let's imagine you have five pages and you want to add navbar and footer to all five of them. That's is simple isn't it? You just copy and paste navbar and footer. Now let's say you forgot something in navbar. Just copy paste again. Let's say you want to add a new link to footer. Copy paste again. It's so bad something right? You get frustrated and in the worst case stop working on it.

### Solution
Well gulp solves this problem, It is a tool to automate such tasks. The greatest thing about it is that it has a very big plugin inventory. Prefer visiting their website https://gulpjs.com/.

Here's a simple gulp file for including partial content such as header and footer to your files and also running live server.

```javascript
const gulp = require("gulp");
const comments = require("gulp-header-comment");
const fileInclude = require("gulp-file-include");
const bs = require("browser-sync");
const path = {
  src: {
    html: "src/**/*.html",
  },
};

gulp.task("html", () => {
  return gulp
    .src(path.src.html)
    .pipe(
      fileInclude({
        basepath: "src/partial",
      })
    )
    .pipe(comments(`Website by Vedik Devs`))
    .pipe(gulp.dest("./output"));
});

gulp.task("watch:html", function () {
  gulp.watch(["src/**/*.html", "src/**/*.html"], gulp.series("html"));
});

gulp.task(
  "default",
  gulp.series(
    "html",
    gulp.parallel("watch:html", function () {
      bs.init({
        server: "output/",
      });
    })
  )
);
```

I can go through it line by line and explain you everything. I this is just a snippet and not entire blog. And I kept it that way because I want you to surf it on your own, play with gulpJS and make some basic pipelines. You will learn more by doing than just reading.
