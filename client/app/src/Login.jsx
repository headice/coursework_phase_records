import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useAppContext } from "./context/AppContext.jsx";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useAppContext();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      login(formData);
      setSuccess("Вы успешно вошли");
      setError("");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      setError(err.message);
      setSuccess("");
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <section className="pt-28 pb-16 flex justify-center px-4">
        <div className="bg-zinc-900 border border-orange-500/30 rounded-2xl p-8 w-full max-w-md shadow-[0_20px_70px_-40px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-extrabold mb-6 text-center">Вход</h2>
          <p className="text-gray-300 text-sm text-center mb-6">
            Используйте данные, указанные при регистрации.
          </p>

          {error && <p className="text-red-400 text-sm mb-4 text-center">{error}</p>}
          {success && <p className="text-green-400 text-sm mb-4 text-center">{success}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-gray-300 block mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
                placeholder="example@mail.ru"
              />
            </div>

            <div>
              <label className="text-sm text-gray-300 block mb-2">Пароль</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full rounded-xl bg-black border border-zinc-700 px-4 py-3 text-white focus:border-orange-500 outline-none"
                placeholder="Введите пароль"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold uppercase tracking-wide shadow-[0_12px_30px_-10px_rgba(249,115,22,0.8)] hover:scale-[1.01] transition"
            >
              Войти
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Нет аккаунта?{' '}
            <button
              className="text-orange-400 hover:text-orange-300"
              onClick={() => navigate("/register")}
            >
              Зарегистрируйтесь
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Login;
