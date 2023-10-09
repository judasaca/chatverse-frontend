import SearchBar from "../../SearchBar/SearchBar";

const Friends = () => {
  return (
    <SearchBar
      onSearch={(searchText) => console.log("searchText ", searchText)}
    />
  );
};

export default Friends;
