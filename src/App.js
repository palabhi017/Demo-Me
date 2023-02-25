import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import AllRoutes from "./Pages/AllRoutes";
import Footer from "./Components/Footer";

import SmallNavbar from "./Components/Navbar/SmallNavbar";
import GoOnTop from "./Components/GoOnTop";

function App() {
  return (
    <div className="App">
      <div className="big">
        <Navbar />
      </div>
      <div className="small">
        <SmallNavbar />
      </div>

      <AllRoutes />
      <Footer />
      <GoOnTop />
    </div>
  );
}

export default App;
