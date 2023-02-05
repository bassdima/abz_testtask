import { useState, useRef } from 'react';
import {
  Header,
  Description,
  UsersSection,
  SignUpSection,
  ModalWindow
} from './components';

export const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const refUsers = useRef(null);
  const refSignUp = useRef(null);

  return (
    <div className='app-wrapper'>
      <ModalWindow isLoading={isLoading} />
      <Header refUsers={refUsers} refSignUp={refSignUp}/>
      <div className="content-wrapper">
        <Description ref={refSignUp}/>
        <UsersSection ref={refUsers} startPreloader={setIsLoading} />
        <SignUpSection ref={refSignUp} startPreloader={setIsLoading} />
      </div>
    </div>
  );
}
