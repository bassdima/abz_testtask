import { UserCard } from "../index";
import { UsersType } from "../../models";
import { useSortUserList } from "../../hooks";

interface CardListProps {
    isError: boolean,
    usersList: UsersType[]
}

export const CardList = ({ isError, usersList }: CardListProps) => {
    const sort = useSortUserList(usersList)

    return (
        <div className="card-list-wrapper">
            {isError ?
                <h2>Error</h2>
                :
                sort.map((item) =>
                    <UserCard
                        key={item.id}
                        avatar={item.photo}
                        userName={item.name}
                        position={item.position}
                        email={item.email}
                        phone={item.phone}
                    />
                )
            }
        </div>
    );
}
