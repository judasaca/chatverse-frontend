// import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import customSocket from "../../utils/socket";
const ChatView = () => {
  console.log("rendering chat view");
  const { state } = useLocation();
  const selectedUsername = state.selectedUsername;
  console.log(state);

  // const socket = io(URL);
  // useEffect(() => {
  //   console.log("THIS USE EFECT IS RUNNINGGGG");
  //   customSocket.onAny((event, ...args) => {
  //     console.log(event, args);
  //   });
  //   customSocket.on("private message", (msg) => {
  //     console.log("MESSAGE RECEIVED:-------", msg);
  //     const item = document.createElement("li");
  //     const messages = document.getElementById("messages");
  //     item.textContent = msg.content;
  //     messages?.appendChild(item);
  //     // window.scrollTo(0, document.body.scrollHeight);
  //   });
  // }, []);
  return (
    <>
      <div>TO: {selectedUsername}</div>
      <div className="messages">messages</div>
      <ul id="messages"></ul>
      <form
        id="form"
        action=""
        className="input-bar"
        onSubmit={(e) => {
          const input = document.getElementById("input") as HTMLInputElement;

          e.preventDefault();
          if (input?.value) {
            customSocket.emit("private message", {
              content: input.value,
              to: selectedUsername,
            });
            input.value = "";
          }
        }}
      >
        <input id="input" autoComplete="off" />
        <button>Send</button>
      </form>
      {/* <div className="input-bar">Input</div> */}
    </>
  );
};
export default ChatView;
