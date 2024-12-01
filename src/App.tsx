import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Article from './HomePage/Article';
import NavBar from './Navigation/NavBar';
import Sidebar from './Navigation/SideBar';

function App() {
  return (
    <>
      <NavBar />
      <div className='flex flex-col items-center justify-center align-middle'>
        <Sidebar />
        <Article />
        <Article />
        <Article />
        <Article />
      </div>
    </>
  );
}

export default App;
