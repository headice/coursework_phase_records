import Home from "./Home.jsx";
import About from "./About.jsx";
import Contacts from "./Contacts.jsx";
import Shop from "./Shop.jsx";
import Registration from "./Registration.jsx";
import Cart from "./Cart.jsx";
import Login from "./Login.jsx";
import "./input.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext.jsx";

function App() {
  return (
    <div className="App">
      <AppProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/about" element={<About></About>}></Route>
            <Route path="/contacts" element={<Contacts></Contacts>}></Route>
            <Route path="/shop" element={<Shop></Shop>}></Route>
            <Route path="/register" element={<Registration></Registration>}></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/cart" element={<Cart></Cart>}></Route>
          </Routes>
        </BrowserRouter>
      </AppProvider>
    </div>
  );
}

export default App;
