import { useEffect, useState } from 'react'
import { UsersType, PositionsType } from "../models";
import { getDataForSignUpForm, getUsers } from "./requests";

export const useGetDataForSignUpForm = () => {
    const [loading, setLoading] = useState(true);
    const [positions, setPositions] = useState<Array<PositionsType>>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        getDataForSignUpForm(setLoading, setError, setPositions);
    }, [])
    return { positions, loading, error }
}

export const useGetUsers = (pageNumber: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState<Array<UsersType>>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        getUsers(setLoading, setError, setUsers, setHasMore, pageNumber);
    }, [pageNumber])

    return { loading, error, users, hasMore }
}
