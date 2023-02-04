import { UserCard } from "../index";
import { UsersType } from "../../models";
import { compare } from "../../helpers";

interface CardListProps {
    isError: boolean,
    usersList: UsersType[]
}

export const CardList = ({ isError, usersList }: CardListProps) => {
    return (
        <div className="card-list-wrapper">
            {isError && <h2>Error</h2>}
            {usersList.sort((a, b) => compare(a, b, 'desc')).map((item) => {
                return <UserCard
                    key={`${item.id}${item.name}`}
                    avatar={item.photo}
                    userName={item.name}
                    position={item.position}
                    email={item.email}
                    phone={item.phone}
                />
            })}
        </div>
    );
}
