import { https } from '../axiosClient'
import { useEffect, useState } from 'react'

export interface gameTypes {
    id: number
    name: string
    slug: string
    games_count: number
    image_background: string
}

interface fetchGameResponse {
    count: number
    next: string
    previous: string
    results: gameTypes[]
}

export default function useGenre() {
    const [games, setGames] = useState<gameTypes[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const fetchGames = async () => {
        setLoading(true)
        const res = await https.get<fetchGameResponse>('genres');
        console.log(res.data)
        setGames(res.data.results)
        setLoading(false)
    }
    useEffect(() => {
        fetchGames();
    }, [])

    return {
        games,
        loading
    }
}
