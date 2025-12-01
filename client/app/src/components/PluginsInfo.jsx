import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { AuthContext } from "../context/AuthContext";
import vsthero from "../img/vsthero.png";

export default function StudioSaleSection() {
  const { plugins, addToCart } = useContext(ShopContext);
  const { requireAuth } = useContext(AuthContext);
  const [authMessage, setAuthMessage] = useState("");
  const navigate = useNavigate();

  const handleAddToCart = (plugin) => {
    setAuthMessage("");
    if (!requireAuth(() => setAuthMessage("Авторизуйтесь, чтобы купить плагин."))) {
      navigate("/login");
      return;
    }
    addToCart({
      id: plugin.id,
      name: plugin.name,
      price: plugin.price,
      type: "plugin",
      tag: plugin.tag,
    });
    navigate("/cart");
  };

  const gradients = [
    "from-orange-900/50 to-black",
    "from-orange-700/60 to-black",
    "from-orange-600/60 to-black",
    "from-zinc-900 to-black",
  ];

  return (
    <section className="w-full bg-gradient-to-br from-black via-black to-orange-800/30 text-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center mb-20">
          <div className="space-y-6">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">phase plugins</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight uppercase">
              МЫ ТЕПЕРЬ РАЗРАБАТЫВАЕМ
              <br />
              <span className="text-orange-500">ПЛАГИНЫ</span>
            </h1>

            <p className="text-lg md:text-xl max-w-xl text-gray-200">
              Создаём плагины для сведения, синтезаторы и эффекты, которые сами используем в работе на студии. Ранняя стоимость
              ниже релизной.
            </p>

            <p className="text-sm md:text-base font-semibold tracking-wide uppercase text-orange-400">
              Предзаказ даёт раннюю цену и все обновления после релиза.
            </p>
            {authMessage && (
              <p className="text-sm text-orange-200 bg-orange-500/10 border border-orange-500/30 rounded-2xl px-4 py-3 inline-block">
                {authMessage}
              </p>
            )}
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-6 rounded-3xl bg-orange-500/15 blur-3xl opacity-80" />
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src={vsthero}
                  alt="Инструменты и плагины"
                  className="w-full h-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {plugins.map((plugin, index) => (
            <div
              key={plugin.id}
              className={`flex flex-col bg-black/85 border border-orange-500/30 rounded-2xl overflow-hidden shadow-[0_30px_120px_-60px_rgba(0,0,0,1)]`}
            >
              <button
                type="button"
                onClick={() => navigate(`/plugins/${plugin.id}`)}
                className={`px-5 pt-5 pb-4 text-left bg-gradient-to-b ${gradients[index % gradients.length]} hover:brightness-110 transition`}
              >
                <div
                  className="h-40 rounded-xl mb-4"
                  style={{
                    backgroundImage: `url(${plugin.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {plugin.discount && (
                  <p className="text-xs font-bold tracking-wide text-orange-400 uppercase">скидка {plugin.discount.replace("-", "")}</p>
                )}
                <h3 className="mt-1 text-sm font-extrabold tracking-wide uppercase">{plugin.name}</h3>
                <p className="mt-2 text-xs text-gray-300 leading-relaxed">{plugin.description}</p>
              </button>

              <div className="mt-auto px-5 pb-5 pt-3 space-y-3 bg-black/70 border-t border-orange-500/20">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-lg font-semibold text-orange-300">{plugin.price}</span>
                  <span className="text-gray-500 line-through">{plugin.oldPrice}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => navigate(`/plugins/${plugin.id}`)}
                    className="w-1/2 py-3 border border-white/20 hover:border-orange-400 transition text-[11px] font-semibold uppercase rounded-xl text-gray-200"
                  >
                    Подробнее
                  </button>
                  <button
                    onClick={() => handleAddToCart(plugin)}
                    className="w-1/2 py-3 bg-orange-500 hover:bg-orange-600 transition text-[11px] font-bold uppercase rounded-xl text-black"
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
