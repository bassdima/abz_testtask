import { Header, Description, UsersSection, SignUpSection } from './components';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className="content-wrapper">
        <Description />
        <UsersSection />
        <SignUpSection />
      </div>
    </div>
  );
}
