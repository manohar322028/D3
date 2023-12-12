const httpServer = require("http-server");

const rootDir = __dirname;

// Configuration options for the server
const serverOptions = {
  root: rootDir,
  cors: true,
  cache: -1, // Disable caching for development
};

// Start the HTTP server
const server = httpServer.createServer(serverOptions);
const port = process.env.PORT || 8080;

server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
