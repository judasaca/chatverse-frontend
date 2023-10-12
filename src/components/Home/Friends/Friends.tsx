import { Text, Button, HStack, Spinner } from "@chakra-ui/react";
import useFriends from "../../../hooks/useFriends";
import FriendCard from "../../Cards/FriendCard";
import SearchBar from "../../SearchBar/SearchBar";
import { BsPersonPlus } from "react-icons/bs";
import styles from "./friends.module.css";
import AddNewFriendModal from "../../AddNewFriendModal/AddNewFriendModal";
import { useState } from "react";
import HandleInvitationsModal from "../../HandleInvitationsModal/HandleInvitationsModal";

const Friends = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openInvitationsModal, setOpenInvitationsModal] = useState(false);
  const { data, isLoading } = useFriends(localStorage.getItem("token") || "");

  const profileImgs = [
    "https://unsplash.it/55/55",
    "https://unsplash.it/52/52",
  ];

  if (isLoading) return <Spinner />;

  return (
    <>
      <HStack>
        <SearchBar
          onSearch={(searchText) => console.log("searchText ", searchText)}
        />

        <Button
          paddingY={{ base: 4, lg: 6 }}
          paddingX={7}
          borderRadius={5}
          onClick={() => setOpenInvitationsModal(true)}
          width={{ lg: "15%" }}
        >
          <Text wordBreak={"break-word"} fontSize={{ base: "xs", lg: "md" }}>
            Pending <br /> invitations
          </Text>
        </Button>
      </HStack>

      {openInvitationsModal && (
        <HandleInvitationsModal
          setOpenInvitationsModal={setOpenInvitationsModal}
        />
      )}
      {data?.friends?.map((friendUsername: string, index: number) => (
        <FriendCard
          key={friendUsername}
          user={{
            username: friendUsername,
            profileImg: profileImgs[index],
          }}
        />
      ))}

      {/* add new friend btn & modal */}
      <Button
        position={"fixed"}
        right={"20px"}
        bottom={"20px"}
        borderRadius={"100px"}
        padding={0}
        className={styles.addFriendBtn}
        onClick={() => setOpenModal(true)}
      >
        <BsPersonPlus className={styles.addFriendIcon} />
      </Button>
      {openModal && <AddNewFriendModal setOpenModal={setOpenModal} />}
    </>
  );
};

export default Friends;
