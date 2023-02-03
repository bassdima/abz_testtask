import { ChangeEventHandler } from "react";

interface InputFieldTextProps {
    additionalClass?: string,
    placeholderText: string,
    type: string,
    name: string
    handleChange: ChangeEventHandler<HTMLInputElement>,
    formValue: string,
    error: string | undefined
}

export const InputFieldText = ({
    additionalClass,
    placeholderText,
    type,
    name,
    handleChange,
    formValue,
    error
}: InputFieldTextProps) => {
    return (
        <div className="input-container">
            <input
                type={type}
                id={type}
                className={`input-container-field ${additionalClass}`}
                placeholder={placeholderText}
                name={name}
                onChange={handleChange}
                value={formValue}
            />
            <label htmlFor={type} className="input-container-label">{placeholderText}</label>
            <div>{error}</div>
        </div>
    );
}
