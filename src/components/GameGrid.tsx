import { SimpleGrid, Spinner, Text} from "@chakra-ui/react";
import {useGames} from '../hooks/useGames.ts';
import Game_Card from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import React from 'react';
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {

    const skeletons = [1,2,3,4,5,6,7,8,9,10];
    const {data, error,isLoading,fetchNextPage,hasNextPage}= useGames();
    if (error) return <Text> {error.message} </Text>;

    const fetchedGameCount = data?.pages.reduce((acc,page)=>acc+page.results.length,0) || 0;

    return (
            <InfiniteScroll dataLength={fetchedGameCount} hasMore={!!hasNextPage} next={()=>fetchNextPage()} loader={<Spinner/>}>
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:4}} spacing={6} padding={5}>
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
            </InfiniteScroll>
)}
export default GameGrid;