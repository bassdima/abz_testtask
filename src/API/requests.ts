import axios from 'axios';
import { PositionsType, UsersType } from '../models';

const instance = axios.create({
    baseURL: 'https://frontend-test-assignment-api.abz.agency/api/v1',
    headers: { 'Token': localStorage.getItem('token') && localStorage.getItem('token') }
});

export const postSignUpForm = (
    values: FormData,
    setIsResponseSuccess: React.Dispatch<React.SetStateAction<boolean>>,
    setPostError: React.Dispatch<React.SetStateAction<boolean>>,
    setPostLoading: React.Dispatch<React.SetStateAction<boolean>>,
    userExist: React.Dispatch<React.SetStateAction<boolean>>
) => {

    setPostLoading(true);
    setPostError(false);

    instance
        .post('/users', values)
        .then((response) => {
            setIsResponseSuccess(response.data.success);
            setPostLoading(false);
            setTimeout(() => {
                document.location.reload();
            }, 1500)
        })
        .catch((e) => {
            userExist(e.response.data.message === "User with this phone or email already exist");
            setPostError(true);
            setTimeout(() => {
                document.location.reload();
            }, 1500)
        });
}

export const getDataForSignUpForm = (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setPositions: React.Dispatch<React.SetStateAction<PositionsType[]>>,
) => {
    const controller = new AbortController();
    const endpoints = ['/positions', '/token'];

    setLoading(true);
    setError(false);
    Promise.all(
        endpoints.map((endpoint) => instance.get(endpoint, { signal: controller.signal }))
    )
        .then(([{ data: dataPositions }, { data: dataToken }]) => {
            localStorage.setItem('token', dataToken.token);
            setPositions(dataPositions.positions);
            setLoading(false);
        })
        .catch(e => {
            if (e.name !== "CanceledError") {
                setError(true);
            }
        })
    return () => controller.abort();
}

export const getUsers = (
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setError: React.Dispatch<React.SetStateAction<boolean>>,
    setUsers: React.Dispatch<React.SetStateAction<UsersType[]>>,
    setHasMore: React.Dispatch<React.SetStateAction<boolean>>,
    pageNumber: number
) => {
    const controller = new AbortController();

    setLoading(true);
    setError(false);
    instance
        .get('/users', {
            params: {
                page: pageNumber,
                count: 6
            },
            signal: controller.signal
        })
        .then(response => {
            setUsers((prev) => [...prev, ...response.data.users]);
            setHasMore(response.data.total_pages === pageNumber);
            setLoading(false);
        }).catch((e) => {
            if (e.name !== "CanceledError") {
                setError(true);
            }
        })

    return () => controller.abort();
}
