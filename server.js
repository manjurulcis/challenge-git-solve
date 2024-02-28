const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/") return respondHello(req, res);
  else if (req.url === "/user-agent") return getUserAgent(req, res);
  else if (req.url === "/base64") return convertBase64(req, res);
  res.end();
});

function respondHello(req, res) {
  res.end(JSON.stringify({ msg: "hello" }));
}

function getUserAgent(req, res) {
  res.end(JSON.stringify({ msg: "User Agent" }));
}

function convertBase64(req, res) {
  res.end(JSON.stringify({ msg: "Base64 convertered" }));
}

server.listen(PORT);
console.log(`Server listening on port ${PORT}`);

if (require.main !== module) module.exports = server;
