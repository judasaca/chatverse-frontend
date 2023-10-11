import { Card, CardBody, Heading, Stack, Image, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

interface Props {
  user: Friend;
}

export interface Friend {
  username: string;
  profileImg: string;
}

const FriendCard = ({ user }: Props) => {
  const navigate = useNavigate();

  return (
    <Card
      cursor={"pointer"}
      variant={"filled"}
      direction={{ base: "row" }}
      overflow="hidden"
      display={"flex"}
      marginBottom={5}
      onClick={() => navigate("/chat", { state: { selectedUser: user } })}
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
          </Flex>
        </CardBody>
      </Stack>
    </Card>
  );
};

export default FriendCard;
