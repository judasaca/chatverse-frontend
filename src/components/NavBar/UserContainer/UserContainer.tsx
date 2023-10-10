import { Badge, Image, VStack, Text, HStack } from "@chakra-ui/react";
import styles from "./userContainer.module.css";
import { useAuth } from "../../../hooks/useAuth";

const UserContainer = () => {
  // TODO: asi se accede a current user que tiene token y username
  const { currentUser } = useAuth();
  console.log("currentUser ", currentUser);

  return (
    <HStack>
      <Image className={styles.userImg} src="https://unsplash.it/50/50" />
      <VStack alignItems={"flex-start"}>
        <Text>{currentUser ? currentUser.username : ""}</Text>
        <Badge colorScheme="green">Online</Badge>
      </VStack>
    </HStack>
  );
};

export default UserContainer;
