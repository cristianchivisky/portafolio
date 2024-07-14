'use client'

import React, { useState } from 'react';

export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const namePattern = /^[a-zA-Z\s]+$/;

        if (!name || !namePattern.test(name)) {
        newErrors.name = 'El nombre solo puede contener letras y espacios.';
        }

        if (!email) {
        newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
        newErrors.email = 'El correo electrónico no es válido.';
        }

        if (!message || message.length < 10) {
        newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
        // Aquí puedes manejar el envío del formulario
        alert('Formulario enviado con éxito!');
        }
    };
    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-10 lg:px-20 lg:py-10">
            <section id="contact" className="w-full max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Contacto</h2>
                <p className="text-center mb-8 text-lg">
                    Si tienes alguna pregunta, propuesta de proyecto o simplemente deseas conocer más de mí, no dudes en ponerte en contacto conmigo a través del siguiente formulario. Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                </p>
                <form className=" shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            className="shadow appearance-none border rounded text-gray-700  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            pattern="^[a-zA-Z\s]+$"
                        />
                        {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            className="shadow appearance-none border rounded text-gray-700  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded text-gray-700  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows={5}
                            placeholder="Tu mensaje"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            minLength={10}
                        ></textarea>
                        {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="font-bold py-2 px-4 border-2 rounded-lg hover:opacity-40 transition-colors duration-300"
                            type="submit"
                        >
                            Enviar
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
