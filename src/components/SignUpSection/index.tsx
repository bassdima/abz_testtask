import { CONTENT } from "../../constans";
import { SignUpForm } from "../index";

interface SignUpSectionProps {
    startPreloader: React.Dispatch<React.SetStateAction<boolean>>
}

export const SignUpSection = ({ startPreloader }: SignUpSectionProps) => {
    return (
        <div id="sign-up-section" className="sign-up-section">
            <h2>{CONTENT.TITLE_SIGNUP}</h2>
            <SignUpForm startPreloader={startPreloader} />
        </div>
    );
}