import { content } from "../../constans";
import { CardList, Button } from "../index";

export const UsersSection = () => {
    return (
        <div className="users-section-wrapper">
            <h2>{content.TITLE_USERSLIST}</h2>
            <CardList />
            <Button
                text="Show more"
                additionalClass="show-more-button"
            />
        </div>
    );
}