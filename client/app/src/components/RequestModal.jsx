import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";

const initialForm = {
  name: "",
  contact: "",
  itemTitle: "",
  comment: "",
};

export default function RequestModal({ open, onClose, preset }) {
  const { addRequest } = useContext(ShopContext);
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (open) {
      setForm((prev) => ({
        ...prev,
        itemTitle: preset?.title || "",
      }));
      setSubmitted(false);
    }
  }, [open, preset]);

  if (!open) return null;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addRequest({
      name: form.name,
      contact: form.contact,
      itemTitle: form.itemTitle || preset?.title,
      itemType: preset?.type || "service",
      comment: form.comment,
    });
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4 animate-[fadeIn_0.25s_ease]">
      <div className="relative bg-zinc-950 border border-orange-500/30 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-[0_24px_90px_-45px_rgba(249,115,22,0.8)]">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
          aria-label="Закрыть"
        >
          ✕
        </button>

        <p className="text-[11px] uppercase tracking-[0.24em] text-orange-400 mb-2">заявка</p>
        <h3 className="text-2xl font-bold mb-2">Оставить запрос</h3>
        <p className="text-sm text-gray-300 mb-4">
          Заполните контакты и выбранную услугу — мы вернёмся с уточнениями и предложим свободное время.
        </p>

        <form className="space-y-4" onSubmit={handleSubmit}>
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

          <label className="flex flex-col gap-2 text-sm text-gray-200">
            Услуга или запрос
            <input
              required
              name="itemTitle"
              value={form.itemTitle}
              onChange={handleChange}
              placeholder="Что нужно сделать"
              className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-gray-200">
            Комментарий
            <textarea
              name="comment"
              value={form.comment}
              onChange={handleChange}
              placeholder="Нужен саунд-дизайн, сведение или консультация"
              className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none min-h-[96px]"
            />
          </label>

          {submitted && (
            <p className="text-sm text-orange-300 bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3 animate-[fadeIn_0.2s_ease]">
              Заявка отправлена! Мы ответим в ближайшее время.
            </p>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
            <button
              type="submit"
              className="w-full px-6 py-3 rounded-xl bg-orange-500 hover:bg-orange-600 text-black font-semibold uppercase tracking-wide transition"
            >
              Отправить
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full px-6 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
            >
              Закрыть
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
