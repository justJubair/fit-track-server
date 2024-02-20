const { Server } = require("socket.io");
const io = Server(5000);

io.on("connection", (socket) => {
  console.log(`Socket connection: ${socket.id}`);
});
