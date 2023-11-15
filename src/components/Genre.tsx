import { Box, Button, HStack, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import useGeneric from './useGeneric'
import { getCropImage } from '../utils/getCroppImage'
export interface GenreTypes {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
}


interface Props {
    selectedGenre: GenreTypes | undefined,
    setSelectedGenre: React.Dispatch<React.SetStateAction<GenreTypes | undefined>>;
}
export default function Genre({ setSelectedGenre, selectedGenre }: Props) {
    console.log(selectedGenre)

    // const { games, loading } = useGenre();
    const { data, loading } = useGeneric<any>('genres')

    if (loading) return <Box display='flex' alignItems='center' justifyContent='center' ><Spinner /></Box>
    return (
        <List >
            {data?.map(item =>
                <ListItem key={item.id} padding={1}>
                    <HStack>
                        <Image src={getCropImage(item.image_background)} width='30px' height='30px' borderRadius='50%' />
                        <Button
                            color={item.id === selectedGenre?.id ? 'red' : ''}
                            variant='link'
                            onClick={() => setSelectedGenre(item)}
                        >{item.name}</Button>
                    </HStack>
                </ListItem>
            )}
        </List>
    )
}
