import { Card, CardBody, Heading, Image } from '@chakra-ui/react'
import { gameTypes } from '../hooks/useGame'

interface Props {
    item: gameTypes
}

export default function GameCard({ item }: Props) {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image src={item.background_image} />
            <CardBody>
                <Heading fontSize='xl'>{item.name}</Heading>
            </CardBody>
        </Card>
    )
}
