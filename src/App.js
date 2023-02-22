

import "./App.css";
import Navbar from "./Components/Navbar/Navbar"
import SmallNavbar from "./Components/Navbar/SmallNavbar"
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer"
import Card  from "./Components/Card";
import Productpage from "./Pages/Productpage";

// import Footer from "./Components/Footer";
import SignIn from "./Pages/SignIn";
import LoginPage from "./Pages/LoginPage";
import Footer from "./Components/Footer";
function App() {

  return <div className="App">
    <Navbar/>
   
    <AllRoutes/>
    
     <Footer/>
  
 </div>;

}

export default App;
