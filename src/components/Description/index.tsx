import { CONTENT } from '../../constans';
import { Button } from '../index';
import { forwardRef } from 'react';
import { handleClick } from '../../helpers';

export const Description = forwardRef((props, ref) => {
    return (
        <div ref={ref as React.RefObject<HTMLDivElement>} className="description-container">
            <h1>{CONTENT.TITLE_DESCRIPTION}</h1>
            <p>{CONTENT.TEXT_DESCRIPTION}</p>
            <Button
                text="Sign up"
                additionalClass='sign-up-button'
                onClickHandler={() => handleClick(ref)}
            />
        </div>
    );
});
