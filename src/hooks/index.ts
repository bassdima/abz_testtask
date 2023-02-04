import { useEffect } from "react"

export const useStartPreloader = (startPreloader: React.Dispatch<React.SetStateAction<boolean>>, loading: boolean) => {
    useEffect(() => {
        startPreloader(loading)
    }, [loading])
}
