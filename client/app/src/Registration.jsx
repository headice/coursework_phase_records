import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./components/Header";
import { useAppContext } from "./context/AppContext.jsx";

const Registration = () => {
  const [errors, setErrors] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { registerUser } = useAppContext();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleInputSubmit = (e) => {
    e.preventDefault();
    setErrors("");

    if (formData.password.length < 6) {
      setErrors("Пароль должен содержать минимум 6 символов");
      return;
    }

    try {
      registerUser(formData);
      setSuccess("Аккаунт создан! Мы уже авторизовали вас.");
      setTimeout(() => navigate("/"), 1200);
    } catch (error) {
      setErrors(error.message);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white">
      <Header />

      <section className="pt-24 pb-14 flex justify-center px-4">
        <div className="bg-zinc-900 border border-orange-500/30 rounded-2xl p-8 w-full max-w-xl shadow-[0_20px_70px_-40px_rgba(0,0,0,1)]">
          <h2 className="text-3xl font-extrabold mb-2 text-center">Регистрация</h2>
          <p className="text-gray-300 text-sm text-center mb-6">
            Создайте аккаунт, чтобы бронировать услуги и оплачивать софт.
          </p>

          {errors && <p className="text-red-400 text-sm mb-4 text-center">{errors}</p>}
          {success && <p className="text-green-400 text-sm mb-4 text-center">{success}</p>}

          <form
            className="flex flex-col gap-4"
            onSubmit={handleInputSubmit}
          >
            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Никнейм
              <input
                type="text"
                name="username"
                className="text-white w-full rounded-xl p-3 bg-black border border-zinc-700 focus:border-orange-500 outline-none"
                placeholder="Ваш творческий псевдоним"
                onChange={handleInputChange}
                value={formData.username}
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Email
              <input
                type="email"
                name="email"
                className="text-white w-full rounded-xl p-3 bg-black border border-zinc-700 focus:border-orange-500 outline-none"
                placeholder="artist@mail.ru"
                onChange={handleInputChange}
                value={formData.email}
                required
              />
            </label>

            <label className="flex flex-col gap-2 text-sm text-gray-200">
              Пароль
              <input
                type="password"
                name="password"
                className="text-white w-full rounded-xl p-3 bg-black border border-zinc-700 focus:border-orange-500 outline-none"
                placeholder="Минимум 6 символов"
                onChange={handleInputChange}
                value={formData.password}
                required
              />
            </label>

            <button className="mt-2 bg-gradient-to-r from-orange-500 to-orange-600 text-black font-semibold py-3 rounded-xl uppercase tracking-wide shadow-[0_12px_30px_-10px_rgba(249,115,22,0.8)] hover:scale-[1.01] transition">
              Создать аккаунт
            </button>
          </form>

          <p className="text-xs text-gray-400 mt-4 text-center">
            Уже есть аккаунт?{' '}
            <button
              className="text-orange-400 hover:text-orange-300"
              onClick={() => navigate("/login")}
            >
              Войдите
            </button>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Registration;
