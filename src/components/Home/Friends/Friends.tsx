import useFriends from "../../../hooks/useFriends";
import FriendCard from "../../Cards/FriendCard";
import SearchBar from "../../SearchBar/SearchBar";

const Friends = () => {
  const { data, isLoading, error } = useFriends(
    localStorage.getItem("token") || ""
  );

  const profileImgs = [
    "https://unsplash.it/55/55",
    "https://unsplash.it/52/52",
  ];

  // console.log("friends: ", data);

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
    </>
  );
};

export default Friends;
