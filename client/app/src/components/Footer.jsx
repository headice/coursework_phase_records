import React from "react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-orange-500/20 bg-black/95 text-white py-10 px-4 mt-auto">
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

            <button className="inline-flex items-center justify-center rounded-full border border-orange-400/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.2em] bg-black hover:bg-orange-400 hover:text-black transition-colors">
              Связаться
            </button>
          </div>

          {/* Правые колонки */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-sm">
            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-3">
                Услуги
              </h3>
              <ul className="space-y-2 text-[13px]">
                {[
                  "Все услуги",
                  "Запись",
                  "Сведение и мастеринг",
                  "Создание бита",
                  "Текст на заказ",
                  "Продвижение артистов",
                  "Выгрузка релиза",
                ].map((t) => (
                  <li key={t}>
                    <a
                      href="#"
                      className="hover:text-orange-300 transition-colors"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-3">
                О нас
              </h3>
              <ul className="space-y-2 text-[13px]">
                {[
                  "Оборудование",
                  "Контакты",
                  "С кем работали",
                  "Студии Phase Records",
                ].map((t) => (
                  <li key={t}>
                    <a
                      href="#"
                      className="hover:text-orange-300 transition-colors"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.28em] text-neutral-500 mb-3">
                More info
              </h3>
              <ul className="space-y-2 text-[13px]">
                {["FAQ", "Цены", "Статьи", "Отзывы"].map((t) => (
                  <li key={t}>
                    <a
                      href="#"
                      className="hover:text-orange-300 transition-colors"
                    >
                      {t}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Нижний блок */}
        <div className="border-top border-orange-500/20 pt-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
              Мы в сети
            </span>
            <div className="flex items-center gap-2">
              {["VK", "TG", "IG*"].map((label) => (
                <button
                  key={label}
                  className="w-8 h-8 rounded-full border border-orange-500/60 bg-neutral-900 flex items-center justify-center text-[11px] font-semibold text-neutral-200 hover:bg-orange-400 hover:text-black transition-colors"
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="text-[11px] text-neutral-500 md:text-right space-y-1">
            <p>© 2025, Phase Records. Все права защищены.</p>
            <p>Сделано с вниманием к звуку и деталям.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
