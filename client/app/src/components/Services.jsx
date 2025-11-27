import React, { useRef } from "react";
import { motion } from "framer-motion";
import "../input.css";

import arr from "../img/arr.jpg";
import mix from "../img/mix.jpg";
import record from "../img/record.jpg";
import fullsong from "../img/fullsong.jpg";
import promo from "../img/promo.jpg";

export default function ServicesSection() {
  const scrollRef = useRef(null);

  const images = {
    "/img/arr.jpg": arr,
    "/img/mix.jpg": mix,
    "/img/record.jpg": record,
    "/img/fullsong.jpg": fullsong,
    "/img/promo.jpg": promo,
  };

  const services = [
    {
      id: 1,
      title1: "Аранжировки",
      title2: "и Минусовки",
      img: "/img/arr.jpg",
      description: "Создание профессиональных аранжировок под любой стиль музыки",
    },
    {
      id: 2,
      title1: "Сведение",
      title2: "и Мастеринг",
      img: "/img/mix.jpg",
      description: "Качественное сведение и мастеринг для идеального звучания",
    },
    {
      id: 3,
      title1: "Запись",
      title2: "Вокала и Инструментов",
      img: "/img/record.jpg",
      description: "Профессиональная запись вокала и любых музыкальных инструментов",
    },
    {
      id: 4,
      title1: "Песня",
      title2: "Под Ключ",
      img: "/img/fullsong.jpg",
      description: "Полный цикл создания песни от идеи до готового трека",
    },
    {
      id: 5,
      title1: "Продвижение",
      title2: "Артистов",
      img: "/img/promo.jpg",
      description: "Эффективное продвижение музыкальных проектов",
    },
  ];

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.offsetWidth || 300;
    const gap = 24;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full bg-gradient-to-b from-black via-zinc-950 to-orange-950/40 text-white py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-orange-400"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Услуги нашей студии звукозаписи
        </motion.h2>
        <motion.p
          className="mt-3 text-gray-200 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          Несмотря на небольшие размеры нашей студии, мы готовы предложить
          <br />
          полный спектр услуг студии звукозаписи
          <br />
          на уровне профессионального качества!
        </motion.p>
      </div>

      <div className="relative w-full">
        {/* Стрелки */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 
                     bg-black/80 hover:bg-black text-white p-3 rounded-full 
                     backdrop-blur-sm transition-all duration-300 hover:scale-110
                     border border-orange-500/60 items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>

        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 
                     bg-black/80 hover:bg-black text-white p-3 rounded-full 
                     backdrop-blur-sm transition-all duration-300 hover:scale-110
                     border border-orange-500/60 items-center justify-center"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>

        {/* Лента карточек */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory px-2 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -5 }}
              className="relative min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] xl:min-w-[23%] 
                         h-[420px] rounded-xl overflow-hidden snap-center cursor-pointer 
                         group shadow-xl hover:shadow-2xl transition-all duration-500 bg-black"
            >
              <img
                src={images[service.img]}
                alt={`${service.title1} ${service.title2}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-transparent 
                              group-hover:from-black/95 group-hover:via-black/60 transition-all duration-500" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                <h3 className="text-xl font-bold mb-2">
                  <span className="text-orange-400">{service.title1} </span>
                  <span className="text-white">{service.title2}</span>
                </h3>
                <p
                  className="text-gray-200 text-sm leading-relaxed opacity-0 
                            group-hover:opacity-100 transform translate-y-4 
                            group-hover:translate-y-0 transition-all duration-500 delay-100"
                >
                  {service.description}
                </p>

                <button
                  className="mt-4 bg-orange-500/90 hover:bg-orange-500 text-white 
                             py-2 px-4 rounded-lg text-sm font-medium opacity-0 
                             group-hover:opacity-100 transform translate-y-4 
                             group-hover:translate-y-0 transition-all duration-500 delay-200
                             self-start"
                >
                  Узнать больше
                </button>
              </div>

            
            </motion.div>
          ))}
        </div>

        {/* Индикаторы для мобилки */}
        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {services.map((_, index) => (
              <div
                key={index}
                className="w-2 h-2 bg-orange-500/50 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
