import {Box, Grid, GridItem, HStack, useBreakpointValue,} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import {Genre} from "@/hooks/useGenres.ts";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import {Platform} from "@/hooks/usePlatforms.ts";
import SortSelector from "@/components/SortSelector.tsx";
import GameHeading from "@/components/GameHeading.tsx";

export interface GameQuery {
    genre:Genre|null;
    platform:Platform|null;
    sortOrder:string;
    searchText:string;
}

function App() {
    const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery)

    const isLargeScreen = useBreakpointValue({base: false, lg: true});

    return (
        <Grid templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
        }}
              templateColumns={{
                  base:'1fr',
                  lg: '200px 1fr'
              }}>
            <GridItem area="nav">
                <NavBar onSearch={(searchText)=>setGameQuery({...gameQuery, searchText})} />
            </ GridItem >
            {isLargeScreen && <GridItem area="aside" paddingX={5} >
            <GenreList
                selectedGenre={gameQuery.genre}
                onSelectGenre={(genre)=> setGameQuery({...gameQuery, genre})}
            />
            </ GridItem>}
            <GridItem area="main">
                <Box paddingLeft={5}>
                <GameHeading gameQuery={gameQuery}/>
                <HStack spacing={5}  marginBottom={5}>
                    <PlatformSelector selectedPlatform={gameQuery.platform}
                                      onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})}/>
                </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}> </GameGrid>
            </ GridItem>
        </ Grid>
    );
}
export default App;