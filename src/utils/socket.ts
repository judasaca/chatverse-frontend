import { io } from "socket.io-client";

const URL = import.meta.env.VITE_BASE_API_URL;
const token = localStorage.getItem("token");

const customSocket = io(URL, {
  auth: {
    token,
    sessionID: token,
  },
});
console.log("THIS USE EFECT IS RUNNINGGGG");
customSocket.onAny((event, ...args) => {
  console.log(event, args);
});
customSocket.on("private message", (msg) => {
  console.log("MESSAGE RECEIVED:-------", msg);
  const item = document.createElement("li");
  const messages = document.getElementById("messages");
  item.textContent = msg.content;
  messages?.appendChild(item);
});
export default customSocket;
