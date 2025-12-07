import React from "react";
import "./input.css";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const Contacts = () => {
  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      {/* HERO */}
      <section className="relative w-full overflow-hidden border-b border-zinc-900/40 backdrop-blur-[1px]">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
        <div className="absolute -right-40 -top-40 w-96 h-96 rounded-full bg-orange-500/10 blur-3xl" />
        <div className="absolute -left-40 bottom-0 w-96 h-96 rounded-full bg-orange-500/5 blur-3xl" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 flex flex-col lg:flex-row gap-12 lg:gap-20 items-end lg:items-center">
          {/* Left */}
          <div className="flex-1 space-y-6 max-w-xl">
            <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400">
              контакты студии
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              КАК <span className="text-orange-500">С НАМИ СВЯЗАТЬСЯ?</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed">
              Как нас найти, вопросы по релизам, коммерческие предложения и
              сотрудничество — выберите удобный способ связи, и мы ответим
              максимально быстро.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="https://t.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-sm md:text-base font-semibold uppercase tracking-wide shadow-[0_18px_45px_-18px_rgba(249,115,22,1)] transition"
              >
                Написать в Telegram
              </a>
              <a
                href="mailto:hello@phaserecords.ru"
                className="px-6 py-3 rounded-full border border-orange-500/40 bg-black/70 hover:bg-black text-xs md:text-sm uppercase tracking-wide text-gray-200 transition"
              >
                Написать на почту
              </a>
            </div>
          </div>

          {/* CTA Down */}
          <div className="flex-1 w-full max-w-md lg:max-w-sm flex justify-center lg:justify-end">
            <a
              href="#contact-form"
              className="flex flex-col items-center gap-3 text-xs text-zinc-500 tracking-[0.25em] uppercase"
            >
              <span className="h-16 w-px bg-zinc-700" />
              <svg
                className="w-5 h-5 text-zinc-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
              </svg>
              <span>к форме ниже</span>
            </a>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <main className="flex-1">
        {/* Contact + Form */}
        <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          {/* soft separators */}
          <div className="absolute -top-16 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-black/40 pointer-events-none" />
          <div className="absolute -bottom-16 left-0 right-0 h-16 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

          <div className="relative grid gap-12 lg:gap-20 lg:grid-cols-[1.1fr,1fr] items-start">
            {/* Left */}
            <div className="space-y-10">
              <div className="space-y-3">
                <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400">
                  связь с нами
                </p>

                <h2 className="text-2xl sm:text-3xl font-semibold">
                  Как удобнее выйти на контакт
                </h2>

                <p className="text-sm sm:text-base text-gray-300 max-w-xl leading-relaxed">
                  Можно сразу прислать демо или референсы — так быстрее станет понятно,
                  что нужно по звуку. Если вы только на стадии идеи — просто расскажите,
                  что хотите сделать.
                </p>
              </div>

              {/* Contact items */}
              <div className="grid gap-6 sm:grid-cols-2">
                {/* Phone */}
                <div className="space-y-1 border-t border-zinc-800 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    телефон / WhatsApp
                  </p>
                  <a
                    href="tel:+79999999999"
                    className="block text-base sm:text-lg font-medium text-white hover:text-orange-400 transition-colors"
                  >
                    +7 (908) 987-65-43
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Пн–Вс, 12:00 — 00:00 (MSK+7)
                  </p>
                </div>

                {/* Telegram */}
                <div className="space-y-1 border-t border-zinc-800 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    telegram
                  </p>
                  <a
                    href="https://t.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base sm:text-lg font-medium text-orange-400 hover:text-orange-300 transition-colors"
                  >
                    @phase_records999
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Быстрее всего отвечаем здесь
                  </p>
                </div>

                {/* Email */}
                <div className="space-y-1 border-t border-zinc-800 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    e-mail
                  </p>
                  <a
                    href="mailto:i_am_headice@mail.ru"
                    className="block text-base sm:text-lg font-medium text-white hover:text-orange-300 transition-colors"
                  >
                    i_am_headice@mail.ru
                  </a>
                  <p className="text-xs text-gray-500 mt-1">
                    Для коммерческих предложений
                  </p>
                </div>

                {/* Studio */}
                <div className="space-y-1 border-t border-zinc-800 pt-4">
                  <p className="text-[11px] uppercase tracking-[0.25em] text-gray-500">
                    студия
                  </p>
                  <p className="text-base sm:text-lg font-medium text-white">
                    Владивосток, ул. Алеутская, д.12
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Точный адрес — после брони
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div
              id="contact-form"
              className="border border-zinc-800 rounded-3xl p-6 sm:p-8 bg-black/60"
            >
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400 mb-3">
                краткая заявка
              </p>

              <p className="text-sm sm:text-base text-gray-300 mb-6 leading-relaxed">
                Оставьте контакты и пару строк о задаче — вернёмся с предложением по
                формату и ближайшим свободным слотам.
              </p>

              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                    имя / артист
                  </label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться"
                    className="w-full border-b border-zinc-700 bg-transparent px-0 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                    контакт
                  </label>
                  <input
                    type="text"
                    placeholder="Телеграм, телефон или e-mail"
                    className="w-full border-b border-zinc-700 bg-transparent px-0 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-orange-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-[11px] uppercase tracking-[0.2em] text-gray-500">
                    кратко о задаче
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Запись, сведение, мастеринг, полный цикл — опишите, что планируете"
                    className="w-full border-b border-zinc-700 bg-transparent px-0 py-2 text-sm text-white placeholder:text-zinc-500 outline-none focus:border-orange-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-4 w-full sm:w-auto px-8 py-3 rounded-full bg-white text-black text-sm font-semibold uppercase tracking-[0.18em] hover:bg-zinc-200 transition-colors"
                >
                  отправить
                </button>

                <p className="text-[11px] text-zinc-500 leading-relaxed pt-2">
                  Мы не передаём ваши данные третьим лицам.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* GEOLOCATION */}
        <section className="relative border-t border-zinc-900/50 bg-black/95 py-24">
          {/* background glows */}
          <div className="absolute -right-40 top-20 w-[32rem] h-[32rem] bg-orange-500/5 rounded-full blur-3xl" />
          <div className="absolute -left-40 bottom-20 w-[28rem] h-[28rem] bg-orange-500/5 rounded-full blur-3xl" />

          {/* top fade */}
          <div className="absolute left-0 right-0 -top-10 h-10 bg-gradient-to-b from-transparent to-black/60" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-14 md:grid-cols-2">
            {/* Text */}
            <div className="space-y-8">
              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400">
                геолокация студии
              </p>

              <h2 className="text-3xl sm:text-4xl font-semibold">
                Где находится PHASE Records
              </h2>

              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                Студия находится недалеко от центра Владивостока. Удобный подъезд,
                парковка и доступность транспорта. После брони мы пришлём точный маршрут
                и фото входа.
              </p>

              {/* Address */}
              <div className="space-y-2 text-sm text-gray-200">
                <p className="font-medium text-white">Владивосток, ул. Алеутская, 12</p>
                <p className="text-gray-400">
                  вход через арку, 3 этаж, студия PHASE Records
                </p>
              </div>

              {/* Directions */}
              <div className="grid gap-6 sm:grid-cols-3 pt-6 text-xs sm:text-sm">
                <div className="space-y-1">
                  <p className="uppercase tracking-[0.18em] text-gray-500">на авто</p>
                  <p className="text-gray-400">
                    Парковка во дворе и вдоль улицы, вечером найти место легче.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="uppercase tracking-[0.18em] text-gray-500">транспорт</p>
                  <p className="text-gray-400">
                    Остановка в 5–7 минутах, маршруты сообщим после брони.
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="uppercase tracking-[0.18em] text-gray-500">ориентиры</p>
                  <p className="text-gray-400">
                    Рядом маркет и кафе — удобно прийти заранее.
                  </p>
                </div>
              </div>

              <p className="text-xs text-zinc-500">
                Если едете впервые — отправим геопоинт и подскажем маршрут.
              </p>
            </div>

            {/* MAP (Yandex) */}
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950/80 overflow-hidden h-80 lg:h-[28rem] shadow-[0_25px_80px_-40px_rgba(0,0,0,1)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d312197.4773645539!2d4.904647!3d52.315226!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38df0ee10d595%3A0xd13358f088f2714a!2z0YPQuy4g0JDQu9C10YPRgtGB0LrQsNGPLCAxMiwg0JLQu9Cw0LTQuNCy0L7RgdGC0L7Quiwg0J_RgNC40LzQvtGA0YHQutC40Lkg0LrRgNCw0LksIDY5MDAwMA!5e0!3m2!1sru!2sru!4v1763977609560!5m2!1sru!2sru"
                width="100%"
                height="100%"
                frameBorder="0"
              ></iframe>
            </div>
          </div>

          {/* bottom fade */}
          <div className="absolute left-0 right-0 -bottom-10 h-10 bg-gradient-to-t from-transparent to-black/60" />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contacts;
