import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../img/logo-rackext-svgrepo-com.svg";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { useAppContext } from "../context/AppContext.jsx";

export default function Header() {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { user, cart, logout } = useAppContext();

  useEffect(() => {
    let lastScroll = 0;
    const handleScroll = () => {
      const current = window.scrollY;
      setHidden(current > lastScroll && current > 80);
      lastScroll = current;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (path) => {
    const protectedRoutes = ["/profile", "/transit"];

    if (protectedRoutes.includes(path) && !user?.token) {
      const confirmLogin = window.confirm(
        "Войдите или зарегистрируйтесь для доступа к ресурсу"
      );
      if (confirmLogin) return navigate("/login");
      return;
    }

    navigate(path);
  };

  const isAuth = !!user?.token;

  const navItems = [
    { label: "Главная", path: "/" },
    { label: "О нас", path: "/about" },
    { label: "Контакты", path: "/contacts" },
    { label: "Магазин", path: "/shop" },
  ];

  return (
    <header
      className={`
        fixed top-0 left-0 w-full z-50 transition-transform duration-300 font-sans
        ${hidden ? "-translate-y-full" : "translate-y-0"}
        bg-black/80 backdrop-blur-xl border-b border-orange-500/20
      `}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 md:px-6 py-3">
        {/* Лого + подпись */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="flex items-center justify-center w-11 h-11 rounded-2xl bg-orange-500/10 border border-orange-500/40">
            <img src={Logo} alt="Logo" className="h-7" />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-xs uppercase tracking-[0.25em] text-orange-400">
              phase records
            </span>
            <span className="text-[11px] text-gray-400">
              студия звукозаписи 
            </span>
          </div>
        </div>

        {/* Навигация — десктоп */}
        <nav className="hidden md:flex items-center gap-7 text-sm text-gray-100 font-medium">
          {navItems.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className="relative pb-1 hover:text-orange-400 transition-colors"
            >
              {item.label}
              <span className="absolute left-0 -bottom-[3px] h-[2px] w-0 bg-orange-500 transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Иконки */}
        <div className="hidden md:flex items-center space-x-4 text-gray-100">
          <button
            className="hover:text-orange-400 transition"
            onClick={() => navigate("/cart")}
          >
            <div className="relative">
              <ShoppingCart size={22} />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-500 text-black text-[10px] font-bold rounded-full px-1.5 py-0.5">
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              )}
            </div>
          </button>

          <button
            className="hover:text-orange-400 transition"
            onClick={() => handleNavigation("/profile")}
          >
            <User size={22} />
          </button>

          {isAuth ? (
            <div className="flex items-center gap-3">
              <div className="text-xs text-gray-400">{user?.username}</div>
              <button
                className="ml-2 text-xs font-medium uppercase tracking-wide text-gray-300 hover:text-orange-400 transition"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Выйти
              </button>
            </div>
          ) : (
            <>
              <button
                className="text-xs uppercase tracking-wide hover:text-orange-400 transition"
                onClick={() => navigate("/register")}
              >
                Регистрация
              </button>
              <button
                className="text-xs uppercase tracking-wide hover:text-orange-400 transition"
                onClick={() => navigate("/login")}
              >
                Вход
              </button>
            </>
          )}
        </div>

        {/* Бургер */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-gray-100"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Мобильное меню */}
      {mobileOpen && (
        <div className="md:hidden bg-black/95 text-gray-100 px-6 pb-4 pt-2 space-y-3 border-t border-orange-500/30">
          {[
            ...navItems,
            { label: "Корзина", path: "/cart" },
            { label: "Профиль", path: "/profile" },
          ].map((item) => (
            <button
              key={item.path}
              onClick={() => {
                handleNavigation(item.path);
                setMobileOpen(false);
              }}
              className="block w-full text-left py-2 text-base hover:text-orange-400 transition"
            >
              {item.label}
            </button>
          ))}

          {!isAuth ? (
            <>
              <button
                className="block w-full py-2 text-left text-sm uppercase tracking-wide hover:text-orange-400"
                onClick={() => navigate("/register")}
              >
                Регистрация
              </button>
              <button
                className="block w-full py-2 text-left text-sm uppercase tracking-wide hover:text-orange-400"
                onClick={() => navigate("/login")}
              >
                Вход
              </button>
            </>
          ) : (
            <button
              className="block w-full py-2 text-left text-sm uppercase tracking-wide hover:text-orange-400"
              onClick={logout}
            >
              Выйти
            </button>
          )}
        </div>
      )}
    </header>
  );
}
