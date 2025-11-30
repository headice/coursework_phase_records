import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./components/Footer.jsx";

import "./input.css";

import Header from "./components/Header.jsx";
import heroabout from "./img/hero_about.jpg";
import engineer1 from "./img/staff1.jpg";
import engineer2 from "./img/staff2.png";
import engineer3 from "./img/staff3jpg.jpg";
import RequestModal from "./components/RequestModal.jsx";

const About = () => {
  const navigate = useNavigate();
  const [requestOpen, setRequestOpen] = useState(false);

  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Header />

      {/* ===== HERO / ABOUT ===== */}
      <section className="relative w-full border-b border-zinc-900">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroabout})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90" />

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24 min-h-[70vh] flex flex-col lg:flex-row items-end lg:items-center gap-12">
          {/* Левая колонка */}
          <div className="flex-1 max-w-xl space-y-6">
            <p className="text-[11px] uppercase tracking-[0.3em] text-gray-400">
              студии звукозаписи 
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              О СТУДИИ
              <span className="block text-orange-500">PHASE RECORDS</span>
            </h1>

            <p className="text-lg text-gray-200 leading-relaxed">
              Пространство, где демки превращаются в релизы. Мы работаем с
              артистами, продюсерами и брендами, помогая собрать цельное
              звучание — от первой сессии до выхода трека на площадки.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => setRequestOpen(true)}
                className="px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-sm md:text-base font-semibold uppercase tracking-wide shadow-[0_18px_45px_-18px_rgba(249,115,22,1)] transition"
              >
                Оставить заявку
              </button>
              <button
                onClick={() => navigate("/shop")}
                className="px-6 py-3 rounded-full border border-orange-500/40 bg-black/70 hover:bg-black text-xs md:text-sm uppercase tracking-wide text-gray-200 transition"
              >
                Узнать об услугах
              </button>
            </div>
          </div>

          {/* Правая колонка */}
          <div className="flex-1 w-full max-w-md lg:max-w-sm">
            <div className="bg-black/70 border border-zinc-800 rounded-3xl p-6 sm:p-7 backdrop-blur-md space-y-5">
              <p className="text-[11px] uppercase tracking-[0.25em] text-gray-400">
                что важно о студии
              </p>

              <div className="space-y-3 text-sm text-gray-200">
                <p className="leading-relaxed">
                  Мы включаемся в материал: помогаем с аранжировкой, подачей и
                  ощущением финального звука.
                </p>
                <p className="leading-relaxed">
                  Комфортный процесс как для новичков, так и для артистов с
                  опытом релизов.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-4 text-xs text-gray-300">
                <div>
                  <p className="text-lg font-semibold text-white">2019</p>
                  <p className="mt-1">основание</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">100+</p>
                  <p className="mt-1">релизов</p>
                </div>
                <div>
                  <p className="text-lg font-semibold text-white">full cycle</p>
                  <p className="mt-1">от демо до релиза</p>
                </div>
              </div>

              <p className="text-[11px] uppercase tracking-[0.25em] text-orange-300 pt-2">
                здесь рождается звук
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== MAIN CONTENT ===== */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16 md:space-y-20">

        {/* ========= КТО МЫ / ЧТО ДЕЛАЕМ ========= */}
        <section className="relative rounded-3xl border border-zinc-900/70 bg-zinc-950/60 px-5 sm:px-8 lg:px-10 py-10 sm:py-12 overflow-hidden">
          {/* верхняя светящаяся линия */}
          <div className="pointer-events-none absolute inset-x-6 top-0 h-[1px] bg-gradient-to-r from-transparent via-orange-500/60 to-transparent" />

          {/* легкий фон-спот слева */}
          <div className="pointer-events-none absolute -left-32 top-10 w-64 h-64 rounded-full bg-orange-500/5 blur-3xl" />

          <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400 mb-4">
            о нас
          </p>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start relative z-10">
            {/* Левая колонка — Кто стоит за PHASE */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Кто стоит за PHASE
              </h2>

              <p className="text-gray-300 leading-relaxed">
                Мы — команда саунд-инженеров и продюсеров, работающих с артистами
                разных жанров — от рэпа и поп-музыки до альтернативы. Помогаем
                артистам находить собственный звук, формировать почерк и довести
                материал до релизного качества.
              </p>

              <div className="p-5 rounded-2xl bg-zinc-900/60 border border-zinc-800/80 shadow-[0_0_40px_-25px_rgba(0,0,0,0.9)] backdrop-blur-lg">
                <p className="text-gray-200 leading-relaxed">
                  В процессе записи мы работаем с подачей, эмоциями, бэками,
                  структурой и теми деталями, которые делают трек живым и
                  конкурентным.
                </p>
              </div>
            </div>

            {/* Правая колонка — Что делаем каждый день */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Что мы делаем{" "}
                <span className="text-orange-500">каждый день</span>
              </h2>

              <div className="relative pl-6 space-y-6">
                {/* Вертикальная линия */}
                <div className="absolute left-2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-orange-500 to-orange-800/20 rounded-full" />

                {[
                  "Запись вокала и инструментов",
                  "Сведение и мастеринг треков и EP",
                  "Аранжировки и битмейкинг",
                  "Тюнинг, FX, саунд-дизайн",
                  "Подготовка релиза к DSP",
                  "Запись подкастов и рекламных озвучек",
                ].map((item, i) => (
                  <div key={i} className="relative group">
                    <span className="absolute -left-[1.25rem] top-1 w-3 h-3 rounded-full bg-orange-500 group-hover:scale-125 transition-transform" />
                    <p className="text-gray-300 text-base leading-relaxed group-hover:text-white transition-colors">
                      — {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========= ROADMAP ========= */}
        <section className="relative rounded-3xl border border-zinc-900/70 bg-gradient-to-b from-zinc-950/80 via-black to-zinc-950/80 px-5 sm:px-8 lg:px-10 py-10 sm:py-12 overflow-hidden">
          {/* световой акцент справа */}
          <div className="pointer-events-none absolute right-[-80px] top-[-40px] w-64 h-64 rounded-full bg-orange-500/10 blur-3xl" />

          <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400 mb-3">
            процесс
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold">
            Как проходит работа над треком
          </h2>

          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-3">
            Чёткая и прозрачная структура процесса помогает артистам чувствовать
            уверенность на каждом этапе.
          </p>

          <div className="mt-8 relative">
            {/* Вертикальная линия */}
            <div className="hidden md:block absolute left-5 top-0 bottom-0 w-px bg-zinc-700/60" />

            <div className="space-y-8">
              {/* Шаг 1 */}
              <div className="flex items-start gap-4">
                <div>
                  <div className="hidden md:flex w-10 h-10 rounded-full border border-orange-500 items-center justify-center bg-black">
                    <span className="text-xs font-semibold text-orange-400">
                      1
                    </span>
                  </div>
                  <div className="md:hidden w-7 h-7 rounded-full border border-orange-500 flex items-center justify-center bg-black">
                    <span className="text-[11px] font-semibold text-orange-400">
                      1
                    </span>
                  </div>
                </div>

                <div className="flex-1 border border-zinc-800 rounded-2xl p-4 sm:p-5 bg-zinc-950/70">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-1">
                    шаг 1
                  </p>
                  <p className="font-medium text-white mb-1">Заявка и бриф</p>
                  <p className="text-sm text-gray-300">
                    Вы присылаете демо и референсы, описываете задачу и
                    ожидания. Мы предлагаем формат, стоимость и сроки.
                  </p>
                </div>
              </div>

              {/* Шаг 2 */}
              <div className="flex items-start gap-4">
                <div>
                  <div className="hidden md:flex w-10 h-10 rounded-full border border-orange-500 items-center justify-center bg-black">
                    <span className="text-xs font-semibold text-orange-400">
                      2
                    </span>
                  </div>
                  <div className="md:hidden w-7 h-7 rounded-full border border-orange-500 flex items-center justify-center bg-black">
                    <span className="text-[11px] font-semibold text-orange-400">
                      2
                    </span>
                  </div>
                </div>

                <div className="flex-1 border border-zinc-800 rounded-2xl p-4 sm:p-5 bg-zinc-950/70">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-1">
                    шаг 2
                  </p>
                  <p className="font-medium text-white mb-1">Запись в студии</p>
                  <p className="text-sm text-gray-300">
                    Работаем над подачей, дублями, бэками и эмоцией. Если нужно —
                    дорабатываем аранжировку.
                  </p>
                </div>
              </div>

              {/* Шаг 3 */}
              <div className="flex items-start gap-4">
                <div>
                  <div className="hidden md:flex w-10 h-10 rounded-full border border-orange-500 items-center justify-center bg-black">
                    <span className="text-xs font-semibold text-orange-400">
                      3
                    </span>
                  </div>
                  <div className="md:hidden w-7 h-7 rounded-full border border-orange-500 flex items-center justify-center bg-black">
                    <span className="text-[11px] font-semibold text-orange-400">
                      3
                    </span>
                  </div>
                </div>

                <div className="flex-1 border border-zinc-800 rounded-2xl p-4 sm:p-5 bg-zinc-950/70">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-1">
                    шаг 3
                  </p>
                  <p className="font-medium text-white mb-1">
                    Сведение и мастеринг
                  </p>
                  <p className="text-sm text-gray-300">
                    Формируем финальный баланс, пространство и динамику. Делаем
                    мастер, который уверенно звучит в плейлистах.
                  </p>
                </div>
              </div>

              {/* Шаг 4 */}
              <div className="flex items-start gap-4">
                <div>
                  <div className="hidden md:flex w-10 h-10 rounded-full border border-orange-500 items-center justify-center bg-black">
                    <span className="text-xs font-semibold text-orange-400">
                      4
                    </span>
                  </div>
                  <div className="md:hidden w-7 h-7 rounded-full border border-orange-500 flex items-center justify-center bg-black">
                    <span className="text-[11px] font-semibold text-orange-400">
                      4
                    </span>
                  </div>
                </div>

                <div className="flex-1 border border-zinc-800 rounded-2xl p-4 sm:p-5 bg-zinc-950/70">
                  <p className="text-xs uppercase tracking-[0.2em] text-orange-400 mb-1">
                    шаг 4
                  </p>
                  <p className="font-medium text-white mb-1">Готовый релиз</p>
                  <p className="text-sm text-gray-300">
                    Вы получаете мастер + версии под DSP. Также можем подсказать
                    по обложке и загрузке на площадки.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========= КОМАНДА ========= */}
        <section className="relative rounded-3xl border border-zinc-900/70 bg-zinc-950/70 px-5 sm:px-8 lg:px-10 py-10 sm:py-12 overflow-hidden">
          {/* мягкий градиент снизу */}
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />

          <p className="text-[11px] uppercase tracking-[0.3em] text-orange-400 mb-3 relative z-10">
            команда
          </p>

          <h2 className="text-2xl sm:text-3xl font-semibold relative z-10">
            Команда студии
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mt-2 relative z-10">
            За звуком PHASE стоят люди, которые сами живут музыкой и понимают,
            как важно сохранить характер артиста в каждом треке.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-6 relative z-10">
            {/* Карточка 1 */}
            <article className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/60 transition-colors duration-300 shadow-[0_18px_45px_-30px_rgba(0,0,0,1)] hover:-translate-y-1.5 transform transition-transform">
              <div className="w-full h-72 sm:h-80 overflow-hidden">
                <img
                  src={engineer1}
                  className="w-full h-full object-cover"
                  alt="Metro Boomin"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  METRO BOOMIN
                </h3>
                <p className="text-sm text-gray-300 mt-1">
                  Лиланд Тайлер Уэйн
                </p>
                <p className="text-gray-400 text-sm mt-3">
                  Битмейкер, продюсер
                </p>
              </div>
            </article>

            {/* Карточка 2 */}
            <article className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/60 transition-colors duration-300 shadow-[0_18px_45px_-30px_rgba(0,0,0,1)] hover:-translate-y-1.5 transform transition-transform">
              <div className="w-full h-72 sm:h-80 overflow-hidden">
                <img
                  src={engineer2}
                  className="w-full h-full object-cover"
                  alt="Leslie Brathwaite"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  LESLIE BRATHWAITE
                </h3>
                <p className="text-sm text-gray-300 mt-1">Лесли Брэтуэйт</p>
                <p className="text-gray-400 text-sm mt-3">
                  Микс-инженер, звукорежиссер
                </p>
              </div>
            </article>

            {/* Карточка 3 */}
            <article className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:border-orange-500/60 transition-colors duration-300 shadow-[0_18px_45px_-30px_rgba(0,0,0,1)] hover:-translate-y-1.5 transform transition-transform">
              <div className="w-full h-72 sm:h-80 overflow-hidden">
                <img
                  src={engineer3}
                  className="w-full h-full object-cover"
                  alt="Skrillex"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold uppercase tracking-wide">
                  SKRILLEX
                </h3>
                <p className="text-sm text-gray-300 mt-1">Сонни Мур</p>
                <p className="text-gray-400 text-sm mt-3">
                  Битмейкер, продюсер, звукоинженер
                </p>
              </div>
            </article>
          </div>
        </section>

        {/* ========= CTA ========= */}
        <section className="border border-zinc-800 rounded-3xl px-6 sm:px-10 py-10 sm:py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 bg-gradient-to-r from-zinc-950 via-black to-zinc-950">
          <div className="space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">
              начать
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold">
              Готовы услышать свою идею в релизном качестве?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base max-w-xl">
              Напишите нам — подберём формат работы и ближайшие свободные слоты.
            </p>
          </div>

          <div className="flex flex-col gap-3 w-full sm:w-auto">
            <button
              onClick={() => setRequestOpen(true)}
              className="w-full sm:w-auto px-8 py-3 rounded-full bg-orange-500 hover:bg-orange-600 text-sm font-semibold uppercase tracking-wide transition shadow-[0_18px_45px_-18px_rgba(249,115,22,0.8)]"
            >
              Оставить заявку
            </button>
            <p className="text-xs text-gray-400">
              Можно приложить демо — мы внимательно его послушаем.
            </p>
          </div>
        </section>
      </main>

      <Footer />

      <RequestModal
        open={requestOpen}
        onClose={() => setRequestOpen(false)}
        preset={{ type: "service", title: "Консультация" }}
      />
    </div>
  );
};

export default About;
