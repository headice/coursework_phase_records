import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const AppContext = createContext(null);

const STORAGE_KEYS = {
  cart: "phase_records_cart",
  user: "phase_records_user",
};

const parsePrice = (priceLabel) => {
  if (!priceLabel) return 0;
  const numeric = priceLabel.toString().match(/\d+[\s\d]*/g);
  if (!numeric) return 0;
  return Number(numeric.join("").replace(/\s/g, ""));
};

export const AppProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.cart);
    return saved ? JSON.parse(saved) : [];
  });

  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.user);
    return saved ? JSON.parse(saved) : null;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    if (user) {
      localStorage.setItem(STORAGE_KEYS.user, JSON.stringify(user));
      localStorage.setItem("token", user.token);
    } else {
      localStorage.removeItem(STORAGE_KEYS.user);
      localStorage.removeItem("token");
    }
  }, [user]);

  const addToCart = (item) => {
    setCart((prev) => {
      const existing = prev.find((entry) => entry.id === item.id && entry.type === item.type);
      if (existing) {
        return prev.map((entry) =>
          entry.id === item.id && entry.type === item.type
            ? { ...entry, quantity: entry.quantity + 1 }
            : entry
        );
      }
      return [...prev, { ...item, quantity: 1 }];
    });
  };

  const updateQuantity = (id, type, quantity) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id && item.type === type ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id, type) => {
    setCart((prev) => prev.filter((item) => !(item.id === id && item.type === type)));
  };

  const clearCart = () => setCart([]);

  const registerUser = ({ username, email, password }) => {
    const newUser = {
      username,
      email,
      token: `phase-token-${Date.now()}`,
      password,
    };
    setUser(newUser);
    return newUser;
  };

  const login = ({ email, password }) => {
    if (!user) throw new Error("Сначала зарегистрируйтесь");
    if (user.email !== email || user.password !== password) {
      throw new Error("Неверный email или пароль");
    }
    setUser({ ...user, token: `phase-token-${Date.now()}` });
  };

  const logout = () => setUser(null);

  const totalPrice = useMemo(
    () =>
      cart.reduce((sum, item) => {
        const price = typeof item.price === "number" ? item.price : parsePrice(item.price);
        return sum + price * item.quantity;
      }, 0),
    [cart]
  );

  const value = {
    cart,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalPrice,
    user,
    registerUser,
    login,
    logout,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
};
