import { createContext, useCallback, useEffect, useMemo, useState } from "react";

const TEST_PROFILE = {
  email: "demo@phase.studio",
  password: "phase123",
  username: "Phase Demo",
};

export const AuthContext = createContext({
  user: null,
  isAuthenticated: false,
  register: () => {},
  login: () => {},
  loginTestProfile: () => {},
  logout: () => {},
  requireAuth: () => false,
  testProfile: TEST_PROFILE,
});

export function AuthProvider({ children }) {
  const [token, setToken] = useState(() => localStorage.getItem("token"));
  const [user, setUser] = useState(() => {
    const stored = localStorage.getItem("user");
    return stored ? JSON.parse(stored) : null;
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("user");
    }
  }, [user]);

  const register = useCallback((payload) => {
    const username = payload.username || payload.email?.split("@")[0] || "Гость";
    const registeredUser = {
      username,
      email: payload.email,
      password: payload.password,
      testProfile: false,
    };
    setUser(registeredUser);
    setToken("phase-demo-token");
    return registeredUser;
  }, []);

  const login = useCallback(({ email, password }) => {
    if (email === TEST_PROFILE.email && password === TEST_PROFILE.password) {
      setUser({
        username: TEST_PROFILE.username,
        email: TEST_PROFILE.email,
        testProfile: true,
      });
      setToken("phase-demo-token");
      return { success: true };
    }

    const stored = localStorage.getItem("user");
    if (stored) {
      const parsed = JSON.parse(stored);
      if (parsed.email === email && parsed.password === password) {
        setUser(parsed);
        setToken("phase-demo-token");
        return { success: true };
      }
    }

    return {
      success: false,
      error:
        "Неверные данные. Используйте тестовый профиль или зарегистрируйтесь.",
    };
  }, []);

  const loginTestProfile = useCallback(() => {
    setUser({
      username: TEST_PROFILE.username,
      email: TEST_PROFILE.email,
      testProfile: true,
    });
    setToken("phase-demo-token");
    return { success: true };
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUser(null);
  }, []);

  const requireAuth = useCallback(
    (onFail) => {
      if (token) return true;
      if (onFail) onFail();
      return false;
    },
    [token]
  );

  const value = useMemo(
    () => ({
      user,
      isAuthenticated: Boolean(token),
      register,
      login,
      loginTestProfile,
      logout,
      requireAuth,
      testProfile: TEST_PROFILE,
    }),
    [login, loginTestProfile, logout, register, requireAuth, token, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
