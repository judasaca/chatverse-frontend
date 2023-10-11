// import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import customSocket from "../../utils/socket";
import {
  Box,
  Button,
  Flex,
  FormControl,
  Grid,
  GridItem,
  Input,
} from "@chakra-ui/react";
import ChatHeader from "./ChatHeader/ChatHeader";

const ChatView = () => {
  console.log("rendering chat view");
  const { state } = useLocation();
  const selectedUser = state.selectedUser;
  const origin = state.origin;
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
    <Grid
      as={"main"}
      height={"100%"}
      templateAreas={{
        base: `"main" 
              "footer"`,
      }}
      templateRows={{
        base: "1fr 50px",
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem area="main">
        <ChatHeader user={selectedUser} origin={origin} />
        <Flex
          overflowY="scroll"
          className="chat-history-container"
          marginBottom={5}
          flexDirection="column"
        >
          {/* <div>TO: {selectedUser.username}</div> */}
          <div className="messages">messages will be rendered here</div>
          <ul id="messages"></ul>

          {/* <div className="input-bar">Input</div> */}
        </Flex>
      </GridItem>
      <GridItem area="footer">
        <Box>
          <form
            id="form"
            action=""
            className="input-bar"
            onSubmit={(e) => {
              const input = document.getElementById(
                "input"
              ) as HTMLInputElement;

              e.preventDefault();
              if (input?.value) {
                customSocket.emit("private message", {
                  content: input.value,
                  to: selectedUser.username,
                });
                input.value = "";
              }
            }}
          >
            <FormControl display={"flex"} flexDirection="row" gap={2}>
              <Input
                id="input"
                autoComplete="off"
                type="text"
                placeholder="Type a message"
              />
              <Button type="submit">Send</Button>
            </FormControl>
          </form>
        </Box>
      </GridItem>
    </Grid>
  );
};
export default ChatView;
