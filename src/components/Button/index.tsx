interface ButtonProps {
    text?: string,
    children?: JSX.Element,
    onClickHandler?: React.MouseEventHandler<HTMLButtonElement>,
    additionalClass?: string
}

export const Button = ({text, children, onClickHandler, additionalClass}: ButtonProps) => {
  return (
    <button onClick={onClickHandler} className={`button ${additionalClass}`}>
        {text}
        {children}
    </button>
  );
}
