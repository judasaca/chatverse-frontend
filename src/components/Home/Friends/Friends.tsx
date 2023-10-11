import { Button, Spinner } from "@chakra-ui/react";
import useFriends from "../../../hooks/useFriends";
import FriendCard from "../../Cards/FriendCard";
import SearchBar from "../../SearchBar/SearchBar";
import { BsPersonPlus } from "react-icons/bs";
import styles from "./friends.module.css";
import AddNewFriendModal from "../../AddNewFriendModal/AddNewFriendModal";
import { useState } from "react";

const Friends = () => {
  const [openModal, setOpenModal] = useState(false);
  const { data, isLoading, error } = useFriends(
    localStorage.getItem("token") || ""
  );

  const profileImgs = [
    "https://unsplash.it/55/55",
    "https://unsplash.it/52/52",
  ];

  // console.log("friends: ", data);

  if (isLoading) return <Spinner />;

  return (
    <>
      <SearchBar
        onSearch={(searchText) => console.log("searchText ", searchText)}
      />

      {data?.friends?.map((friendUsername: string, index: number) => (
        <FriendCard
          key={friendUsername}
          user={{
            username: friendUsername,
            profileImg: profileImgs[index],
          }}
        />
      ))}

      {/* agregar a un nuevo amigo */}
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
