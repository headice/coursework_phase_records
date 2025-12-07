import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import studioImg from "../img/studio_info_display.jpg";
import pcImg from "../img/pc_studio_info_display.jpg";
import dawImg from "../img/dawvst_info_display.jpg";

function Tabs() {
  const [active, setActive] = useState("daw");

  const contentTransition = {
    initial: { opacity: 0, y: 12 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -12 },
    transition: { duration: 0.35, ease: "easeOut" },
  };

  const TabButton = ({ id, children }) => (
    <button
      onClick={() => setActive(id)}
      className={`px-5 py-2 rounded-full text-xs sm:text-sm uppercase tracking-[0.22em] transition border
        ${
          active === id
            ? "bg-orange-500 text-black border-orange-500 shadow-[0_10px_40px_-20px_rgba(249,115,22,1)]"
            : "bg-black/70 text-gray-400 border-orange-500/30 hover:text-orange-300"
        }`}
    >
      {children}
    </button>
  );

  return (
    <>
      {/* Навигация вкладок */}
      <div className="flex flex-wrap gap-3 mb-12">
        <TabButton id="hardware">Оборудование</TabButton>
        <TabButton id="pc">Компьютер</TabButton>
        <TabButton id="daw">DAW и VST</TabButton>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={active} {...contentTransition}>
          {/* Контент вкладок */}
          {active === "hardware" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div
                className="relative w-full overflow-hidden rounded-3xl shadow-[0_25px_80px_-40px_rgba(0,0,0,1)] h-[380px] bg-cover bg-center bg-no-repeat border border-orange-500/40"
                style={{ backgroundImage: `url(${studioImg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-orange-900/60" />
              </div>

              <div className="bg-gradient-to-br from-black via-zinc-900 to-orange-950/60 p-10 rounded-3xl shadow-lg border border-orange-500/40">
                <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
                  оборудование студии
                </p>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Аппаратная часть Phase Records
                </h2>

                <ul className="space-y-3 text-sm sm:text-lg leading-relaxed text-gray-200">
                  <li className="list-disc ml-6">
                    <strong>Конденсаторные и ламповые микрофоны</strong> для вокала и
                    инструментов
                  </li>
                  <li className="list-disc ml-6">Студийные мониторы ближнего поля</li>
                  <li className="list-disc ml-6">
                    <strong>Профессиональные аудиоинтерфейсы</strong> с низкой
                    задержкой
                  </li>
                  <li className="list-disc ml-6">MIDI-клавиатуры и контроллеры</li>
                  <li className="list-disc ml-6">Электронная перкуссия и пад-контроллеры</li>
                  <li className="list-disc ml-6">
                    DJ-оборудование и контроллеры для выступлений
                  </li>
                </ul>
              </div>
            </div>
          )}

          {active === "pc" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div
                className="relative w-full overflow-hidden rounded-3xl shadow-[0_25px_80px_-40px_rgba(0,0,0,1)] h-[380px] bg-cover bg-center bg-no-repeat border border-orange-500/40"
                style={{ backgroundImage: `url(${pcImg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-orange-900/60" />
              </div>

              <div className="bg-gradient-to-br from-black via-zinc-900 to-orange-950/60 p-10 rounded-3xl shadow-lg border border-orange-500/40">
                <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
                  рабочая станция
                </p>
                <h2 className="text-3xl font-bold text-white mb-6">Компьютер</h2>

                <ul className="space-y-3 text-sm sm:text-lg leading-relaxed text-gray-200">
                  <li className="list-disc ml-6">
                    <strong>Intel XEON 3.0 GHz</strong>, 12 ядер / 24 потока
                  </li>
                  <li className="list-disc ml-6">ОЗУ 32 ГБ</li>
                  <li className="list-disc ml-6">
                    <strong>SSD 2 ТБ</strong> + дополнительные HDD по 2 ТБ
                  </li>
                  <li className="list-disc ml-6">Хранение проектов до 6 месяцев</li>
                  <li className="list-disc ml-6">Три монитора до 2560×1080</li>
                  <li className="list-disc ml-6">Windows 11 + OBS Studio для стримов</li>
                  <li className="list-disc ml-6">
                    Full HD web-камера и высокоскоростной интернет xPON до 1 Гбит/с
                  </li>
                </ul>
              </div>
            </div>
          )}

          {active === "daw" && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div
                className="relative w-full overflow-hidden rounded-3xl shadow-[0_25px_80px_-40px_rgba(0,0,0,1)] h-[380px] bg-cover bg-center bg-no-repeat border border-orange-500/40"
                style={{ backgroundImage: `url(${dawImg})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-black via-black/20 to-orange-900/60" />
              </div>

              <div className="bg-gradient-to-br from-black via-zinc-900 to-orange-950/60 p-10 rounded-3xl shadow-lg border border-orange-500/40">
                <p className="text-xs uppercase tracking-[0.25em] text-orange-400 mb-3">
                  daw и плагины
                </p>
                <h2 className="text-3xl font-bold text-white mb-6">
                  Софт, с которым мы работаем
                </h2>

                <ul className="space-y-3 text-sm sm:text-lg leading-relaxed text-gray-200">
                  <li className="list-disc ml-6">
                    <strong>FL Studio</strong> (обновления еженедельно)
                  </li>
                  <li className="list-disc ml-6">Ableton Live 12</li>
                  <li className="list-disc ml-6">
                    WAVES Total Bundle (обновление раз в 3 месяца)
                  </li>
                  <li className="list-disc ml-6">
                    <strong>FabFilter 4 Total Bundle</strong>
                  </li>
                  <li className="list-disc ml-6">Avenger, ANA, Diva, Massive, Serum 2, Spire</li>
                  <li className="list-disc ml-6">
                    <strong>Nexus 2 / Nexus 3</strong>
                  </li>
                  <li className="list-disc ml-6">
                    NI Kontakt (библиотека ~500 ГБ инструментов и оркестров)
                  </li>
                </ul>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default function StudioGearSection() {
  return (
    <section className="w-full bg-gradient-to-b from-black via-zinc-950 to-orange-950/50 text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <Tabs />
      </div>
    </section>
  );
}
