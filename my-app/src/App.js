 
import './App.css';
import Login from"./Pages/Login"
import Sign from"./Pages/Sign"
import Navbar from"./Pages/Navbar"
import Home from"./Pages/Home"
import Products from"./Pages/Products"
import Allroute from './AllRoutes/AllRote';
import ProducShow from"./Pages/Productshow"
function App() {
  return (
    <div className="App">
    <Navbar/> 
      <Allroute/>
     {/* <Login/> */}
     {/* <Sign/> */}
     {/* <DarkVariantExample/> */}
     {/* <ProducShow/> */}
     {/* <ProducShow/> */}
     {/* <ProducShow/> */}
    </div>
  );
}

export default App;
