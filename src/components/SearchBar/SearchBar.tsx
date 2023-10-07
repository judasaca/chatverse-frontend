import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchText: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null); //ref to the search input
  return (
    <form
      style={{ paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
      onSubmit={(event) => {
        event.preventDefault(); // to prevent the form to be posted to the server
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          children={<BsSearch />}
        ></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search"
          variant="filled"
        />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
