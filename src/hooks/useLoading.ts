import { useState } from "react";

interface ReturnTypes {
    isLoading: boolean
    showLoading: () => void;
    hideLoading: () => void
}


export default function useLoading(): ReturnTypes {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const showLoading = () => setIsLoading(true)
    const hideLoading = () => setIsLoading(false)

    return {
        isLoading,
        showLoading,
        hideLoading
    }

}
