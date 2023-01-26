import { ReactComponent as LogoSvg } from '../../assets/Logo.svg';
import { Button } from '../Button';

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
