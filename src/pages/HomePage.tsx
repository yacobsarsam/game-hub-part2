import {Box, Grid, GridItem, HStack, useBreakpointValue} from "@chakra-ui/react";
import GenreList from "@/components/GenreList.tsx";
import GameHeading from "@/components/GameHeading.tsx";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import SortSelector from "@/components/SortSelector.tsx";
import GameGrid from "@/components/GameGrid.tsx";

const HomePage = () => {
    const isLargeScreen = useBreakpointValue({base: false, lg: true});
    return(
        <Grid templateAreas={{
            base: `"main"`,
            lg: `"aside main"`,
        }}
              templateColumns={{
                  base:'1fr',
                  lg: '200px 1fr'
              }}>
            {isLargeScreen && <GridItem area="aside" paddingX={5} >
                <GenreList />
            </ GridItem>}
            <GridItem area="main">
                <Box paddingLeft={5}>
                    <GameHeading />
                    <HStack spacing={5}  marginBottom={5}>
                        <PlatformSelector />
                        <SortSelector />
                    </HStack>
                </Box>
                <GameGrid />
            </ GridItem>
        </ Grid>
    );
}
export default HomePage;