const express = require("express");
const http = require("http");
const socketIO = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);

const io = socketIO(server, {
  cors: {
    target: "http://localhost:5173", // Change this to match your backend URL
    changeOrigin: true,
  },
});
app.use(cors());

app.use(express.json());
io.on("connection", (socket) => {
  console.log("A user connected");

  // Handle chat messages
  socket.on("message", (data) => {
    console.log("Message received:", data);
    io.emit("message", data); // Broadcast message to all clients
  });
  socket.on("call", (data) => {
    socket.broadcast.emit("call", data);
  });

  // Handle disconnection
  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
