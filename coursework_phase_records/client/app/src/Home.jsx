import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./input.css";
import Header from "./components/Header.jsx";
import Services from "./components/Services.jsx";
import Footer from "./components/Footer.jsx";
import Credits from "./components/Credits.jsx";
import AudioPlayerForDemo from "./components/AudioPlayerForDemo.jsx";
import HardwareAndSoftwareInfo from "./components/HardwareAndSofrwareInfo.jsx";
import PluginsInfo from "./components/PluginsInfo.jsx";
import RequestModal from "./components/RequestModal.jsx";

const Home = () => {
  const navigate = useNavigate();
  const [requestOpen, setRequestOpen] = useState(false);

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
        {/* HERO */}
        <section className="relative overflow-hidden bg-gradient-to-b from-black via-[#0d0d10] to-black">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute inset-0 bg-[url('./img/zvukovoi-mikser-v-studii-bg2.jpg')] bg-cover bg-center opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black/90 to-orange-900/40" />
            <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-orange-500/10 blur-3xl" />
            <div className="absolute bottom-0 right-[-120px] h-96 w-96 rounded-full bg-orange-500/15 blur-3xl" />
          </div>

          <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-4 py-16 md:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8 lg:px-10 lg:py-24">
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/60 px-3 py-1 text-[11px] uppercase tracking-[0.25em] text-orange-300">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                phase records studio
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold leading-tight tracking-tight">
                PHASE
                <span className="text-orange-500"> RECORDS</span>
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-200 md:text-xl lg:mx-0 mx-auto">
                Мы делаем музыку ближе к живому звучанию: без конвейера, с
                вниманием к артисту, идее и эмоции трека. Запись, сведение,
                мастеринг и продакшн в одном процессе.
              </p>

              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  "запись / сведение / мастеринг",
                  "авторский продакшн",
                  "подготовка релиза",
                ].map((feature) => (
                  <div
                    key={feature}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-xs uppercase tracking-[0.16em] text-gray-300 backdrop-blur"
                  >
                    {feature}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <button
                  onClick={goToBooking}
                  className="rounded-full bg-white px-10 py-3 text-sm font-semibold uppercase tracking-wide text-black transition hover:bg-orange-500 md:text-base"
                >
                  Забронировать время
                </button>

                <button
                  onClick={scrollToServices}
                  className="rounded-full border border-white/10 bg-black/70 px-6 py-3 text-xs uppercase tracking-wide text-gray-200 transition hover:border-orange-400 md:text-sm"
                >
                  Смотреть услуги
                </button>
              </div>
            </div>

            <div className="flex w-full items-stretch">
              <div className="w-full rounded-3xl border border-orange-500/35 bg-zinc-950/80 p-6 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-[0.22em] text-orange-300">
                  как мы работаем
                </p>
                <div className="mt-6 space-y-5">
                  {[
                    {
                      title: "01 / Встреча и бриф",
                      text: "Обсуждаем идею, сроки и атмосферу будущего релиза.",
                    },
                    {
                      title: "02 / Производство",
                      text: "Записываем, редактируем и собираем цельный саунд.",
                    },
                    {
                      title: "03 / Финализация",
                      text: "Делаем мастер и готовим трек к публикации на площадках.",
                    },
                  ].map((step) => (
                    <div
                      key={step.title}
                      className="border-b border-white/10 pb-4 last:border-none last:pb-0"
                    >
                      <p className="text-sm font-semibold tracking-wide text-white">
                        {step.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-300">{step.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
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
            <div className="relative flex-1">
              <div className="hidden md:block absolute -left-5 top-0 bottom-0 w-px bg-zinc-700/40" />

              <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
                о студии
              </p>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-snug">
                Студия звукозаписи
                <span className="text-orange-500"> во Владивостоке</span>
              </h2>

              <p className="text-lg text-gray-300 leading-relaxed">
                Phase Records — уютная рабочая студия для артистов,
                саунд-продюсеров и брендов. Мы сопровождаем проект от демо до
                готового релиза: честно, прозрачно и без лишнего пафоса.
              </p>
            </div>

            <div className="flex-1 w-full">
              <div
                className="
        relative w-full h-72 sm:h-80 rounded-3xl overflow-hidden
        border border-orange-500/30
        shadow-[0_25px_80px_-40px_rgba(0,0,0,1)]
        transition-all duration-300
        hover:scale-[1.015]
        hover:shadow-[0_25px_80px_-35px_rgba(249,115,22,0.25)]
      "
              >
                <div className="absolute inset-0 bg-main-info-pattern bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-transparent to-orange-900/40" />

                <div className="absolute bottom-4 left-4 rounded-full border border-orange-500/40 bg-black/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-orange-200">
                  live session room
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
                Обсудим задачу
                <br />
                <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
                  и соберём план под вас
                </span>
              </h2>

              <p className="mt-6 text-gray-300 text-lg leading-relaxed">
                Напишите нам — команда подберёт формат работы, инженера и
                комфортный график сессий под ваш проект.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => setRequestOpen(true)}
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

      <RequestModal
        open={requestOpen}
        onClose={() => setRequestOpen(false)}
        preset={{ type: "service", title: "Консультация" }}
      />

      <Footer />
    </div>
  );
};

export default Home;
