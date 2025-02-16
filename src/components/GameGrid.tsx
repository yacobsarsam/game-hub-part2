import {Box, Button, SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from '../hooks/useGames';
import Game_Card from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import {GameQuery} from "@/App.tsx";
import React from "react";

interface Props {
    gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:Props) => {

    const skeletons = [1,2,3,4,5,6,7,8,9,10];
        const {data, error,isLoading,isFetchingNextPage,fetchNextPage,hasNextPage}= useGames(gameQuery);

        if (error) return <Text> {error.message} </Text>;

    return (
        <Box padding={5}>
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:4}} spacing={6}   >
                {isLoading && skeletons.map(skeleton=>(
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>))}
                {data?.pages.map((page,index)=>
                    <React.Fragment key={index}>
                        {page.results.map((game)=>(
                            <GameCardContainer key={game.id}>
                                <Game_Card  game={game}></Game_Card>
                            </GameCardContainer>
                        ))}
                    </React.Fragment>)}
                </SimpleGrid>
            {hasNextPage &&
                <Button onClick={()=>fetchNextPage()} marginY={5}>
                    { isFetchingNextPage? 'Loading...' : 'Load more'}
                </Button>}
        </Box>
)
}
export default GameGrid;