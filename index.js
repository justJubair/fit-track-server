require("dotenv").config();
const http = require("http");
const app = require("./src/app");
const connectDB = require("./src/db/connectDB");
const server = http.createServer(app);
const port = process.env.PORT || 5000;
const { Server } = require("socket.io");
const main = async () => {
  await connectDB();

  const io = new Server(8000, {
    cors: true,
  });

  const emailToSocketIdMap = new Map();
  const socketIdToEmailMap = new Map();
  io.on("connection", (socket) => {
    console.log(`Socket connection: ${socket.id}`);
    socket.on("room:join", (data) => {
      const { email, room } = data;
      console.log(data);
      emailToSocketIdMap.set(email, socket.id);
      socketIdToEmailMap.set(socket.id, email);
      io.to(room).emit("user:joined", { email, id: socket.id });
      socket.join(room);
      io.to(socket.id).emit("room:join", data);
    });
    socket.on("user:call", ({ to, offer }) => {
      io.to(to).emit("incoming:call", { from: socket.id, offer });
    });

    socket.on("call:accepted", ({ to, ans }) => {
      io.to(to).emit("call:accepted", { from: socket.id, ans });
    });
  });

  server.listen(port, () => {
    console.log(`Server is listening on ${port}`);
  });
};

main();
