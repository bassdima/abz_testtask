import { CONTENT } from '../../constans';
import { Button } from '../index';

export const Description = () => {
    return (
        <div className="description-container">
            <h1>{CONTENT.TITLE_DESCRIPTION}</h1>
            <p>{CONTENT.TEXT_DESCRIPTION}</p>
            <Button
                children={<a href="#sign-up-section">Sign up</a>}
                additionalClass='sign-up-button'
            />
        </div>
    );
}
