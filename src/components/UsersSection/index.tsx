import { content } from "../../constans";
import { CardList, Button } from "../index";
import { useGetUsers } from "../../API_request";
import { useState } from "react";

export const UsersSection = () => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { loading, error, users, hasMore } = useGetUsers(pageNumber);

    return (
        <div id="users-section" className="users-section-wrapper">
            <h2>{content.TITLE_USERSLIST}</h2>
            <CardList
                isLoading={loading}
                isError={error}
                usersList={users}
            />
            {!hasMore &&
                <Button
                    text="Show more"
                    additionalClass="show-more-button"
                    onClickHandler={() => setPageNumber(pageNumber + 1)}
                />
            }
        </div>
    );
}
