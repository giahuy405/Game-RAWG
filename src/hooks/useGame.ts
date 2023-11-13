import { https } from '../axiosClient'
import { useEffect, useState } from 'react'
import useLoading from './useLoading'

export interface gameTypes {
    id: number
    name: string
    background_image: string
}

interface fetchGameResponse {
    count: number
    next: string
    previous: string
    results: gameTypes[]
}

export default function useGame() {
    const [games, setGames] = useState<gameTypes[]>([]);

    const fetchGames = async () => {
        const res = await https.get<fetchGameResponse>('games');
        console.log(res.data)
        setGames(res.data.results)
    }
    useEffect(() => {
        fetchGames();
    }, [])

    return {
        games,
    }
}
