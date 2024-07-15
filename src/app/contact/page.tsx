'use client';

import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { Toaster, toast } from 'react-hot-toast';
import dotenv from 'dotenv';
dotenv.config();


export default function ContactPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userKey = process.env.NEXT_PUBLIC_EMAILJS_USER_ID;

    const validateForm = () => {
        const newErrors = {};
        const namePattern = /^[a-zA-Z\s]+$/;

        if (!name) {
            newErrors.name = 'El nombre es obligatorio.';
        } else if (!namePattern.test(name)) {
            newErrors.name = 'El nombre solo puede contener letras y espacios.';
        }

        if (!email) {
            newErrors.email = 'El correo electrónico es obligatorio.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'El correo electrónico no es válido.';
        }

        if (!message) {
            newErrors.message = 'El mensaje es obligatorio.';
        } else if (message.length < 10) {
            newErrors.message = 'El mensaje debe tener al menos 10 caracteres.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setIsSubmitting(true);
            emailjs.send(
                serviceId,
                templateId,
                { name, email, message },
                userKey
            )
            .then((response) => {
                toast.success('Mensaje enviado con éxito!');
                setName('');
                setEmail('');
                setMessage('');
                setErrors({});
            })
            .catch((error) => {
                toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                setErrors({ submit: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
        }
    };

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-10 lg:px-20 lg:py-10">
            <Toaster />
            <section id="contact" className="w-full max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Contacto</h2>
                <p className="text-center mb-8 text-lg">
                    Si tienes alguna pregunta, propuesta de proyecto o simplemente deseas conocer más de mí, no dudes en ponerte en contacto a través del siguiente formulario. Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                </p>
                <form onSubmit={handleSubmit} className="shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            className="shadow appearance-none border rounded text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="name"
                            type="text"
                            placeholder="Tu nombre"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <p className="text-white text-xs italic">{errors.name}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            className="shadow appearance-none border rounded text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            placeholder="Tu correo electrónico"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-white text-xs italic">{errors.email}</p>}
                    </div>
                    <div className="mb-6">
                        <label className="block text-sm font-bold mb-2" htmlFor="message">
                            Mensaje
                        </label>
                        <textarea
                            className="shadow appearance-none border rounded text-gray-700 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="message"
                            rows={5}
                            placeholder="Tu mensaje"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {errors.message && <p className="text-white text-xs italic">{errors.message}</p>}
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="font-bold py-2 px-4 border-2 rounded-lg hover:opacity-40 transition-colors duration-300"
                            type="submit"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? 'Enviando...' : 'Enviar'}
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}
