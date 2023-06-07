function x() {
    console.log("abebe A")
}
function x() {
    console.log("abebe B")
}
x()
///////////////////////////////////////////////
/////////////////////////////////////////////////
const http = require("http");
const fs = require("fs");
const mimeType = require("mime-types").lookup;
const appleserver = http.createServer((req, res) => {
  let filePath = req.url;
  if (filePath == "/") {
    filePath = "/index.html";
  } else if (filePath == "/about") {
    filePath = "/about.html";
  }
  //   else if (filePath !== "/" || filePath !== "/about") {
  //     res.end("404 page not found");
  //   }
  let requestedFile = "./apple-html-css-replica" + filePath;
  fs.readFile(requestedFile, (err, data) => {
    if (err) {
      filePath = "./about.html";
      res.end();
    } else {
      let mime = mimeType(filePath);
      console.log(mime);
      res.writeHead(200, { "content-type": mime });
      res.end(data);
    }
  });
});
const apple_port = 1234;
appleserver.listen(apple_port, () => {
  console.log(`Server is running on PORT: http:localhost: ${apple_port}`);
});