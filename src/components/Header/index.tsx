import { ReactComponent as LogoSvg } from '../../images/Logo.svg';
import { Button } from '../index';

export const Header = () => {
  return (
    <div className="header">
      <div className='header-container'>
        <LogoSvg />
        <nav>
          <Button
            children={<a href="#">Users</a>}
            additionalClass='users-button'
          />
          <Button
            children={<a href="#">Sign up</a>}
            additionalClass='sign-up-button'
          />
        </nav>
      </div>
    </div>
  );
}
