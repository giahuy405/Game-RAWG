import { https } from '../axiosClient'
import { useEffect, useState } from 'react'
import { GenreTypes } from '../components/Genre'
import { PlatForm } from './usePlatform'
import { OptionSort } from '../components/Sort'

export interface Platform {
    id: number
    name: string
    slug: string
}

export interface gameTypes {
    id: number
    name: string
    background_image: string
    platforms: { platform: Platform }[]
    rating: number
}

interface fetchGameResponse {
    count: number
    next: string
    previous: string
    results: gameTypes[]
}

export default function useGame(selectedGenre: GenreTypes | undefined, selectPlatform: PlatForm | undefined, sortGame: OptionSort | undefined, text: string | undefined) {

    console.log(selectedGenre)
    const [games, setGames] = useState<gameTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const fetchGames = async () => {
        setLoading(true)
        const res = await https.get<fetchGameResponse>('games', {
            params: {
                genres: selectedGenre?.id,
                parent_platforms: selectPlatform?.id,
                ordering: sortGame?.value,
                search: text
            }
        });
        console.log(res.data)
        setGames(res.data.results)
        setLoading(false)
    }
    useEffect(() => {
        fetchGames();
    }, [selectedGenre, selectPlatform, sortGame, text])

    return {
        games,
        loading,

    }
}
