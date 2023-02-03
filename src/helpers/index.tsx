import { UsersType } from "../models";

export const limitCharacters = (item: string, numOfCharacters: number) => {
    if (item.length > numOfCharacters) {
        return `${item.substring(0, numOfCharacters)}...`;
    }
    else {
        return item;
    }
}

export const imageOnError = (event: any, photo: string) => {
    event.target.src = photo;
};

export const compare = (a: UsersType, b: UsersType, order: string) => {
    if (order === 'asc') return a.registration_timestamp - b.registration_timestamp;
    if (order === 'desc') return b.registration_timestamp - a.registration_timestamp;
    else return 0;
}
