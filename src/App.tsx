import {Box, Grid, GridItem, HStack, useBreakpointValue,} from "@chakra-ui/react";
import NavBar from "@/components/NavBar.tsx";
import GameGrid from "@/components/GameGrid.tsx";
import GenreList from "@/components/GenreList.tsx";
import {useState} from "react";
import PlatformSelector from "@/components/PlatformSelector.tsx";
import SortSelector from "@/components/SortSelector.tsx";
import GameHeading from "@/components/GameHeading.tsx";

export interface GameQuery {
    genreId?:number;
    platformId?:number;
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
                selectedGenreId={gameQuery.genreId}
                onSelectGenre={(genre)=> setGameQuery({...gameQuery, genreId: genre.id})}
            />
            </ GridItem>}
            <GridItem area="main">
                <Box paddingLeft={5}>
                <GameHeading gameQuery={gameQuery}/>
                <HStack spacing={5}  marginBottom={5}>
                    <PlatformSelector selectedPlatformId={gameQuery.platformId}
                                      onSelectPlatform={(platform) => setGameQuery({...gameQuery, platformId: platform.id})}/>
                    <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder)=> setGameQuery({...gameQuery,sortOrder})}/>
                </HStack>
                </Box>
                <GameGrid gameQuery={gameQuery}> </GameGrid>
            </ GridItem>
        </ Grid>
    );
}
export default App;