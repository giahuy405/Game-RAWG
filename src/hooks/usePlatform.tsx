import { useEffect, useState } from "react";
import { https } from "../axiosClient";


export interface PlatForm {
    id: number
    name: string
    slug: string
}

export default function usePlatform(selectPlatform: PlatForm | undefined) {
    const [data, setGames] = useState<PlatForm[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const fetchGames = async () => {
        setLoading(true)
        // https://api.rawg.io/api/platforms/lists/parents
        const res = await https.get('platforms/lists/parents');
        console.log(res.data)
        setGames(res.data.results)
        setLoading(false)
    }
    useEffect(() => {
        fetchGames();
    }, [selectPlatform])

    return {
        data,
        loading
    }
}
