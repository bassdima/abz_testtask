import { CONTENT } from "../../constans"

interface InputFieldTextProps {
    additionalClass?: string,
    placeholderText: string,
    type: string,
    name: string
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    formValue: string,
    error: string | null | undefined,
    errorClass: string
}

export const InputFieldText = ({
    additionalClass,
    placeholderText,
    type,
    name,
    handleChange,
    handleBlur,
    formValue,
    error,
    errorClass
}: InputFieldTextProps) => {
    return (
        <div className="input-container">
            <input
                type={type}
                id={type}
                className={`input-container-field ${error ? "input-container-field-error" : "input-container-field-correct"}`}
                placeholder={placeholderText}
                name={name}
                onChange={handleChange}
                onBlur={handleBlur}
                value={formValue}
            />
            <label htmlFor={type} className="input-container-label">{placeholderText}</label>
            <div className={name === "phone" && !error ? additionalClass : errorClass}>
                {name === "phone" && !error ? CONTENT.EXAMPLE_PHONE : error}
            </div>
        </div>
    );
}
