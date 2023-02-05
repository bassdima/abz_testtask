import { useEffect, useState } from "react";
import { UsersType } from "../models";
import { compare } from "../helpers";
import { useMemo } from "react";

export const useSortUserList = (usersList: UsersType[]) => {
    const sorted = useMemo(() => {
        return usersList.sort((a, b) => compare(a, b, 'desc'))
    }, [usersList]);
    
    return sorted;
}


export const useStartPreloader = (startPreloader: React.Dispatch<React.SetStateAction<boolean>>, loading: boolean) => {
    useEffect(() => {
        startPreloader(loading)
    }, [loading, startPreloader])
}

export const useFormValid = (values: { [key: string]: string }) => {
    const [isformValid, setIsformValid] = useState(true);

    useEffect(() => {
        const name = values.name !== '';
        const email = values.email !== '';
        const phone = values.phone !== '';
        const position_id = values.position_id !== '';
        const photo = values.photo !== '';
        const condition = name && email && phone && position_id && photo;

        setIsformValid(!condition)
    }, [values])

    return isformValid;
}
