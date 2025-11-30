import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import vsthero from "../img/vsthero.png";

export default function StudioSaleSection() {
  const { plugins, addToCart } = useContext(ShopContext);
  const navigate = useNavigate();

  const handleAddToCart = (plugin) => {
    addToCart({
      id: plugin.id,
      name: plugin.name,
      price: plugin.price,
      type: "plugin",
      tag: plugin.tag,
    });
    navigate("/cart");
  };

  return (
    <section className="w-full bg-neutral-950 text-white py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-2 items-center mb-16">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.25em] text-orange-400">phase plugins</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Плагины и инструменты, которыми пользуемся
            </h1>

            <p className="text-base md:text-lg max-w-xl text-gray-200">
              Создаём плагины для сведения, синтезаторы и эффекты — ровно те, что применяем в своих проектах на студии.
            </p>

            <p className="text-sm md:text-base font-medium text-gray-300">
              Предзаказ даёт раннюю цену и все обновления после релиза.
            </p>
          </div>

          <div className="relative flex justify-center md:justify-end">
            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-black/50 p-6">
              <div className="rounded-2xl overflow-hidden bg-neutral-900">
                <img src={vsthero} alt="Инструменты и плагины" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {plugins.map((plugin) => (
            <div key={plugin.id} className="flex flex-col border border-white/10 rounded-2xl overflow-hidden bg-neutral-950">
              <button
                type="button"
                onClick={() => navigate(`/plugins/${plugin.id}`)}
                className="px-5 pt-5 pb-4 text-left hover:bg-white/5 transition"
              >
                <div
                  className="h-40 rounded-xl mb-4 bg-neutral-900"
                  style={{
                    backgroundImage: `url(${plugin.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                {plugin.discount && (
                  <p className="text-xs font-semibold tracking-wide text-orange-400 uppercase">{plugin.discount}</p>
                )}
                <h3 className="mt-1 text-sm font-semibold tracking-wide uppercase">{plugin.name}</h3>
                <p className="mt-2 text-xs text-gray-300 leading-relaxed">{plugin.description}</p>
              </button>
              <div className="mt-auto px-5 pb-5 pt-3 space-y-2 border-t border-white/5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-orange-300 font-semibold">{plugin.price}</span>
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
                    className="w-1/2 py-3 bg-orange-500 hover:bg-orange-600 transition text-[11px] font-semibold uppercase rounded-xl text-black"
                  >
                    В корзину
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
