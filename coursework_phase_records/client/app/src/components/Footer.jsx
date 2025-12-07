import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleContact = () => navigate("/contacts");
  const handleBooking = () => navigate("/booking");

  // Услуги
  const servicesLinks = [
    { label: "Все услуги", to: "/shop" },
    { label: "Запись", to: "/services/recording" },
    { label: "Сведение и мастеринг", to: "/services/mix" },
    { label: "Создание бита", to: "/shop" },
    { label: "Текст на заказ", to: "/shop" },
    { label: "Продвижение артистов", to: "/services/promo" },
    { label: "Выгрузка релиза", to: "/services/fullsong" },
  ];

  // 🔥 Колонка "О нас" — те же ссылки, что в хедере (без корзины и профиля)
  const aboutLinks = [
    { label: "Главная", to: "/" },
    { label: "О нас", to: "/about" },
    { label: "Контакты", to: "/contacts" },
    { label: "Магазин", to: "/shop" },
    { label: "Бронирование", to: "/booking" },
  ];

  const moreLinks = [
    { label: "FAQ", to: "/faq" },
    { label: "Цены", to: "/pricing" },
    { label: "Статьи", to: "/blog" },
    { label: "Отзывы", to: "/reviews" },
  ];

  const socials = [
    { label: "VK", href: "https://vk.com" },
    { label: "TG", href: "https://t.me" },
    { label: "IG*", href: "https://instagram.com" },
  ];

  return (
    <footer className="w-full border-t border-white/10 bg-neutral-950 text-white py-10 px-4 mt-auto">
      <div className="max-w-7xl mx-auto space-y-8">
        {/* Верхний блок */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Левая колонка */}
          <div className="space-y-4 max-w-sm">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              phase records
            </p>
            <h2 className="text-2xl font-semibold">
              Студия звукозаписи во Владивостоке
            </h2>
            <p className="text-sm text-neutral-300">
              Запись, сведение, мастеринг, продакшн и сопровождение релизов.
              Работаем с артистами и брендами онлайн и офлайн.
            </p>

            <button
              onClick={handleContact}
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] bg-white text-black hover:bg-orange-500 hover:text-black transition-colors"
            >
              Связаться
            </button>
          </div>

          {/* Правые колонки */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            {/* Услуги */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-3">
                Услуги
              </h3>
              <ul className="space-y-2 text-[13px]">
                {servicesLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => navigate(item.to)}
                      className="hover:text-orange-300 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* О нас — те же ссылки, что в хедере */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-3">
                Навигация
              </h3>
              <ul className="space-y-2 text-[13px]">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => navigate(item.to)}
                      className="hover:text-orange-300 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* More info */}
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-3">
                More info
              </h3>
              <ul className="space-y-2 text-[13px]">
                {moreLinks.map((item) => (
                  <li key={item.label}>
                    <button
                      onClick={() => navigate(item.to)}
                      className="hover:text-orange-300 transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Нижний блок */}
        <div className="border-t border-white/10 pt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
              Мы в сети
            </span>
            <div className="flex items-center gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full border border-white/20 bg-black flex items-center justify-center text-[11px] font-semibold text-neutral-200 hover:border-orange-400 hover:text-orange-300 transition-colors"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-neutral-500 md:text-right space-y-1">
            <p>© 2025, Phase Records. Все права защищены.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
