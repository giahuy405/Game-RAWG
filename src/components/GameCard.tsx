import { Card, CardBody, Heading, Image, Text } from '@chakra-ui/react'
import { gameTypes } from '../hooks/useGame'
import IconPlatform from './IconPlatform'

interface Props {
    item: gameTypes
}

export default function GameCard({ item }: Props) {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image minHeight='250px' src={item.background_image} />
            <CardBody>
                <Heading fontSize='xl'>{item.name}</Heading>

                <IconPlatform platFormArr={item.platforms} />
            </CardBody>
        </Card>
    )
}
