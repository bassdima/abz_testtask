import { content } from '../../constans';
import { Button } from '../Button';

export const Description = () => {
    return (
        <div className="description-container">
            <h1>{content.TITLE_DESCRIPTION}</h1>
            <p>{content.TEXT_DESCRIPTION}</p>
            <Button
                children={<a href="#">Sign up</a>}
                additionalClass='sign-up-button'
            />
        </div>
    );
}
