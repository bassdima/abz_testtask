interface ButtonProps {
    text?: string,
    children?: JSX.Element,
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>,
    additionalClass: string,
    btnType?: 'submit',
}

export const Button = ({ text, children, onClickHandler, additionalClass, btnType }: ButtonProps) => {
    return (
        <button onClick={onClickHandler} className={`button ${additionalClass}`} type={btnType} >
            {text}
            {children}
        </button >
    );
}
