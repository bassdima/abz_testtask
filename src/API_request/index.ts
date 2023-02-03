import { useEffect, useState } from 'react'
import axios from 'axios'
import { UsersType, PositionsType } from "../models";

let AUTH_TOKEN;
axios.defaults.headers.common['Token'] = AUTH_TOKEN;

export const useGetDataForSignUpForm = () => {
    const [loading, setLoading] = useState(true);
    const [positions, setPositions] = useState<Array<PositionsType>>([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        const endpoints = [
            'https://frontend-test-assignment-api.abz.agency/api/v1/positions',
            'https://frontend-test-assignment-api.abz.agency/api/v1/token'
        ];

        setLoading(true);
        setError(false);
        Promise.all(
            endpoints.map((endpoint) => axios.get(endpoint, { signal: controller.signal }))
        )
            .then(([{ data: dataPositions }, { data: dataToken }]) => {
                AUTH_TOKEN = dataToken.token;
                setPositions(dataPositions.positions);
                setLoading(false);
            })
            .catch(e => {
                if (e.name !== "CanceledError") {
                    setError(true);
                }
            })
        return () => controller.abort();
    }, [])
    return { positions, loading, error }
}

export const useGetUsers = (pageNumber: number) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [users, setUsers] = useState<Array<UsersType>>([]);
    const [hasMore, setHasMore] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        setError(false);
        axios({
            method: 'GET',
            url: 'https://frontend-test-assignment-api.abz.agency/api/v1/users',
            params: {
                page: pageNumber,
                count: 6
            },
            signal: controller.signal
        }).then(response => {
            setUsers((prev) => [...prev, ...response.data.users]);
            setHasMore(response.data.total_pages === pageNumber);
            setLoading(false);
        }).catch((e) => {
            if (e.name !== "CanceledError") {
                setError(true);
            }
        })

        return () => controller.abort();
    }, [pageNumber])

    return { loading, error, users, hasMore }
}

export const postSignUpForm = (
    formData: FormData,
    setIsResponseSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setPostError: React.Dispatch<React.SetStateAction<boolean>>,
    setPostLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {

    setPostLoading(true);
    setPostError(false);

    axios('https://frontend-test-assignment-api.abz.agency/api/v1/users', {
        data: formData
    })
        .then((response) => {
            setIsResponseSuccess(response.data.success);
            setPostLoading(false);
        })
        .catch(() => {
            setPostError(true);
        });
}
