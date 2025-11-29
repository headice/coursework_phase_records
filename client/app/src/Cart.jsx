import { useContext, useMemo, useState } from "react";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { ShopContext } from "./context/ShopContext";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(ShopContext);
  const [checkedOut, setCheckedOut] = useState(false);

  const total = useMemo(() => {
    return cartItems.reduce((sum, item) => {
      const numeric = parseInt(item.price.replace(/\D/g, ""), 10);
      return sum + numeric * item.quantity;
    }, 0);
  }, [cartItems]);

  const handleCheckout = () => {
    clearCart();
    setCheckedOut(true);
    setTimeout(() => setCheckedOut(false), 4000);
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400">корзина</p>
              <h1 className="text-3xl font-extrabold">Ваши покупки</h1>
            </div>
            <p className="text-sm text-gray-300">Все кнопки активны: можно удалить или оформить заказ.</p>
          </div>

          {cartItems.length === 0 && !checkedOut && (
            <p className="mt-8 text-gray-400">Пока пусто. Добавьте услуги или плагины из магазина.</p>
          )}

          {checkedOut && (
            <p className="mt-6 text-orange-300 bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3 text-sm">
              Заказ оформлен! Мы пришлём инструкцию по оплате и доступам.
            </p>
          )}

          <div className="mt-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={`${item.type}-${item.id}`}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-zinc-950/70 border border-orange-500/20 rounded-2xl p-5"
              >
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-300">{item.type}</p>
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-400">{item.tag}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="text-sm text-gray-400">Количество</p>
                    <p className="text-xl font-semibold text-orange-300">{item.quantity} шт.</p>
                    <p className="text-sm text-gray-400">{item.price} / единица</p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="px-4 py-2 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))}
          </div>

          {cartItems.length > 0 && (
            <div className="mt-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <p className="text-sm text-gray-400">Предварительная сумма</p>
                <p className="text-2xl font-bold text-orange-400">{total.toLocaleString("ru-RU")} ₽</p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={clearCart}
                  className="px-5 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                >
                  Очистить
                </button>
                <button
                  onClick={handleCheckout}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold uppercase tracking-wide shadow-[0_14px_40px_-18px_rgba(249,115,22,0.8)] hover:scale-[1.01] transition"
                >
                  Оформить заказ
                </button>
              </div>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
