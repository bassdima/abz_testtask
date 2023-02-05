interface ButtonProps {
    text: string,
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>,
    additionalClass: string,
    btnType?: 'submit',
    isDisabled?: boolean
}

export const Button = ({ text, onClickHandler, additionalClass, btnType, isDisabled }: ButtonProps) => {
    return (
        <button onClick={onClickHandler} className={`button ${additionalClass}`} type={btnType} disabled={isDisabled}>
            {text}
        </button >
    );
}
