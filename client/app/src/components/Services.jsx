import React, { useContext, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import "../input.css";
import { ShopContext } from "../context/ShopContext";
import RequestModal from "./RequestModal.jsx";

export default function ServicesSection() {
  const scrollRef = useRef(null);
  const { services } = useContext(ShopContext);
  const navigate = useNavigate();
  const [requestItem, setRequestItem] = useState(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const cardWidth = scrollRef.current.children[0]?.offsetWidth || 300;
    const gap = 24;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -(cardWidth + gap) : cardWidth + gap,
      behavior: "smooth",
    });
  };

  const handleBookingClick = (event, service) => {
    event.stopPropagation();
    if (service.id === "recording") {
      navigate(`/booking?service=${service.id}`);
    } else {
      setRequestItem({ id: service.id, title: service.title, type: "service" });
    }
  };

  return (
    <section
      id="services"
      className="w-full bg-gradient-to-b from-neutral-950 via-black to-neutral-950 text-white py-20 px-4 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-white"
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
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-orange-500/60 items-center justify-center"
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
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 bg-black/80 hover:bg-black text-white p-3 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110 border border-orange-500/60 items-center justify-center"
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
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -3 }}
              className="relative min-w-[85%] sm:min-w-[45%] lg:min-w-[30%] xl:min-w-[23%] h-[420px] rounded-xl overflow-hidden snap-center cursor-pointer group border border-white/10 bg-neutral-950 shadow-[0_24px_60px_-40px_rgba(0,0,0,0.8)] transition-all duration-400"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/60 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 text-left">
                <h3 className="text-xl font-semibold mb-2">
                  <span className="text-orange-400">{service.title} </span>
                  <span className="text-white">{service.subtitle}</span>
                </h3>
                <p
                  className="text-gray-200 text-sm leading-relaxed opacity-90"
                >
                  {service.shortDescription}
                </p>

                <div className="mt-4 flex items-center gap-3">
                  <button
                    onClick={(event) => {
                      event.stopPropagation();
                      navigate(`/services/${service.id}`);
                    }}
                    className="bg-white text-black hover:bg-orange-500 hover:text-black py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    Узнать больше
                  </button>
                  <button
                    onClick={(event) => handleBookingClick(event, service)}
                    className="border border-white/20 hover:border-orange-400 text-white py-2 px-4 rounded-lg text-sm font-medium transition-colors"
                  >
                    {service.id === "recording" ? "Забронировать" : "Купить"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center mt-6 md:hidden">
          <div className="flex space-x-2">
            {services.map((service) => (
              <button
                key={service.id}
                onClick={() => navigate(`/services/${service.id}`)}
                className="w-2 h-2 bg-orange-500/50 rounded-full"
              />
            ))}
          </div>
        </div>
      </div>
      <RequestModal
        open={Boolean(requestItem)}
        onClose={() => setRequestItem(null)}
        preset={requestItem}
      />
    </section>
  );
}
