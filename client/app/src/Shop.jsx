import React from "react";
import "./input.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { useAppContext } from "./context/AppContext.jsx";

// Картинки услуг (те же, что используются в Services.jsx)
import arr from "./img/arr.jpg";
import mix from "./img/mix.jpg";
import record from "./img/record.jpg";
import fullsong from "./img/fullsong.jpg";
import promo from "./img/promo.jpg";

// Картинки плагинов (те же, что в PluginsInfo.jsx)
import serumimg from "./img/serum2-hero-min.png";
import nexus5 from "./img/nexus_5.png";
import wavesImg from "./img/waves_bundle.jpg";
import fabfilterImg from "./img/fabfilter_pro_bundle.jpg";

const services = [
  {
    id: 1,
    title: "Аранжировки и минусовки",
    img: arr,
    description:
      "Создание авторских аранжировок и минусов под любой стиль. Работа по референсам или с нуля.",
    from: "от 4 000 ₽",
  },
  {
    id: 2,
    title: "Сведение и мастеринг",
    img: mix,
    description:
      "Приводим трек к релизному звучанию: баланс, панорама, глубина, loudness под площадки.",
    from: "от 3 500 ₽",
  },
  {
    id: 3,
    title: "Запись вокала и инструментов",
    img: record,
    description:
      "Профессиональная запись в студии: подбор микрофона, подсказки по подаче и бэкам.",
    from: "от 1 500 ₽ / час",
  },
  {
    id: 4,
    title: "Песня под ключ",
    img: fullsong,
    description:
      "От идеи и текста до полностью готового релиза с аранжировкой, записью и сведением.",
    from: "от 15 000 ₽",
  },
  {
    id: 5,
    title: "Продвижение артистов",
    img: promo,
    description:
      "Стратегия выхода релиза, плейлисты, оформление и рекомендации по промо.",
    from: "индивидуально",
  },
];

const plugins = [
  {
    id: 1,
    name: "SERUM 2",
    img: serumimg,
    tag: "таблично-волновой синтезатор",
    description:
      "Новая версия легендарного синта: улучшенный движок, грануляция и обновлённые осцилляторы.",
    price: "3 990 ₽",
    oldPrice: "9 990 ₽",
    discount: "-60%",
  },
  {
    id: 2,
    name: "FabFilter Total Bundle",
    img: fabfilterImg,
    tag: "EQ, компрессия, лимитинг",
    description:
      "Полный набор плагинов FabFilter для микса и мастеринга в топовом качестве.",
    price: "4 990 ₽",
    oldPrice: "12 990 ₽",
    discount: "-60%",
  },
  {
    id: 3,
    name: "Waves Bundle",
    img: wavesImg,
    tag: "классические эмуляции",
    description:
      "Большая коллекция Waves: компрессоры, эквалайзеры, эффекты и мастеринговые решения.",
    price: "2 990 ₽",
    oldPrice: "7 490 ₽",
    discount: "-60%",
  },
  {
    id: 4,
    name: "Nexus 5",
    img: nexus5,
    tag: "ромплер и пресеты",
    description:
      "Огромная библиотека готовых звуков под любую электронную музыку и поп.",
    price: "3 490 ₽",
    oldPrice: "8 990 ₽",
    discount: "-60%",
  },
];

