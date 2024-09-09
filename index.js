const http = require("http"); // Fix the typo here

const fs = require("fs");

const PORT = process.env.PORT; // Ensure the port is set properly
// const host = "localhost";
const home = fs.readFileSync("./index.html", "utf-8");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  //   res.setHeader("Content-Type", "text/plain");
  res.setHeader("Content-Type", "text/html"); // Set content type to HTML
  if (req.url === "/") {
    // return res.end("<h1>HOME PAGE</h1>");
    return res.end(home);
  }
  if (req.url === "/about") {
    return res.end("<h1>About PAGE</h1>");
  }
  if (req.url === "/contact") {
    return res.end("<h1>CONTACT PAGE</h1>");
  }
  if (req.url === "/service") {
    return res.end("<h1>SERVICE PAGE</h1>");
  } else {
    res.statusCode = 404;
    return res.end("<h1>ERROR 404 Page not found</h1>");
  }
  //   console.log(req.url);
  //   res.end("<h1>Hello, world!</h1>");
});

server.listen(PORT, () => {
  console.log(`Server is working `); // Ensure this prints the correct port
});
