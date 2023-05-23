import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import { GameGrid } from "../components/GameGrid";
import { GameHeading } from "../components/GameHeading";
import { GenreList } from "../components/GenreList";
import { PlatformSelector } from "../components/PlatformSelector";
import { SortSelector } from "../components/SortSelector";

const HomePage = () => {
  const areas = { base: `"main"`, lg: `"aside main"` };
  const columns = { base: `1fr`, xl: `300px 1fr` };

  return (
    <Grid templateAreas={areas} templateColumns={columns}>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box marginBottom={5}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={5}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GameGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
