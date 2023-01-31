import { content } from '../../constans';
import { Button } from '../index';

export const Description = () => {
    return (
        <div className="description-container">
            <h1>{content.TITLE_DESCRIPTION}</h1>
            <p>{content.TEXT_DESCRIPTION}</p>
            <Button
                children={<a href="#sign-up-section">Sign up</a>}
                additionalClass='sign-up-button'
            />
        </div>
    );
}
