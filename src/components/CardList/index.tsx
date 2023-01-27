import { UserCard } from "../UserCard";
import data from '../../../data.json';

export const CardList = () => {
    return (
        <div className="card-list-wrapper">
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
            <UserCard/>
        </div>
    );
}