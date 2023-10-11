import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import SearchBar from "../SearchBar/SearchBar";
import theme from "../../theme";

interface Props {
  setOpenModal: (arg: boolean) => void;
}

const AddNewFriendModal = ({ setOpenModal }: Props) => {
  return (
    <Box
      position={"fixed"}
      top={"50%"}
      left={"50%"}
      transform={"translate(-50%, -50%)"}
      height={"100%"}
      width={"100%"}
      background={"rgba(1, 5, 2, 0.6)"}
      className="modal-overlay"
      onClick={(event) => {
        const element = event.target as HTMLElement;
        if (element.classList[0] === "modal-overlay") setOpenModal(false);
      }}
    >
      <Flex
        className="modal"
        flexDirection={"column"}
        alignItems={"center"}
        paddingY={10}
        paddingX={5}
        position={"absolute"}
        top={"50%"}
        left={"50%"}
        transform={"translate(-50%, -50%)"}
        background={theme?.colors?.gray[700]}
        width={"80%"}
        height={"70%"}
        borderRadius={"20px"}
      >
        <Heading as="h2" fontSize={"2xl"}>
          Add a new Friend
        </Heading>
        <SearchBar
          onSearch={(searchText) => console.log("searchText ", searchText)}
        />
        <Button
          position={"absolute"}
          right={"10px"}
          top={"10px"}
          borderRadius={"30px"}
          padding={0}
          onClick={() => setOpenModal(false)}
        >
          x
        </Button>
      </Flex>
    </Box>
  );
};

export default AddNewFriendModal;
