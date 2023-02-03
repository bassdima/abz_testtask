import { limitCharacters } from "../../helpers";
import photoCover from "../../images/photo-cover.svg";
import { imageOnError } from "../../helpers";

interface UserCardProps {
    avatar: string,
    userName: string,
    position: string,
    email: string,
    phone: string
}

export const UserCard = ({ avatar, userName, position, email, phone }: UserCardProps) => {
    return (
        <div className="user-card">
            <img
                className="user-card-avatar"
                src={avatar || photoCover} onError={(e) => imageOnError(e, photoCover)}
                alt="user-avatar"
            />
            <p className="user-card-name">{limitCharacters(userName, 25)}</p>
            <p className="user-card-position">{position}</p>
            <p className="user-card-email">{limitCharacters(email, 25)}</p>
            <p className="user-card-phone">{phone}</p>
        </div>
    );
}
