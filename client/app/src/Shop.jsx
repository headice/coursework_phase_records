import React, { useContext } from "react";
import "./input.css";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { ShopContext } from "./context/ShopContext";

const Shop = () => {
  const { services, plugins, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleServiceClick = (serviceId) => navigate(`/services/${serviceId}`);
  const handleServiceBooking = (serviceId) => navigate(`/booking?service=${serviceId}`);

  const handlePluginClick = (pluginId) => navigate(`/plugins/${pluginId}`);
  const handleAddToCart = (plugin) => {
    addToCart({
      id: plugin.id,
      name: plugin.name,
      price: plugin.price,
      type: "plugin",
      tag: plugin.tag,
    });
    navigate("/cart");
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO МАГАЗИНА */}
        <section className="relative w-full overflow-hidden border-b border-zinc-900/40">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-end lg:items-center">
            <div className="flex-1 space-y-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400">phase shop</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                Услуги студии и плагины,
                <span className="block text-orange-500">которыми мы пользуемся</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-200 max-w-2xl">
                Добавляйте услуги в бронирование или плагины в корзину. Каждая карточка открывается для подробностей.
              </p>
              <div className="flex flex-wrap gap-3">
                <button
                  onClick={() => navigate("/booking")}
                  className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-sm font-semibold uppercase tracking-wide text-black shadow-[0_18px_45px_-18px_rgba(249,115,22,1)] transition"
                >
                  Забронировать студию
                </button>
                <button
                  onClick={() => navigate("/cart")}
                  className="px-6 py-3 rounded-full border border-orange-500/40 bg-black/70 hover:bg-black text-xs uppercase tracking-wide text-gray-200 transition"
                >
                  Перейти в корзину
                </button>
              </div>
            </div>

            <div className="flex-1 w-full max-w-lg bg-gradient-to-br from-orange-500/10 via-black to-black rounded-3xl p-6 border border-orange-500/30">
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-3">быстрый старт</p>
              <p className="text-sm text-gray-200">
                Оставьте заявку на бронирование или добавьте плагины в корзину. Мы пришлём инструкции по оплате и установке.
              </p>
              <div className="mt-4 space-y-2 text-xs text-gray-400">
                <p>Все кнопки активны: вы можете открыть подробности, оформить заказ или бронирование.</p>
                <p>При покупке плагинов отправим лицензию и ссылку на загрузку.</p>
              </div>
            </div>
          </div>
        </section>

        {/* УСЛУГИ */}
        <section className="py-16 bg-gradient-to-b from-black via-black to-zinc-950">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-2">услуги студии</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold">Запись, сведение, продакшн</h2>
                <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
                  Клик по карточке откроет подробности и точный состав услуги, а кнопка сразу ведёт на бронирование.
                </p>
              </div>

              <div className="text-xs sm:text-sm text-orange-300">
                <p>Онлайн-бронирование доступно 24/7.</p>
                <p>Быстрый отклик и подтверждение времени.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group flex flex-col sm:flex-row gap-4 bg-zinc-950/70 border border-orange-500/20 rounded-2xl overflow-hidden shadow-[0_24px_80px_-40px_rgba(0,0,0,1)] hover:border-orange-500/50 transition"
                >
                  <div
                    className="w-full sm:w-1/3 h-40 sm:h-auto bg-cover bg-center"
                    style={{ backgroundImage: `url(${service.image})` }}
                    onClick={() => handleServiceClick(service.id)}
                    role="button"
                    tabIndex={0}
                  />

                  <div className="flex-1 flex flex-col p-5 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold">{service.title}</h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">{service.shortDescription}</p>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex flex-col">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">ориентир по стоимости</span>
                        <span className="text-sm font-semibold text-orange-400">{service.price}</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handleServiceClick(service.id)}
                          className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-colors"
                        >
                          Подробнее
                        </button>
                        <button
                          onClick={() => handleServiceBooking(service.id)}
                          className="px-4 py-2 rounded-full border border-orange-500/40 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-200 hover:text-orange-300 hover:border-orange-400 transition-colors"
                        >
                          Забронировать
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ПЛАГИНЫ И СОФТ */}
        <section className="py-20 bg-gradient-to-b from-black via-black to-orange-900/20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-2">плагины и инструменты</p>
                <h2 className="text-3xl sm:text-4xl font-extrabold">Софт, с которым мы работаем сами</h2>
                <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
                  Плагины и наборы, которые используются в наших сессиях: синты, обработка и наборы для микса и мастера.
                </p>
              </div>

              <div className="text-xs sm:text-sm text-orange-300">
                <p>Предзаказ даёт доступ к обновлениям,</p>
                <p>а также скидку до выхода релизной версии.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {plugins.map((plugin) => (
                <div
                  key={plugin.id}
                  className="bg-black/85 border border-orange-500/30 rounded-2xl overflow-hidden flex flex-col shadow-[0_24px_80px_-40px_rgba(0,0,0,1)]"
                >
                  <button type="button" className="relative h-36" onClick={() => handlePluginClick(plugin.id)}>
                    <img src={plugin.image} alt={plugin.name} className="w-full h-full object-cover" />
                    {plugin.discount && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-[11px] font-bold uppercase tracking-[0.18em] text-black">
                        {plugin.discount}
                      </div>
                    )}
                  </button>

                  <div className="flex-1 flex flex-col px-5 pt-4 pb-4 space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-orange-300">plugin</p>
                    <h3 className="text-sm font-extrabold tracking-wide uppercase">{plugin.name}</h3>
                    <p className="text-[11px] text-gray-400">{plugin.tag}</p>
                    <p className="text-xs text-gray-300 leading-relaxed">{plugin.description}</p>

                    <div className="mt-3 flex items-end justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-orange-400">{plugin.price}</span>
                        <span className="text-xs text-gray-500 line-through">{plugin.oldPrice}</span>
                      </div>

                      <div className="flex flex-col gap-2">
                        <button
                          onClick={() => handlePluginClick(plugin.id)}
                          className="px-4 py-2 rounded-full border border-orange-500/40 text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-200 hover:text-orange-300 hover:border-orange-400 transition-colors"
                        >
                          Подробнее
                        </button>
                        <button
                          onClick={() => handleAddToCart(plugin)}
                          className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-colors"
                        >
                          В корзину
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[11px] text-gray-500 max-w-xl">
              После оформления заявки на плагины вы получите письмо с инструкцией по активации, лицензии и последующим обновлениям.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
