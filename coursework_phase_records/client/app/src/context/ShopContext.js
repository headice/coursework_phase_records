import { createContext, useCallback, useMemo, useState } from "react";
import { plugins, services } from "../data/catalog";

export const ShopContext = createContext({
  services: [],
  plugins: [],
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  bookings: [],
  bookService: () => {},
  requests: [],
  addRequest: () => {},
});

export function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [requests, setRequests] = useState([]);

  const catalogServices = useMemo(() => services, []);
  const catalogPlugins = useMemo(() => plugins, []);

  const addToCart = useCallback((item) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (cartItem) => cartItem.id === item.id && cartItem.type === item.type
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem.id === item.id && cartItem.type === item.type
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  }, []);

  const clearCart = useCallback(() => setCartItems([]), []);

  const bookService = useCallback((booking) => {
    setBookings((prev) => [
      ...prev,
      {
        ...booking,
        id: `${booking.serviceId}-${Date.now()}`,
        createdAt: new Date().toISOString(),
      },
    ]);
  }, []);

  const addRequest = useCallback((request) => {
    setRequests((prev) => [
      ...prev,
      {
        ...request,
        id: `request-${Date.now()}`,
        createdAt: new Date().toISOString(),
      },
    ]);
  }, []);

  const value = useMemo(
    () => ({
      services: catalogServices,
      plugins: catalogPlugins,
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      bookings,
      bookService,
      requests,
      addRequest,
    }),
    [
      catalogPlugins,
      catalogServices,
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      bookings,
      bookService,
      requests,
      addRequest,
    ]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
