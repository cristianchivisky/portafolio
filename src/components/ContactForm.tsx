// src/components/ContactForm.js
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toast } from 'react-hot-toast';
import { validateForm } from '@/utils/validateForm';
import { Errors, ContactFormValues } from '@/types/formTypes';
import dotenv from 'dotenv';
dotenv.config();

const ContactForm: React.FC = () => {
    const [formValues, setFormValues] = useState<ContactFormValues>({
        name: '',
        email: '',
        message: ''
    });
    const [errors, setErrors] = useState<Errors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormValues(prevValues => ({
          ...prevValues,
          [id]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isValid = await validateForm(formValues, setErrors);
        if (isValid) {
            setIsSubmitting(true);
            emailjs.send(
                `${process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID}`,
                `${process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID}`,
                formValues as unknown as Record<string, unknown>,
                `${process.env.NEXT_PUBLIC_EMAILJS_USER_ID}`
            )
            .then(() => {
                toast.success('Mensaje enviado con éxito!');
                setFormValues({ name: '', email: '', message: '' });
                setErrors({});
            })
            .catch(() => {
                toast.error('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
                setErrors({ submit: 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.' });
            })
            .finally(() => {
                setIsSubmitting(false);
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="shadow-2xl rounded-lg px-8 pt-6 pb-8 mb-4 bg-white">
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="name">
                    Nombre
                </label>
                <input
                    className="shadow appearance-none border rounded border-gray-300 text-gray-600 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formValues.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="mb-4">
                <label className="block text-sm font-bold mb-2" htmlFor="email">
                    Correo Electrónico
                </label>
                <input
                    className="shadow appearance-none border rounded border-gray-300 text-gray-600 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Tu correo electrónico"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="mb-6">
                <label className="block text-sm font-bold mb-2" htmlFor="message">
                    Mensaje
                </label>
                <textarea
                    className="shadow appearance-none border rounded border-gray-300 text-gray-600 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows={5}
                    placeholder="Tu mensaje"
                    value={formValues.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-600 "
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
