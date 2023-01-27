import { Header, Description, UsersSection } from './components';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className="content-wrapper">
        <Description />
        <UsersSection />
      </div>
    </div>
  );
}
