import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import "./input.css";
import { AuthContext } from "./context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login, loginTestProfile, testProfile } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!formData.email || !formData.password) {
      setSuccess("");
      return setError("Укажите почту и пароль, чтобы войти.");
    }

    const result = login({ email: formData.email, password: formData.password });

    if (!result.success) {
      setError(result.error || "Не удалось войти. Попробуйте снова.");
      setSuccess("");
      return;
    }

    setError("");
    setSuccess("Вход выполнен. Перенаправляем в профиль...");
    setTimeout(() => navigate("/profile"), 400);
  };

  const handleTestLogin = () => {
    loginTestProfile();
    setFormData({ email: testProfile.email, password: testProfile.password });
    setSuccess("Вы вошли через тестовый профиль.");
    setError("");
    setTimeout(() => navigate("/profile"), 400);
  };

  return (
    <div className="bg-black text-white font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative w-full overflow-hidden border-b border-orange-500/20">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-zinc-950 to-black" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(249,115,22,0.14),transparent_32%),radial-gradient(circle_at_80%_25%,rgba(249,115,22,0.12),transparent_30%)]" />

          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 space-y-10">
            <div className="space-y-4 max-w-2xl">
              <p className="text-[11px] uppercase tracking-[0.26em] text-orange-400">вход</p>
              <h1 className="text-3xl sm:text-4xl font-extrabold leading-tight">
                Войдите в аккаунт
                <span className="block text-orange-500">и продолжайте работу</span>
              </h1>
              <p className="text-sm sm:text-base text-gray-300">
                Быстрый вход без отправки данных на сервер — всё сохраняется локально для демонстрации фронтенда.
              </p>
            </div>

            <div className="bg-zinc-950/70 border border-orange-500/25 rounded-3xl shadow-[0_24px_90px_-50px_rgba(249,115,22,0.8)] p-6 sm:p-8 grid gap-8 lg:grid-cols-[1.05fr,0.95fr] items-start">
              <form onSubmit={handleSubmit} className="space-y-4">
                <label className="flex flex-col gap-2 text-sm text-gray-200">
                  Email
                  <input
                    required
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2 text-sm text-gray-200">
                  Пароль
                  <input
                    required
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Введите пароль"
                    className="rounded-xl bg-black/60 border border-orange-500/30 px-4 py-3 text-sm focus:border-orange-400 outline-none"
                  />
                </label>

                {error && (
                  <p className="text-sm text-orange-300 bg-orange-500/10 border border-orange-500/30 rounded-xl px-4 py-3">
                    {error}
                  </p>
                )}
                {success && (
                  <p className="text-sm text-green-200 bg-green-500/10 border border-green-500/30 rounded-xl px-4 py-3">
                    {success}
                  </p>
                )}

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    className="px-8 py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold uppercase tracking-wide shadow-[0_14px_40px_-18px_rgba(249,115,22,0.8)] hover:scale-[1.01] transition"
                  >
                    Войти
                  </button>
                  <button
                    type="button"
                    onClick={handleTestLogin}
                    className="px-6 py-3 rounded-xl bg-black/60 border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                  >
                    Тестовый профиль
                  </button>
                  <button
                    type="button"
                    onClick={() => navigate("/register")}
                    className="px-6 py-3 rounded-xl border border-orange-500/40 text-sm uppercase tracking-wide text-gray-200 hover:text-orange-300 hover:border-orange-400 transition"
                  >
                    Создать аккаунт
                  </button>
                </div>
              </form>

              <div className="space-y-4 text-sm text-gray-300 bg-black/60 border border-orange-500/20 rounded-2xl p-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-orange-300">Зачем входить</p>
                <ul className="space-y-3 leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-orange-500" />
                    Доступ к профилю с сохранёнными заявками на бронирование.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-orange-500" />
                    Просмотр корзины и переход к оплате плагинов.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1 block h-2 w-2 rounded-full bg-orange-500" />
                    Возможность быстро оставить новую заявку из профиля.
                  </li>
                </ul>

                <div className="text-xs text-gray-500 space-y-1">
                  <p>Все данные хранятся в браузере. Для демо достаточно любой почты и пароля.</p>
                  <p>Можно выйти через меню в шапке.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Login;
