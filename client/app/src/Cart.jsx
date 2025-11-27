import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useAppContext } from "./context/AppContext.jsx";

const Cart = () => {
  const navigate = useNavigate();
  const { cart, updateQuantity, removeFromCart, clearCart, totalPrice } = useAppContext();

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto bg-zinc-900/70 border border-orange-500/30 rounded-2xl p-6 md:p-8 shadow-[0_24px_80px_-40px_rgba(0,0,0,1)]">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400">корзина</p>
              <h1 className="text-3xl font-extrabold">Ваши товары и услуги</h1>
            </div>
            <button
              className="text-sm text-orange-400 hover:text-orange-300"
              onClick={() => navigate("/shop")}
            >
              Вернуться в магазин
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <p className="text-lg text-gray-300">Корзина пока пуста.</p>
              <button
                className="px-6 py-3 rounded-full bg-orange-500 text-black font-semibold uppercase tracking-wide hover:bg-orange-600 transition"
                onClick={() => navigate("/shop")}
              >
                Перейти в магазин
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="divide-y divide-zinc-800 border border-zinc-800 rounded-2xl">
                {cart.map((item) => (
                  <div
                    key={`${item.type}-${item.id}`}
                    className="flex flex-col md:flex-row md:items-center justify-between p-4 gap-4"
                  >
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.2em] text-orange-300">
                        {item.type === "service" ? "услуга" : "плагин"}
                      </p>
                      <h3 className="text-lg font-semibold">{item.name}</h3>
                      <p className="text-gray-400 text-sm">{item.price}</p>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-2 bg-black border border-zinc-700 rounded-full px-3 py-2">
                        <button
                          className="text-lg px-2"
                          onClick={() => updateQuantity(item.id, item.type, item.quantity - 1)}
                        >
                          −
                        </button>
                        <span className="w-10 text-center">{item.quantity}</span>
                        <button
                          className="text-lg px-2"
                          onClick={() => updateQuantity(item.id, item.type, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <p className="text-sm text-gray-400">Сумма</p>
                        <p className="text-lg font-semibold text-orange-400">
                          {(typeof item.price === "number" ? item.price : Number(item.price.replace(/\D/g, ""))) *
                            item.quantity}
                          ₽
                        </p>
                      </div>

                      <button
                        className="text-red-400 hover:text-red-300 text-sm"
                        onClick={() => removeFromCart(item.id, item.type)}
                      >
                        Удалить
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-zinc-950/80 border border-orange-500/20 rounded-2xl p-5">
                <div className="text-sm text-gray-300">
                  <p>Итого к оплате</p>
                  <p className="text-xs text-gray-500">Цены ориентировочные, точный расчёт после брифа.</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-2xl font-extrabold text-orange-400">{totalPrice} ₽</div>
                  <button
                    className="px-5 py-3 rounded-full bg-orange-500 text-black font-semibold uppercase tracking-wide hover:bg-orange-600 transition"
                    onClick={() => alert("Заказ оформлен! Мы свяжемся с вами.")}
                  >
                    Оформить заказ
                  </button>
                  <button
                    className="text-sm text-gray-400 hover:text-gray-200"
                    onClick={clearCart}
                  >
                    Очистить
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
