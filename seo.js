const fs = require("fs");
const { minify } = require("html-minifier-terser");

const filePath = "./index.html";
const newTitle = "Himanshu Jangid | Software Engineer";

fs.readFile(filePath, "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Find and replace the title tag
  const updatedData = data.replace(
    /<title>.*<\/title>/,
    `<title>${newTitle}</title>`
  );

  // add various meta tags considering the domain name https://himanshujangid.com and og:image at https://himanshujangid.com/assets/images/me-2-full.jpg
  // no twitter card as it is not required
  const updatedDataWithMetaTags = updatedData.replace(
    /<head>/,
    `<head>
        <meta name="description" content="Himanshu Jangid is a Software Engineer, who loves to build scalable and performant web applications.">
        <meta name="keywords" content="Himanshu Jangid, Software Engineer, Full Stack Developer, Web Developer, JavaScript Developer, React Developer, Node.js Developer, Express.js Developer, MongoDB Developer, MERN Stack Developer">
        <meta name="author" content="Himanshu Jangid">
        <meta property="og:title" content="Himanshu Jangid | Software Engineer">
        <meta property="og:description" content="Himanshu Jangid is a Software Engineer, who loves to build scalable and performant web applications.">
        <meta property="og:type" content="website">
        <meta property="og:url" content="https://himanshujangid.com">
        <meta property="og:image" content="https://himanshujangid.com/assets/images/me-2-full.jpg">
        <meta property="og:image:width" content="1200">
        <meta property="og:image:height" content="630">
        <meta property="og:site_name" content="Himanshu Jangid | Software Engineer">
        <meta property="og:locale" content="en_US">
        <meta name="twitter:card" content="summary_large_image">
        <meta name="twitter:site" content="@himanshujangid">
        <meta name="twitter:creator" content="@himanshujangid">
        <meta name="twitter:title" content="Himanshu Jangid | Software Engineer">
        <meta name="twitter:description" content="Himanshu Jangid is a Software Engineer, who loves to build scalable and performant web applications.">
        <meta name="twitter:image" content="https://himanshujangid.com/assets/images/me-2-full.jpg">
    `
  );

  // minify the html
  minify(fs.readFileSync(filePath, "utf8"), {
    collapseWhitespace: true,
    removeComments: true,
  }).then((minifiedHtml) => {
    fs.writeFile(filePath, minifiedHtml, "utf8", (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log("File updated successfully.");
    });
  });
});
