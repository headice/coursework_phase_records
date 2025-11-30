import './input.css';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from "framer-motion";
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
import PageTransition from "./components/PageTransition.jsx";

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/contacts" element={<PageTransition><Contacts /></PageTransition>} />
        <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
        <Route path="/register" element={<PageTransition><Registration /></PageTransition>} />
        <Route path="/login" element={<PageTransition><Login /></PageTransition>} />
        <Route path="/profile" element={<PageTransition><Profile /></PageTransition>} />
        <Route path="/cart" element={<PageTransition><Cart /></PageTransition>} />
        <Route path="/booking" element={<PageTransition><Booking /></PageTransition>} />
        <Route path="/services/:serviceId" element={<PageTransition><ServiceDetails /></PageTransition>} />
        <Route path="/plugins/:pluginId" element={<PageTransition><PluginDetails /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <ShopProvider>
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </ShopProvider>
    </div>
  );
}

export default App;
