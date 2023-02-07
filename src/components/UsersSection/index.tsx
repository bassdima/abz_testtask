import { CONTENT } from "../../constans";
import { CardList, Button } from "../index";
import { useGetUsers } from "../../API";
import { useState, forwardRef } from "react";
import { useStartPreloader } from "../../hooks";

interface UsersSectionProps {
    startPreloader: React.Dispatch<React.SetStateAction<boolean>>
}

export const UsersSection = forwardRef(({ startPreloader }: UsersSectionProps, ref) => {
    const [pageNumber, setPageNumber] = useState<number>(1);
    const { loading, error, users, hasMore } = useGetUsers(pageNumber);

    useStartPreloader(startPreloader, loading);

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} id="users-section" className="users-section-wrapper">
            <h2 className="users-section-title">{CONTENT.TITLE_USERSLIST}</h2>
            <CardList
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
});
