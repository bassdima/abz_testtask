import { InputFieldText, Button } from "../index";
import { content } from "../../constans";
import { useState } from "react";
import { ChangeEvent } from "react";

export const SignUpForm = () => {
    const [file, setFile] = useState<any>();

    const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            setFile(e.target.files[0].name);
        }
    };

    const limitCharacters = (item: string, numOfCharacters: number) => {
        if (item.length > numOfCharacters) {
            return `${item.substring(0, numOfCharacters)}...`;
        }
        else {
            return item;
        }
    }

    return (
        <form className="form-wrapper" action="">
            <div className="form-wrapper-inputs">
                <InputFieldText
                    placeholderText="Your name"
                    type="name"
                />
                <InputFieldText
                    placeholderText="Email"
                    type="email"
                />
                <InputFieldText
                    placeholderText="Phone"
                    type="phone"
                />
            </div>
            <p className="filling-example">{content.EXAMPLE_PHONE}</p>
            <p className="title-positions">{content.TITLE_POSITIONS}</p>
            <div className="radio-btn-container">
                <label className="radio-btn">
                    <input type="radio" name="radio-btn" defaultChecked />
                    <span className="checkmark" />
                    Frontend developer
                </label>
                <label className="radio-btn">
                    <input type="radio" name="radio-btn" />
                    <span className="checkmark" />
                    Backend developer
                </label>
                <label className="radio-btn">
                    <input type="radio" name="radio-btn" />
                    <span className="checkmark" />
                    Designer
                </label>
                <label className="radio-btn">
                    <input type="radio" name="radio-btn" />
                    <span className="checkmark" />
                    QA
                </label>
            </div>
            <div className="file-upload-wrapper">
                <input
                    name="file-upload-field"
                    type="file"
                    className="file-upload-field"
                    onChange={handleFileChange}
                    value="" />
                <div className="upload-btn">Upload</div>
                <div
                    className="file-name"
                    style={{ color: file ? 'rgba(0, 0, 0, 0.87)' : '#7E7E7E' }}
                >
                    {file ? limitCharacters(file, 25) : 'Upload your photo'}
                </div>
            </div>
            <Button
                children={<a href="#">Sign up</a>}
                additionalClass='sign-up-button'
            />
        </form>
    );
}