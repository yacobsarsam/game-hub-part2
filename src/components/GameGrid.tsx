import {SimpleGrid, Text} from "@chakra-ui/react";
import {useGames} from '../hooks/useGames';
import Game_Card from "@/components/GameCard.tsx";

const GameGrid = () => {

const {games, error}= useGames();
    return (
        <>
            {error && <Text>{error}</Text> }
            <SimpleGrid columns={{sm:1, md:2 , lg:3 , xl:5}} spacing={5} padding={5}  >
                {games.map((game)=>(
                    <Game_Card key={game.id} game={game}></Game_Card>))}
            </SimpleGrid>
        </>
    )

}
export default GameGrid;