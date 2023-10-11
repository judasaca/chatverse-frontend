import {
  Box,
  Divider,
  Flex,
  Grid,
  GridItem,
  Heading,
  Show,
} from "@chakra-ui/react";
import { Outlet, useNavigate } from "react-router-dom";

import styles from "./home.module.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <Grid
        templateAreas={{
          base: `'main'`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
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
      <Outlet />
    </>
  );
};

export default Home;
