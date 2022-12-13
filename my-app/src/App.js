 
import './App.css';
import Login from"./Pages/Login"
import Sign from"./Pages/Sign"
import Navbar from"./Pages/Navbar"
import Home from"./Pages/Home"
import Allroute from './AllRoutes/AllRote';
function App() {
  return (
    <div className="App">
    <Navbar/>
     <Allroute/>
     {/* <Login/> */}
     {/* <Sign/> */}
    </div>
  );
}

export default App;
