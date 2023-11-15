import { Card, CardBody, HStack, Heading, Image, Text } from '@chakra-ui/react'
import { gameTypes } from '../hooks/useGame'
import IconPlatform from './IconPlatform'
import BadgeRating from './BadgeRating'
import { getCropImage } from '../utils/getCroppImage'
interface Props {
    item: gameTypes
}

export default function GameCard({ item }: Props) {
    return (
        <Card borderRadius={10} overflow='hidden'>
            <Image minHeight='250px' src={getCropImage(item.background_image)} />
            <CardBody>
                <Heading fontSize='xl'>{item.name}</Heading>
                <HStack justifyContent='space-between'>
                    <IconPlatform platFormArr={item.platforms} />
                    <BadgeRating rating={item.rating} />
                </HStack>
            </CardBody>
        </Card>
    )
}
