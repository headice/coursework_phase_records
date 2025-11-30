import { createContext, useMemo, useState } from "react";
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

  const addToCart = (item) => {
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
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((cartItem) => cartItem.id !== id));
  };

  const clearCart = () => setCartItems([]);

  const bookService = (booking) => {
    setBookings((prev) => [
      ...prev,
      {
        ...booking,
        id: `${booking.serviceId}-${Date.now()}`,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const addRequest = (request) => {
    setRequests((prev) => [
      ...prev,
      {
        ...request,
        id: `request-${Date.now()}`,
        createdAt: new Date().toISOString(),
      },
    ]);
  };

  const value = useMemo(
    () => ({
      services,
      plugins,
      cartItems,
      addToCart,
      removeFromCart,
      clearCart,
      bookings,
      bookService,
      requests,
      addRequest,
    }),
    [cartItems, bookings, requests]
  );

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
}
