import { content } from "../../constans";
import { SignUpForm } from "../index";

export const SignUpSection = () => {
    return (
        <div id="sign-up-section" className="sign-up-section">
            <h2>{content.TITLE_SIGNUP}</h2>
            <SignUpForm />
        </div>
    );
}