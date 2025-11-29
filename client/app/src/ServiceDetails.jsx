import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import { ShopContext } from "./context/ShopContext";

export default function ServiceDetails() {
  const { serviceId } = useParams();
  const { services } = useContext(ShopContext);
  const navigate = useNavigate();

  const service = services.find((item) => item.id === serviceId);

  if (!service) {
    return (
      <div className="bg-black text-white min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h1 className="text-2xl font-semibold">Услуга не найдена</h1>
            <button
              onClick={() => navigate("/shop")}
              className="px-6 py-3 rounded-full bg-orange-500 text-black uppercase tracking-wide font-semibold"
            >
              Вернуться в магазин
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen flex flex-col font-sans">
      <Header />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden border-b border-orange-500/10">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(249,115,22,0.12),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(249,115,22,0.2),transparent_30%)]" />

          <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="space-y-3 max-w-3xl">
                <p className="text-[11px] uppercase tracking-[0.24em] text-orange-400">услуга студии</p>
                <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                  {service.title}
                  <span className="block text-orange-500 text-2xl sm:text-3xl font-semibold">
                    {service.subtitle}
                  </span>
                </h1>
                <p className="text-sm sm:text-base text-gray-200 max-w-2xl leading-relaxed">
                  {service.fullDescription}
                </p>
              </div>

              <div className="bg-zinc-900/70 border border-orange-500/30 rounded-2xl p-5 space-y-2 w-full lg:max-w-sm shadow-[0_24px_80px_-40px_rgba(249,115,22,0.35)]">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Сроки</span>
                  <span className="font-semibold text-orange-300">{service.duration}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-400">Стоимость</span>
                  <span className="font-semibold text-orange-300">{service.price}</span>
                </div>
                <button
                  onClick={() => navigate(`/booking?service=${service.id}`)}
                  className="w-full mt-3 px-6 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold uppercase tracking-wide shadow-[0_14px_40px_-18px_rgba(249,115,22,0.8)] hover:scale-[1.01] transition"
                >
                  Забронировать
                </button>
                <button
                  onClick={() => navigate("/shop")}
                  className="w-full px-6 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                >
                  Вернуться к списку
                </button>
              </div>
            </div>

            <div className="grid gap-8 lg:grid-cols-2">
              <div className="rounded-3xl overflow-hidden border border-orange-500/30 shadow-[0_24px_80px_-40px_rgba(0,0,0,1)]">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>

              <div className="bg-zinc-950/60 border border-orange-500/20 rounded-3xl p-6 sm:p-8 space-y-4">
                <p className="text-[11px] uppercase tracking-[0.22em] text-orange-400">что входит</p>
                <ul className="space-y-3 text-sm sm:text-base text-gray-200 leading-relaxed">
                  {service.includes.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-2 text-xs text-gray-400">
                  <p>Готовы подключить дополнительные услуги: запись бэков, тюнинг вокала, подбор референсов.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
