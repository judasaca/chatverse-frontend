import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { io } from "socket.io-client";
const ChatView = () => {
  console.log("rendering chat view");
  const { state } = useLocation();
  const selectedUsername = state.selectedUsername;
  console.log(state);
  const URL = process.env.VITE_BASE_API_URL as string;

  const socket = io(URL);

  // const socket = io(URL);
  useEffect(() => {}, []);
  return (
    <>
      <div>TO: {selectedUsername}</div>
      <div className="messages">messages</div>
      <ul id="messages"></ul>
      <form id="form" action="" className="input-bar">
        <input id="input" autoComplete="off" />
        <button>Send</button>
      </form>
      {/* <div className="input-bar">Input</div> */}
    </>
  );
};
export default ChatView;
