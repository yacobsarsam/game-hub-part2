import {Card, CardBody, Heading, HStack, Image, } from "@chakra-ui/react";
import {Game} from "@/hooks/useGames.ts";
import PlatformIconList from "@/components/PlatformIconList.tsx";
import CriticScore from "@/components/CriticScore.tsx";
import getCroppedImageUrl from "@/services/image-url.ts";

interface Props {
    game:Game
}
export const GameCard = ({game}:Props) => {
    return(
        <Card >
            <Image src={getCroppedImageUrl(game.background_image)}></Image>
            <CardBody>
                <HStack justifyContent="space-between" marginBottom={3}>
                <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)}/>
                <CriticScore score={game.metacritic}></CriticScore>
                </HStack>
                <Heading fontSize={"2xl"}>{game.name}</Heading>
            </CardBody>
        </Card>
    )
}
export default GameCard;