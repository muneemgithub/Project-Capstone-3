import './App.css';
import Navbar from './Components/Header/header';
import HomePage from './Components/Home/homepage';
import Login from './Components/Login/login';
import Sidebar from './Components/Slice/Sidebar/sidebar';
import NotFoundPage from './Components/Error/error';

function App() {
  return (
    <div>
      {/* <Sidebar/> */}
      {/* <Navbar/> */}
      {/* <Login/> */}
      <HomePage/>
      {/* <NotFoundPage/> */}
    </div>
  );
}

export default App;
