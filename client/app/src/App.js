import './input.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from "./About.jsx";
import Booking from "./Booking.jsx";
import Cart from "./Cart.jsx";
import Contacts from "./Contacts.jsx";
import Home from "./Home.jsx";
import Login from "./Login.jsx";
import PluginDetails from "./PluginDetails.jsx";
import Registration from "./Registration.jsx";
import ServiceDetails from "./ServiceDetails.jsx";
import Shop from "./Shop.jsx";
import { ShopProvider } from "./context/ShopContext";
import Profile from "./Profile.jsx";

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/register" element={<Registration />} />
            <Route path="/login" element={<Login />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/services/:serviceId" element={<ServiceDetails />} />
            <Route path="/plugins/:pluginId" element={<PluginDetails />} />
          </Routes>
        </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
