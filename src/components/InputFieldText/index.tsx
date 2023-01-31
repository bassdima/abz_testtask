interface InputFieldTextProps {
    additionalClass?: string,
    placeholderText: string,
    type: string
}

export const InputFieldText = ({ additionalClass, placeholderText, type }: InputFieldTextProps) => {
    return (
        <div className="input-container">
            <input type={type} id={type} className={`input-container-field ${additionalClass}`} placeholder={placeholderText} />
            <label htmlFor={type} className="input-container-label">{placeholderText}</label>
        </div>
    );
}
