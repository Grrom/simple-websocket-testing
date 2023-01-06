const { Server } = require("ws");

const sockserver = new Server({ port: 8080 });
sockserver.on("connection", (ws) => {
  console.log("client connected");
});

setInterval(() => {
  sockserver.clients.forEach((client) => {
    client.send(JSON.stringify({ messsage: "hello world" }));
  });
}, 8000);
