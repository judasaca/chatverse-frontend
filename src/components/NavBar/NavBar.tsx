import { HStack } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch/ColorModeSwitch";
import UserContainer from "./UserContainer/UserContainer";

const NavBar = () => {
  return (
    <HStack justifyContent="space-between" paddingBottom={10} paddingTop={3}>
      <UserContainer />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
