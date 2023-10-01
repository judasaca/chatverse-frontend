import { Badge, Image, VStack, Text, HStack } from "@chakra-ui/react";
import styles from "./userContainer.module.css";

const UserContainer = () => {
  return (
    <HStack>
      <Image className={styles.userImg} src="https://unsplash.it/50/50" />
      <VStack alignItems={"flex-start"}>
        <Text>username</Text>
        <Badge colorScheme="green">Online</Badge>
      </VStack>
    </HStack>
  );
};

export default UserContainer;
