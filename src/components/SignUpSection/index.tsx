import { CONTENT } from "../../constans";
import { SignUpForm } from "../index";
import { useState, forwardRef } from "react";
import { ReactComponent as SuccessImage } from '../../images/success-image.svg';

interface SignUpSectionProps {
    startPreloader: React.Dispatch<React.SetStateAction<boolean>>,
}

export const SignUpSection = forwardRef(({ startPreloader }: SignUpSectionProps, ref) => {
    const [isResponseSuccess, setIsResponseSuccess] = useState(false);
    const [isResponseWithError, setIsResponseWithError] = useState(false);
    const [isUserAlreadyExist, setIsUserAlreadyExist] = useState(false);

    return (
        <div ref={ref as React.RefObject<HTMLDivElement>}>
            {isResponseWithError && !isUserAlreadyExist ?
                <div  id="sign-up-section" className="sign-up-section">
                    <h2>{CONTENT.TITLE_POST_ERROR}</h2>
                </div>
            :            
            isUserAlreadyExist ?
                <div id="sign-up-section" className="sign-up-section">
                    <h2>{CONTENT.TITLE_USERS_EXIST}</h2>
                </div>
            :
            isResponseSuccess ?
                <div id="sign-up-section" className="sign-up-section success-registration">
                    <h2>{CONTENT.TITLE_SUCCESS}</h2>
                    <SuccessImage />
                </div>
            :
            <div id="sign-up-section" className="sign-up-section">
                <h2>{CONTENT.TITLE_SIGNUP}</h2>
                <SignUpForm
                    startPreloader={startPreloader}
                    isResponseWithError={setIsResponseWithError}
                    isResponseSuccess={setIsResponseSuccess}
                    userExist={setIsUserAlreadyExist}
                />
            </div>
            }
        </div>
    );
});
