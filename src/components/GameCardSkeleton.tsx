import {Card, CardBody, Skeleton, SkeletonText} from "@chakra-ui/react";

const GameCardSkeleton = () => {

    return (
    <Card>
        <Skeleton height='290px'>
            <CardBody>
                <SkeletonText/>
            </CardBody>
        </Skeleton>
    </Card>
    )
}
export default GameCardSkeleton;