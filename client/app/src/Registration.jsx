import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from './components/Header'    // ПРАВИЛЬНЫЙ ИМПОРТ

// Создаем компонент регистрации
const Registration = () => {

    // ошибки
    const [errors, setErrors] = useState(null)

    // навигация
    const navigate = useNavigate()

    // сохранение-отслеживание состояния полей
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    // ручной обработчик событий на изменение полей
    const handleInputChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    // обработчик отправки формы (async)
    const handleInputSubmit = async (e) => {
        e.preventDefault()

        try {
            // отправка запроса на backend
            const response = await fetch('http://localhost:5000/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: formData.username,
                    email: formData.email,
                    password: formData.password
                })
            })

            const data = await response.json()

            // если ошибка сервера
            if (!response.ok) {
                throw new Error(data.error || data.message || "Ошибка регистрации")
            }

            // если все ок → сохраняем токен
            localStorage.setItem('token', data.token)

            // переход на страницу логина
            navigate('/login')

        } catch (error) {
            // ловим и выводим ошибку
            setErrors(error.message)
        }
    }

    return (
        <div>
            <Header />

            <section className="bg-black flex justify-center p-10">
                <h2 className="text-white p-5 text-4xl">Регистрация</h2>

                {errors && (
                    <p className="text-red-500 text-xl">{errors}</p>
                )}

                <section className="bg-black flex justify-center">
                    <form
                        className="p-10 bg-blue-300 flex flex-col gap-5 rounded-[20px]"
                        onSubmit={handleInputSubmit}
                    >
                        {/* поля */}
                        <input
                            type="text"
                            name="username"
                            className="text-black w-[300px] h-[50px] rounded-[30px] p-4"
                            placeholder="Никнейм"
                            onChange={handleInputChange}
                            value={formData.username}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            className="text-black w-[300px] h-[50px] rounded-[30px] p-4"
                            placeholder="Email"
                            onChange={handleInputChange}
                            value={formData.email}
                            required
                        />

                        <input
                            type="password"
                            name="password"
                            className="text-black w-[300px] h-[50px] rounded-[30px] p-4"
                            placeholder="Пароль"
                            onChange={handleInputChange}
                            value={formData.password}
                            required
                        />

                        <button className="bg-blue-500 text-black p-5 w-[250px] h-[80px] rounded-[20px]">
                            Создать аккаунт
                        </button>
                    </form>
                </section>
            </section>
        </div>
    )
}

export default Registration
