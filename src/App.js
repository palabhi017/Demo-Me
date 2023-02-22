import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import SmallNavbar from "./Components/Navbar/SmallNavbar"
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer"
import Card  from "./Components/Card";
import Productpage from "./Pages/Productpage";

function App() {
  return <div className="App">
    <Navbar/>
   
    <AllRoutes/>
    
     <Footer/>
  
 </div>;
}

export default App;
