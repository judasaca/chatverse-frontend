import {
  Box,
  Grid,
  Image,
  GridItem,
  HStack,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";

import { BiArrowBack } from "react-icons/bi";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { AiOutlinePlusCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

// import { useLocation } from "react-router-dom";

const UserView = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const selectedUser = state.selectedUser;
  const selectedUsername = selectedUser.username;
  const origin = state.origin;
  console.log(state);

  const { logout } = useAuth();

  return (
    <Grid
      as={"main"}
      height={"100%"}
      templateAreas={{
        base: `"header" 
              "main"
              "footer"`,
      }}
      templateRows={{
        base: "1fr 1fr 1fr",
      }}
      templateColumns={{
        base: "1fr",
      }}
    >
      <GridItem
        area="header"
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
      >
        <Box width={"100%"}>
          <BiArrowBack
            cursor={"pointer"}
            size={"3vh"}
            onClick={() => navigate(`/${origin}`)}
          />
        </Box>
        <Box
          paddingTop={10}
          width={"80%"}
          maxWidth={"250px"}
          height={"auto"}
          display={"flex"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={3}
        >
          <Image borderRadius={"500px"} src="https://unsplash.it/600/600" />
          <Text fontSize={"2xl"}>{selectedUsername}</Text>
          <Badge colorScheme="green">Online</Badge>
        </Box>
      </GridItem>
      <GridItem
        area="main"
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {currentUser?.username === selectedUser?.username ? (
          <Button
            colorScheme="pink"
            fontSize={"lg"}
            onClick={async () => {
              logout();
            }}
          >
            Logout
          </Button>
        ) : (
          <Box></Box>
        )}
      </GridItem>
      <GridItem
        area="footer"
        display={"flex"}
        flexDirection={"column"}
        gap={3}
        paddingX={20}
      >
        {currentUser?.username === selectedUser?.username ? (
          <Box></Box>
        ) : (
          <>
            <HStack
              onClick={() =>
                navigate("/chat", {
                  state: { selectedUser: selectedUser, origin: "chats" },
                })
              }
            >
              <BiMessageRoundedDetail title={"Chat with your friend"} />
              <Text fontSize={"xl"}>Send message</Text>
            </HStack>
            <HStack>
              <AiOutlinePlusCircle title={"Add to a room"} />
              <Text fontSize={"xl"}>Invite to a room</Text>
            </HStack>
            <HStack>
              <AiOutlineCloseCircle title={"Delete friend"} />
              <Text fontSize={"xl"}>Delete friend</Text>
            </HStack>
          </>
        )}
      </GridItem>
    </Grid>
  );
};
export default UserView;
