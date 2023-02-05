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
            <p className="user-card-name tooltip-parent" style={{ cursor: userName.length > 25 ? 'pointer' : 'default' }}>{limitCharacters(userName, 25)}</p>
            {userName.length > 25 && <div className="tooltip tooltip-name">{userName}</div>}
            <p className="user-card-position">{position}</p>
            <p className="user-card-email tooltip-parent" style={{ cursor: email.length > 25 ? 'pointer' : 'default' }}>{limitCharacters(email, 25)}</p>
            {email.length > 25 && <div className="tooltip tooltip-email">{email}</div>}
            <p className="user-card-phone">{phone}</p>
        </div>
    );
}
