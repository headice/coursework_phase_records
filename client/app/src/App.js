import "./input.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { ShopProvider } from "./context/ShopContext";
import { AuthProvider } from "./context/AuthContext";
import PageTransition from "./components/PageTransition.jsx";

const Home = lazy(() => import("./Home.jsx"));
const About = lazy(() => import("./About.jsx"));
const Contacts = lazy(() => import("./Contacts.jsx"));
const Shop = lazy(() => import("./Shop.jsx"));
const Registration = lazy(() => import("./Registration.jsx"));
const Login = lazy(() => import("./Login.jsx"));
const Profile = lazy(() => import("./Profile.jsx"));
const Cart = lazy(() => import("./Cart.jsx"));
const Booking = lazy(() => import("./Booking.jsx"));
const ServiceDetails = lazy(() => import("./ServiceDetails.jsx"));
const PluginDetails = lazy(() => import("./PluginDetails.jsx"));

function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense
        fallback={
          <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="animate-pulse text-sm tracking-[0.25em] uppercase text-orange-400">
              Загрузка...
            </div>
          </div>
        }
      >
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
      </Suspense>
    </AnimatePresence>
  );
}

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <ShopProvider>
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </ShopProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
