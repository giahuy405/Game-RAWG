import { SimpleGrid } from '@chakra-ui/react'
import useGame from '../hooks/useGame'
import GameCard from './GameCard';
import GameCardSkelekton from './GameCardSkelekton';
import { GenreTypes } from './Genre';
import { PlatForm } from '../hooks/usePlatform';
import { OptionSort } from './Sort';
import { Case, Switch } from 'react-if';

interface Props {
    selectedGenre: GenreTypes | undefined
    selectPlatform: PlatForm | undefined
    sortGame: OptionSort | undefined
}

export default function GridGames({ selectedGenre, selectPlatform, sortGame }: Props) {
    const { games, loading } = useGame(selectedGenre, selectPlatform, sortGame);

    const skelkton = [1, 2, 3, 4, 5, 6, 7, 8]

    console.log(selectPlatform)
    // const newList = games.filter(item => item.slug.includes(selectedGenre.games.slug))
    // console.log(newList)
    return (
        <SimpleGrid columns={{
            sm: 2,
            md: 3,
            lg: 4
        }}
            spacing={5}
            marginTop='20px'
        >
            <Switch>
                <Case condition={loading}>
                    {skelkton.map(item =>
                        <GameCardSkelekton key={item} />
                    )}
                </Case>
                <Case condition={!loading}>
                    {!loading && games?.map(item =>
                        <GameCard item={item} key={item.id} />
                    )}
                </Case>
            </Switch>

        </SimpleGrid>
    )
}
