import photo from './1552910703187.jpg'

export const UserCard = () => {
    return (
        <div className="user-card">
            <img className="user-card-avatar" src={photo} alt="user-avatar" />
            <p className="user-card-name">Angel</p>
            <p className="user-card-position">Designer</p>
            <p className="user-card-email">angel.williams@example.com</p>
            <p className="user-card-phone">+380496540023</p>
        </div>
    );
}