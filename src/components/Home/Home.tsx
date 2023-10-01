import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Show,
} from "@chakra-ui/react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Chats from "./Chats/Chats";
import Rooms from "./Rooms/Rooms";
import Friends from "./Friends/Friends";

import styles from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        templateAreas={{
          base: `'main'`,
          lg: `'aside main'`, //> 1024px
        }}
        templateColumns={{
          base: "1fr",
          lg: "250px 1fr",
        }}
      >
        {/* aside */}
        <Show above="lg">
          <GridItem
            area="aside"
            as="aside"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Heading as="h2" size="lg" paddingBottom={5}>
              Chats
            </Heading>
            <Box overflowY={"scroll"} paddingRight={2} height={"75vh"}></Box>
          </GridItem>
        </Show>
        <GridItem area="main">
          <Flex fontSize="lg" justifyContent="space-evenly" paddingBottom={5}>
            <Heading
              onClick={() => navigate("/chats")}
              className={styles.categories}
              as="h2"
              size="md"
            >
              Chats
            </Heading>
            <Heading
              onClick={() => navigate("/rooms")}
              className={styles.categories}
              as="h2"
              size="md"
            >
              Rooms
            </Heading>
            <Heading
              onClick={() => navigate("/friends")}
              className={styles.categories}
              as="h2"
              size="md"
            >
              Friends
            </Heading>
          </Flex>
          <Divider orientation="horizontal" />
        </GridItem>
      </Grid>
      <Routes>
        <Route path="chats" element={<Chats />} />
        <Route path="rooms" element={<Rooms />} />
        <Route path="friends" element={<Friends />} />
      </Routes>
    </>
  );
};

export default Home;
