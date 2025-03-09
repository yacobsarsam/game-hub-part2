import useScreenShots from "@/hooks/useScreenShots.tsx";
import {SimpleGrid, Image} from "@chakra-ui/react";

interface Props {
    gameId: number;
}
const GameScreenShots = ({gameId}:Props) => {
    const {data, error, isLoading} = useScreenShots(gameId);
    if(isLoading) return <div>Loading...</div>;
    if (error) throw error;

    const first = data?.results;
    return first ?
        (
            <SimpleGrid columns={{base: 1, md: 2}} spacing={2}>
                {first.map(file => (<Image key={file.id} src={file.image}/>) )}
            </SimpleGrid>
        ) : null;
}
export default GameScreenShots;