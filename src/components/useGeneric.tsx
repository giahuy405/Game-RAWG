import { https } from '../axiosClient'
import { useEffect, useState } from 'react'


interface fetchResponse<T> {
    count: number
    next: string
    previous: string
    results: T[]
}

// dùng genertic type để tiết kiệm code 
export default function useGeneric<T>(endpoint: string) {
    const [data, setData] = useState<T[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const fetchGames = async () => {
        setLoading(true)
        const res = await https.get<fetchResponse<T>>(endpoint);
        setData(res.data.results)
        setLoading(false)
    }
    useEffect(() => {
        fetchGames();
    }, [])

    return {
        data,
        loading
    }
}
