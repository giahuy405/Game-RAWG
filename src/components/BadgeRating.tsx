import { Badge } from '@chakra-ui/react'
import React from 'react'

interface Props {
    rating: number
}

export default function BadgeRating({ rating }: Props) {
    let color = rating > 4.6 ? 'green' : rating > 3.7 ? 'yellow' : 'red'
    return (
        <Badge colorScheme={color} padding={1} borderRadius={4} >
            {rating}
        </Badge>
    )
}
