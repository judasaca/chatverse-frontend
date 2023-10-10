import { Box, Flex } from "@chakra-ui/react";
import UserContainer from "../../UserContainer/UserContainer";
import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { User } from "../../AuthProvider/AuthProvider";

interface ChatHeaderProps {
  user: User | null;
}

const ChatHeader = ({ user }: ChatHeaderProps) => {
  const navigate = useNavigate();
  return (
    <Flex align={"center"} gap={4} paddingBottom={5}>
      <Box onClick={() => navigate("/chats")}>
        <BiArrowBack size={"3vh"} />
      </Box>
      <UserContainer user={user} />
    </Flex>
  );
};

export default ChatHeader;
