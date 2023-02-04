interface InputFieldTextProps {
    additionalClass?: string,
    placeholderText: string,
    type: string,
    name: string
    handleChange: React.ChangeEventHandler<HTMLInputElement>,
    handleBlur: React.FocusEventHandler<HTMLInputElement>,
    formValue: string,
    children: JSX.Element | null
}

export const InputFieldText = ({
    additionalClass,
    placeholderText,
    type,
    name,
    handleChange,
    handleBlur,
    formValue,
    children
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
                onBlur={handleBlur}
                value={formValue}
            />
            <label htmlFor={type} className="input-container-label">{placeholderText}</label>
            {children}
        </div>
    );
}
