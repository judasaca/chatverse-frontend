import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
} from "@chakra-ui/react";
import { User } from "../Home/Chats/Chats";
import { useNavigate } from "react-router-dom";

interface Props {
  user: User;
}

const CardComponent = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      direction={{ base: "row" }}
      overflow="hidden"
      display={"flex"}
      marginBottom={5}
      onClick={() =>
        navigate("/chat", { state: { selectedUsername: user.username } })
      }
    >
      <Flex
        padding={"10px"}
        paddingRight={0}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Image
          objectFit="cover"
          width={"50px"}
          height={"50px"}
          borderRadius={"30px"}
          src={user.profileImg}
          alt="Caffe Latte"
        />
      </Flex>

      <Stack flex={"1"}>
        <CardBody padding={"1rem"}>
          <Flex justifyContent={"space-between"}>
            <Heading size="sm">{user.username}</Heading>
            <Text fontSize="sm">{user.time}</Text>
          </Flex>
          <Text py="1" fontSize="sm">
            {user.lastMessage}
          </Text>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default CardComponent;
