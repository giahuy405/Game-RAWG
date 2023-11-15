import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

export default function GameCardSkelekton() {
    return (
        <Card width="100%">
            <Skeleton height='200px' />
            <CardBody>
                <SkeletonText />
            </CardBody>
        </Card>
    )
}
