import React, { useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ShopContext } from "./context/ShopContext";
import "./input.css";

const Profile = () => {
  const navigate = useNavigate();
  const { bookings, cartItems } = useContext(ShopContext);
  const username = localStorage.getItem("username") || "Гость";

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const numeric = parseInt(item.price.replace(/\D/g, ""), 10);
      return sum + numeric * item.quantity;
    }, 0);
  }, [cartItems]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden border-b border-orange-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_20%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_80%_35%,rgba(249,115,22,0.16),transparent_28%)]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
            <div className="flex flex-col gap-4 sm:items-center sm:flex-row sm:justify-between">
              <div className="space-y-2">
                <p className="text-[11px] uppercase tracking-[0.26em] text-orange-400">профиль</p>
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">Добро пожаловать, {username}</h1>
                <p className="text-sm sm:text-base text-gray-300 max-w-2xl">
                  Здесь собраны ваши заявки на бронирование и содержимое корзины. Можно быстро перейти к новым заказам.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => navigate("/booking")}
                  className="px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold uppercase tracking-wide shadow-[0_14px_40px_-18px_rgba(249,115,22,0.8)]"
                >
                  Новая заявка
                </button>
                <button
                  onClick={handleLogout}
                  className="px-5 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                >
                  Выйти
                </button>
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              <div className="bg-zinc-950/70 border border-orange-500/25 rounded-2xl p-6 space-y-4 shadow-[0_24px_90px_-50px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-orange-300">бронирования</p>
                  <button
                    onClick={() => navigate("/booking")}
                    className="text-xs uppercase tracking-wide text-orange-300 hover:text-orange-200"
                  >
                    Оставить заявку
                  </button>
                </div>

                {bookings.length === 0 ? (
                  <p className="text-sm text-gray-400">Здесь появятся заявки после отправки формы бронирования.</p>
                ) : (
                  <div className="space-y-3">
                    {bookings.map((booking) => (
                      <div
                        key={booking.id}
                        className="p-4 rounded-xl bg-black/60 border border-orange-500/20 flex flex-col gap-1 text-sm text-gray-200"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-orange-300 font-semibold">{booking.serviceId}</span>
                          <span className="text-gray-400 text-xs">{new Date(booking.createdAt).toLocaleString()}</span>
                        </div>
                        <p>Дата: {booking.date || "не выбрана"}</p>
                        <p>Время: {booking.time || "не выбрано"}</p>
                        <p>Контакт: {booking.contact}</p>
                        {booking.comment && <p className="text-gray-400">Комментарий: {booking.comment}</p>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="bg-zinc-950/70 border border-orange-500/25 rounded-2xl p-6 space-y-4 shadow-[0_24px_90px_-50px_rgba(0,0,0,1)]">
                <div className="flex items-center justify-between">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-orange-300">корзина</p>
                  <button
                    onClick={() => navigate("/shop")}
                    className="text-xs uppercase tracking-wide text-orange-300 hover:text-orange-200"
                  >
                    В магазин
                  </button>
                </div>

                {cartItems.length === 0 ? (
                  <p className="text-sm text-gray-400">Корзина пуста. Добавьте плагины из магазина.</p>
                ) : (
                  <div className="space-y-3">
                    {cartItems.map((item) => (
                      <div
                        key={`${item.type}-${item.id}`}
                        className="p-4 rounded-xl bg-black/60 border border-orange-500/20 flex items-center justify-between gap-3 text-sm text-gray-200"
                      >
                        <div className="space-y-1">
                          <p className="text-xs uppercase tracking-[0.2em] text-orange-300">{item.type}</p>
                          <p className="text-base font-semibold">{item.name}</p>
                          <p className="text-gray-400 text-xs">{item.tag}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-gray-400">Количество: {item.quantity}</p>
                          <p className="text-lg font-semibold text-orange-300">{item.price}</p>
                        </div>
                      </div>
                    ))}

                    <div className="flex items-center justify-between pt-2 border-t border-orange-500/10">
                      <span className="text-sm text-gray-400">Итого</span>
                      <span className="text-xl font-bold text-orange-400">{total.toLocaleString("ru-RU")} ₽</span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => navigate("/cart")}
                        className="flex-1 px-5 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold uppercase tracking-wide"
                      >
                        Перейти в корзину
                      </button>
                      <button
                        onClick={() => navigate("/booking")}
                        className="flex-1 px-5 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                      >
                        Забронировать услугу
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
