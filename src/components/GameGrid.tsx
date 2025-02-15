import {SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from '../hooks/useGames';
import Game_Card from "@/components/GameCard.tsx";
import GameCardSkeleton from "@/components/GameCardSkeleton.tsx";
import GameCardContainer from "@/components/GameCardContainer.tsx";
import {GameQuery} from "@/App.tsx";

interface Props {
    gameQuery:GameQuery
}
const GameGrid = ({gameQuery}:Props) => {

    const skeletons = [1,2,3,4,5,6,7,8,9,10];
        const {data, error,isLoading}= useGames(gameQuery);

        if (error) return <Text> {error.message} </Text>;

    return (
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:4}} spacing={6} padding={5}  >
                {isLoading && skeletons.map(skeleton=>(
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton />
                    </GameCardContainer>))}
                {data?.results.map((game)=>(
                    <GameCardContainer key={game.id}>
                        <Game_Card  game={game}></Game_Card>
                    </GameCardContainer>
                ))}
            </SimpleGrid>
        )
}
export default GameGrid;