import CardComponent from "../../Card/Card";
import SearchBar from "../../SearchBar/SearchBar";

export interface User {
  username: string;
  lastMessage: string;
  time: string;
  profileImg: string;
}

const Chats = () => {
  const user: User = {
    username: "angLaGatita",
    lastMessage: "How r u? 💕",
    time: "18:20",
    profileImg:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  };
  const user2: User = {
    username: "judasaca",
    lastMessage: "hey",
    time: "13:00",
    profileImg:
      "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
  };
  return (
    <>
      <SearchBar
        onSearch={(searchText) => console.log("searchText ", searchText)}
      />
      <CardComponent user={user} />
      <CardComponent user={user2} />
    </>
  );
};

export default Chats;
