import { Badge, Image, VStack, Text, HStack } from "@chakra-ui/react";
import styles from "./userContainer.module.css";
import { User } from "../AuthProvider/AuthProvider";

interface UserContainerProps {
  user: User | null;
}

const UserContainer = ({ user }: UserContainerProps) => {
  return (
    <HStack>
      <Image className={styles.userImg} src="https://unsplash.it/50/50" />
      <VStack alignItems={"flex-start"}>
        <Text>{user ? user.username : ""}</Text>
        <Badge colorScheme="green">Online</Badge>
      </VStack>
    </HStack>
  );
};

export default UserContainer;
