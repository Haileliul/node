const http = require("http");
const port = 3000;

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  res.setHeader("Content-Type", "text/html");
  res.write("<h1>Hello, Haileliul</h1>");
  res.end();
});

server.listen(port, () => {
  console.log(`Listening for requests on port :${port}`);
});
