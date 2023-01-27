import { Header, Description } from './components';

export const App = () => {
  return (
    <div className='app-wrapper'>
      <Header />
      <div className="content-wrapper">
          <Description />
      </div>
    </div>
  );
}
