import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard';


export default function GridGames() {

    const { games } = useGame();

    return (
        <SimpleGrid columns={{
            sm: 2,
            md: 4,
        }}
            spacing={5}
            marginTop='20px'
        >
            {games.map(item =>
                <GameCard item={item} key={item.id} />
            )}
        </SimpleGrid>
    )
}
