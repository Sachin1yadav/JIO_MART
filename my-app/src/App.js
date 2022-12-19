// import ProductCord from "./Pages/ProductCord";
import "./App.css";
// import Loading from "./Pages/Loading";
// import Login from "./Pages/Login";
// import LargeWithLogoLeft from"./Pages/Footer"
// import Sign from "./Pages/Sign";
import Navbar from "./Pages/Navbar";
// import Home from "./Pages/Home";
// import Products from "./Pages/Products";
import Allroute from "./AllRoutes/AllRote";
// import ProducShow from "./Pages/Productshow";
// import Details from"./Pages/Details"
 
function App() {
  return (
    <div className="App">
      <Navbar/>     
       <Allroute/>
      {/* <Loading /> */}
      
    </div>
  );
}

export default App;
