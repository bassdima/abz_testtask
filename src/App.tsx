import { useState } from 'react';
import {
  Header,
  Description,
  UsersSection,
  SignUpSection,
  ModalWindow
} from './components';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='app-wrapper'>
      <ModalWindow isLoading={isLoading} />
      <Header />
      <div className="content-wrapper">
        <Description />
        <UsersSection startPreloader={setIsLoading} />
        <SignUpSection startPreloader={setIsLoading} />
      </div>
    </div>
  );
}
