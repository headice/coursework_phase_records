import Home from "./Home.jsx";
import About from "./About.jsx";
import Contacts from "./Contacts.jsx";
import Shop from "./Shop.jsx";
import Registration from "./Registration.jsx";
import Cart from "./Cart.jsx";
import './input.css';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/contacts" element={<Contacts></Contacts>}></Route>
          <Route path="/shop" element={<Shop></Shop>}></Route>
          <Route path="/register" element={<Registration></Registration>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          
        
        </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
