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
import useMessages from "../../hooks/useMessages";
import MessageCard, { MessageObj } from "../Cards/MessageCard";
import styles from "./chatView.module.css";
import useSendMessage from "../../hooks/useSendMessage";
import { useState } from "react";

const ChatView = () => {
  console.log("rendering chat view");
  const { state } = useLocation();
  const selectedUser = state.selectedUser;
  const origin = state.origin;
  // console.log(state);

  const { data: messagesData } = useMessages(
    localStorage.getItem("token") || "",
    selectedUser.username
  );

  const [message, setMessage] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);

  const { data: sendMessageData } = useSendMessage(
    localStorage.getItem("token") || "",
    selectedUser.username,
    message,
    shouldFetch
  );

  console.log("typing...", message);
  sendMessageData && console.log("sendMessageData", sendMessageData);

  //

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
          paddingRight={2}
          height={"85%"}
        >
          <Box className={styles.messages}>
            {messagesData?.messages &&
              [...messagesData.messages]
                .reverse()
                .map((messageObj: MessageObj, index: number) => {
                  // console.log(messageObj);
                  return <MessageCard key={index} data={messageObj} />;
                })}
          </Box>
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

              setShouldFetch(true);
            }}
          >
            <FormControl display={"flex"} flexDirection="row" gap={2}>
              <Input
                id="input"
                autoComplete="off"
                type="text"
                placeholder="Type a message"
                onChange={(event) => setMessage(event.target.value)}
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