const Shop = () => {
  const { addToCart } = useAppContext();
  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO МАГАЗИНА */}
        <section className="relative w-full overflow-hidden border-b border-zinc-900/40">
          {/* Фон */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-end lg:items-center">
            {/* Левая колонка */}
            <div className="flex-1 max-w-xl space-y-6">
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400">
                магазин phase records
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                МАГАЗИН
                <span className="block text-orange-500">
                  УСЛУГ И ПЛАГИНОВ
                </span>
              </h1>

              <p className="text-lg text-gray-300 leading-relaxed">
                Здесь можно заказать услуги студии и оформить пресейл плагинов,
                с которыми мы работаем. Всё, что нужно артисту: от записи и
                сведения до авторского софта.
              </p>

              <div className="flex flex-wrap gap-3 pt-1 text-xs sm:text-sm">
                <span className="px-4 py-2 rounded-full border border-orange-500/40 bg-black/70 uppercase tracking-[0.18em] text-gray-200">
                  студийные услуги
                </span>
                <span className="px-4 py-2 rounded-full border border-orange-500/40 bg-black/70 uppercase tracking-[0.18em] text-gray-200">
                  плагины и daw-инструменты
                </span>
              </div>
            </div>

            {/* Правая колонка */}
            
          </div>
        </section>

        {/* УСЛУГИ СТУДИИ */}
        <section className="py-20 bg-gradient-to-b from-black via-zinc-950 to-black border-b border-zinc-900/40">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
              <div>
                <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-2">
                  услуги студии
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  Всё, что нужно для релиза
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
                  Полный цикл: от аранжировки и записи до мастеринга и
                  продвижения. Все услуги можно комбинировать и собирать в
                  пакет под ваш проект.
                </p>
              </div>

              <div className="text-xs sm:text-sm text-gray-400">
                <p>Цены указаны ориентировочно,</p>
                <p>точный расчёт — после короткого брифа по проекту.</p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group bg-zinc-950/80 border border-zinc-800 rounded-2xl overflow-hidden flex flex-col shadow-[0_20px_60px_-40px_rgba(0,0,0,1)]"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/70 border border-orange-500/50 text-[10px] uppercase tracking-[0.22em] text-orange-200">
                      услуга
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col p-5 space-y-3">
                    <h3 className="text-sm sm:text-base font-semibold">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between pt-3">
                      <div className="flex flex-col">
                        <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
                          ориентир по стоимости
                        </span>
                        <span className="text-sm font-semibold text-orange-400">
                          {service.from}
                        </span>
                      </div>

                      <button
                        className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-colors"
                        onClick={() =>
                          addToCart({
                            id: service.id,
                            type: "service",
                            name: service.title,
                            price: service.from,
                          })
                        }
                      >
                        В корзину
                      </button>
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
                <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-2">
                  плагины и инструменты
                </p>
                <h2 className="text-3xl sm:text-4xl font-extrabold">
                  Софт, с которым мы работаем сами
                </h2>
                <p className="mt-3 text-sm sm:text-base text-gray-300 max-w-xl">
                  Плагины и наборы, которые используются в наших сессиях: синты,
                  обработка и наборы для микса и мастера.
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
                  <div className="relative h-36">
                    <img
                      src={plugin.img}
                      alt={plugin.name}
                      className="w-full h-full object-cover"
                    />
                    {plugin.discount && (
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-orange-500 text-[11px] font-bold uppercase tracking-[0.18em] text-black">
                        {plugin.discount}
                      </div>
                    )}
                  </div>

                  <div className="flex-1 flex flex-col px-5 pt-4 pb-4 space-y-2">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-orange-300">
                      plugin
                    </p>
                    <h3 className="text-sm font-extrabold tracking-wide uppercase">
                      {plugin.name}
                    </h3>
                    <p className="text-[11px] text-gray-400">{plugin.tag}</p>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      {plugin.description}
                    </p>

                    <div className="mt-3 flex items-end justify-between gap-2">
                      <div className="flex flex-col">
                        <span className="text-lg font-semibold text-orange-400">
                          {plugin.price}
                        </span>
                        <span className="text-xs text-gray-500 line-through">
                          {plugin.oldPrice}
                        </span>
                      </div>

                      <button
                        className="px-4 py-2 rounded-full bg-orange-500 hover:bg-orange-600 text-[11px] font-semibold uppercase tracking-[0.18em] text-black transition-colors"
                        onClick={() =>
                          addToCart({
                            id: plugin.id,
                            type: "plugin",
                            name: plugin.name,
                            price: plugin.price,
                          })
                        }
                      >
                        В корзину
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-6 text-[11px] text-gray-500 max-w-xl">
              После оформления заявки на плагины вы получите письмо с инструкцией
              по активации, лицензии и последующим обновлениям.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Shop;
