import React from "react";
import { useNavigate } from "react-router-dom";
import "./input.css";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Credits from "./components/Credits.jsx";
import AudioPlayerForDemo from "./components/AudioPlayerForDemo.jsx";
import HardwareAndSoftwareInfo from "./components/HardwareAndSofrwareInfo.jsx";
import PluginsInfo from "./components/PluginsInfo.jsx";

const Home = () => {
  const navigate = useNavigate();

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/shop");
    }
  };

  const goToBooking = () => navigate("/booking");

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* HERO / MELON-STYLE */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Фоновые градиенты */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[url('./img/zvukovoi-mikser-v-studii-bg2.jpg')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-orange-900/40" />
            <div className="absolute -left-40 top-1/4 w-80 h-80 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute right-[-120px] bottom-0 w-96 h-96 rounded-full bg-orange-500/15 blur-3xl" />
          </div>

          {/* Контент */}
          <div className="relative z-10 w-full max-w-6xl px-4 md:px-6 lg:px-8 py-28 flex flex-col lg:flex-row items-center lg:items-end gap-12">
            {/* Левая колонка — текст */}
            <div className="flex-1 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-500/40 bg-black/60 text-[11px] uppercase tracking-[0.25em] text-orange-300 mb-6">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                студия звукозаписи
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
                PHASE
                <span className="text-orange-500"> RECORDS</span>
              </h1>

              <p className="mt-4 text-lg md:text-xl text-gray-200 max-w-lg">
                Место, где треки становятся релизами. Запись, сведение, мастеринг,
                авторский продакшн и техническая поддержка на каждом этапе выхода
                релиза.
              </p>

              {/* Быстрые фичи */}
              <div className="mt-6 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.2em] text-gray-300">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
                  
                  запись / сведение / мастеринг
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
                  
                  авторский продакшн
                </span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur">
                  
                  релизы на всех площадках
                </span>
              </div>

              {/* CTA-кнопки */}
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={goToBooking}
                  className="px-10 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-sm md:text-base font-semibold uppercase tracking-wide shadow-[0_18px_45px_-18px_rgba(249,115,22,1)] transition"
                >
                  Забронировать время
                </button>

                <button
                  onClick={scrollToServices}
                  className="px-6 py-3 rounded-full border border-orange-500/40 bg-black/60 hover:bg-black text-xs md:text-sm uppercase tracking-wide text-gray-200 transition"
                >
                  Смотреть услуги
                </button>
              </div>

              {/* Немного «соцдоказательств» */}
              <div className="mt-6 flex flex-wrap gap-6 text-xs text-gray-400">
                <div>
                  <p className="text-lg font-semibold text-white">100+</p>
                  <p>выпущенных релизов</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">24/7</p>
                  <p>онлайн-бронирование</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">Hi-End</p>
                  <p>оборудование студии</p>
                </div>
              </div>
            </div>

            {/* Правая колонка — абстрактный мокап */}
 </div>

          {/* Индикатор скролла вниз */}
        </section>

        {/* О студии */}
        <section
          id="studio"
          className="py-24 bg-gradient-to-b from-black via-zinc-950 to-black relative"
        >
          {/* Тонкая разделительная линия сверху */}
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-orange-500/20 to-transparent" />

          <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center gap-14">
            {/* Левая часть */}
            <div className="flex-1 relative">
              {/* Вертикальная акцентная линия слева */}
              <div className="hidden md:block absolute -left-5 top-0 bottom-0 w-px bg-zinc-700/40" />

              <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
                о студии
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Студия звукозаписи
                <span className="text-orange-500"> во Владивостоке</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Phase Records — это пространство для артистов, саунд-продюсеров и
                брендов. Мы берём на себя всё: от записи демо до полной
                продакшн-поддержки релиза и дистрибуции.
              </p>
            </div>

            {/* Правая часть */}
            <div className="flex-1">
              <div
                className="
        relative w-full h-72 rounded-3xl overflow-hidden 
        border border-orange-500/30 
        shadow-[0_25px_80px_-40px_rgba(0,0,0,1)]
        transition-all duration-300 
        hover:scale-[1.015]
        hover:shadow-[0_25px_80px_-35px_rgba(249,115,22,0.25)]
      "
              >
                <div className="absolute inset-0 bg-[url('./img/krupnym-planom-mikrofon-i-pop-fil-tr.jpg')] bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-orange-900/40" />

                <div className="absolute bottom-4 left-4 px-3 py-1 text-[11px] uppercase tracking-[0.2em] rounded-full bg-black/70 border border-orange-500/40 text-orange-200">
                  live room
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA, далее секции */}
        <section className="w-full flex justify-center py-24 px-4 bg-gradient-to-b from-black via-black to-zinc-950">
          <div
            className="
            w-full max-w-6xl 
            bg-neutral-950/90 
            backdrop-blur-xl 
            border border-orange-500/40 
            rounded-3xl 
            py-14 px-6 md:px-10 
            flex flex-col lg:flex-row 
            items-center justify-between 
            gap-14
            shadow-[0_30px_100px_-40px_rgba(0,0,0,1)]
          "
          >
            <div className="text-center lg:text-left">
              <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
                консультация
              </p>
              <h2 className="text-4xl lg:text-5xl font-extrabold leading-tight">
                Готовы сделать
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600">
                  реализовать вашу идею?
                </span>
              </h2>

              <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                Напишите нам — команда подберёт формат работы и инженера под
                задачу.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                className="
                flex items-center gap-3 
                px-12 py-4 
                rounded-2xl 
                text-lg font-semibold 
                bg-gradient-to-r from-orange-500 to-orange-600
                text-black 
                shadow-[0_10px_40px_-5px_rgba(249,115,22,0.7)]
                hover:shadow-[0_10px_50px_-5px_rgba(249,115,22,0.9)]
                transition-all
                hover:scale-[1.03]
              "
              >
                Оставить заявку
              </button>

              <p className="text-xs text-orange-300/90 text-center">
                + бесплатный разбор вашего материала
              </p>
            </div>
          </div>
        </section>

        <Services />
        <Credits />
        <AudioPlayerForDemo />
        <HardwareAndSoftwareInfo />
        <PluginsInfo />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
