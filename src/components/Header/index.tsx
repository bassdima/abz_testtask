import { ReactComponent as LogoSvg } from '../../images/Logo.svg';
import { Button } from '../index';
import { handleClick } from '../../helpers';

interface HeaderProps {
  refUsers: React.MutableRefObject<null>
  refSignUp: React.MutableRefObject<null>
}

export const Header = ({ refUsers, refSignUp }: HeaderProps) => {
  return (
    <div className="header">
      <div className='header-container'>
        <LogoSvg />
        <nav>
          <Button
            text='Users'
            additionalClass='users-button'
            onClickHandler={() => handleClick(refUsers)}
          />
          <Button
            text="Sign up"
            additionalClass='sign-up-button'
            onClickHandler={() => handleClick(refSignUp)}
          />
        </nav>
      </div>
    </div>
  );
}
