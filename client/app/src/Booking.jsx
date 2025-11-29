import { useContext, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { ShopContext } from "./context/ShopContext";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const initialForm = {
  name: "",
  contact: "",
  serviceId: "recording",
  date: "",
  time: "",
  comment: "",
};

export default function Booking() {
  const { services, bookService } = useContext(ShopContext);
  const navigate = useNavigate();
  const query = useQuery();
  const [form, setForm] = useState(() => {
    const serviceId = query.get("service") || initialForm.serviceId;
    return { ...initialForm, serviceId };
  });
  const [submitted, setSubmitted] = useState(false);
  const [modalData, setModalData] = useState(null);

  const selectedService = useMemo(
    () => services.find((service) => service.id === form.serviceId),
    [services, form.serviceId]
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    bookService({ ...form });
    setSubmitted(true);
    setModalData({
      ...form,
      serviceTitle: selectedService?.title,
      price: selectedService?.price,
    });
    setForm((prev) => ({ ...initialForm, serviceId: prev.serviceId }));
  };

  const closeModal = () => {
    setSubmitted(false);
    setModalData(null);
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative w-full bg-gradient-to-br from-black via-zinc-950 to-black py-16 border-b border-orange-500/10">
          <div className="absolute inset-0 -z-10 opacity-40 bg-[radial-gradient(circle_at_20%_20%,rgba(249,115,22,0.18),transparent_30%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.22),transparent_28%)]" />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="space-y-4 max-w-2xl">
                <p className="text-[11px] uppercase tracking-[0.25em] text-orange-400">
                  Бронирование студии
                </p>
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  Записаться на сессию
                  <span className="block text-orange-500">Phase Records</span>
                </h1>
                <p className="text-sm sm:text-base text-gray-300">
                  Оставьте заявку: мы подтвердим время, уточним задачу и подготовим зал под ваш проект.
                </p>
              </div>

              {selectedService && (
                <div className="bg-zinc-900/70 border border-orange-500/30 rounded-2xl p-5 w-full lg:max-w-sm shadow-[0_20px_60px_-35px_rgba(249,115,22,0.7)]">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-orange-300 mb-2">
                    выбранная услуга
                  </p>
                  <h2 className="text-xl font-semibold">{selectedService.title}</h2>
                  <p className="text-sm text-gray-300 mt-2">{selectedService.subtitle}</p>
                  <div className="mt-3 text-sm text-gray-400 space-y-1">
                    <p>Сроки: {selectedService.duration}</p>
                    <p>Стоимость: {selectedService.price}</p>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">
              <form
                onSubmit={handleSubmit}
                className="lg:col-span-2 bg-zinc-950/70 border border-orange-500/20 rounded-2xl p-6 sm:p-8 space-y-4 shadow-[0_24px_80px_-40px_rgba(0,0,0,1)]"
              >
                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-gray-200">
                    Имя и артист
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Например: Антон, проект PHASE"
                      className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm text-gray-200">
                    Контакт
                    <input
                      required
                      name="contact"
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="Телеграм или телефон"
                      className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-gray-200">
                    Услуга
                    <select
                      name="serviceId"
                      value={form.serviceId}
                      onChange={handleChange}
                      className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                    >
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </label>

                  <label className="flex flex-col gap-2 text-sm text-gray-200">
                    Дата
                    <input
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                    />
                  </label>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm text-gray-200">
                    Время
                    <input
                      required
                      type="time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                    />
                  </label>

                  <label className="flex flex-col gap-2 text-sm text-gray-200">
                    Комментарий
                    <input
                      name="comment"
                      value={form.comment}
                      onChange={handleChange}
                      placeholder="Что нужно сделать на сессии"
                      className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                    />
                  </label>
                </div>

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between pt-4">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold uppercase tracking-wide shadow-[0_14px_40px_-18px_rgba(249,115,22,0.8)] hover:scale-[1.01] transition"
                  >
                    Забронировать время
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/shop")}
                    className="px-6 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                  >
                    Посмотреть услуги
                  </button>
                </div>

                {submitted && !modalData && (
                  <p className="text-sm text-orange-300 bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3">
                    Заявка отправлена! Мы свяжемся с вами, чтобы подтвердить время.
                  </p>
                )}
              </form>

              <div className="bg-zinc-900/70 border border-orange-500/20 rounded-2xl p-6 space-y-4 text-sm text-gray-200">
                <p className="text-[11px] uppercase tracking-[0.24em] text-orange-300">Как проходит бронирование</p>
                <ul className="space-y-3 list-disc ml-4">
                  <li>Фиксируем время и задачу, готовим оборудование заранее.</li>
                  <li>Присылаем вам адрес, чек-лист по подготовке и контакты инженера.</li>
                  <li>После сессии можно сразу оставить трек на сведение или мастеринг.</li>
                </ul>

                <div className="pt-2 space-y-2 text-xs text-gray-400">
                  <p>Доступна онлайн-запись и выездные сессии.</p>
                  <p>Если время нужно срочно — напишите нам в Telegram.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {modalData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4">
          <div className="relative bg-zinc-950 border border-orange-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_24px_90px_-45px_rgba(249,115,22,0.8)] animate-[fadeIn_0.25s_ease]
">
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
              aria-label="Закрыть"
            >
              ✕
            </button>

            <p className="text-[11px] uppercase tracking-[0.24em] text-orange-400 mb-2">заявка создана</p>
            <h3 className="text-2xl font-bold mb-2">Мы приняли вашу бронь</h3>
            <p className="text-sm text-gray-300 mb-4">
              Проверьте детали и подтвердите время в ответном сообщении — мы свяжемся с вами в ближайшее время.
            </p>

            <div className="space-y-3 text-sm text-gray-200 bg-black/50 border border-orange-500/20 rounded-2xl p-4">
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Услуга</span>
                <span className="font-semibold text-orange-300 text-right">
                  {modalData.serviceTitle || "Услуга студии"}
                </span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Дата</span>
                <span className="text-right">{modalData.date || "не выбрана"}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Время</span>
                <span className="text-right">{modalData.time || "не выбрано"}</span>
              </div>
              <div className="flex justify-between gap-4">
                <span className="text-gray-400">Контакт</span>
                <span className="text-right">{modalData.contact}</span>
              </div>
              {modalData.comment && (
                <div className="flex flex-col gap-1">
                  <span className="text-gray-400">Комментарий</span>
                  <span className="text-right text-gray-100">{modalData.comment}</span>
                </div>
              )}
              {modalData.price && (
                <div className="flex justify-between gap-4 pt-1 border-t border-orange-500/10">
                  <span className="text-gray-400">Ориентир по стоимости</span>
                  <span className="font-semibold text-orange-300">{modalData.price}</span>
                </div>
              )}
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => navigate("/cart")}
                className="w-full px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold uppercase tracking-wide transition"
              >
                Купить плагины
              </button>
              <button
                type="button"
                onClick={closeModal}
                className="w-full px-6 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
              >
                Оставить новую заявку
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
