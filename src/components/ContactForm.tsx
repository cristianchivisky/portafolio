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

    // Maneja los cambios en los campos del formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { id, value } = e.target;
        setFormValues(prevValues => ({
          ...prevValues,
          [id]: value
        }));
    };

    // Maneja el envío del formulario
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Valida los datos del formulario
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
                // Muestra un mensaje de éxito y limpia el formulario
                toast.success('Message sent successfully!');
                setFormValues({ name: '', email: '', message: '' });
                setErrors({});
            })
            .catch(() => {
                // Muestra un mensaje de error si falla el envío
                toast.error('There was an error sending the message. Please try again later.');
                setErrors({ submit: 'There was an error sending the message. Please try again later.' });
            })
            .finally(() => {
                // Indica que el proceso de envío ha terminado
                setIsSubmitting(false);
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="shadow-2xl rounded-lg px-8 py-8 bg-white">
            <div className="mb-6">
                <input
                    className="shadow appearance-none border rounded border-gray-300 text-gray-600 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formValues.name}
                    onChange={handleChange}
                />
                {errors.name && <p className="text-red-500 text-xs italic">{errors.name}</p>}
            </div>
            <div className="mb-6">
                <input
                    className="shadow appearance-none border rounded border-gray-300 text-gray-600 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    placeholder="Your email"
                    value={formValues.email}
                    onChange={handleChange}
                />
                {errors.email && <p className="text-red-500 text-xs italic">{errors.email}</p>}
            </div>
            <div className="mb-4">
                <textarea
                    className="shadow appearance-none border rounded border-gray-300 text-gray-600 w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="message"
                    rows={5}
                    placeholder="Your message"
                    value={formValues.message}
                    onChange={handleChange}
                ></textarea>
                {errors.message && <p className="text-red-500 text-xs italic">{errors.message}</p>}
            </div>
            <div className="flex items-center justify-between">
                <button
                    className="w-full md:w-auto text-center py-2 px-4 bg-blue-600 rounded-lg hover:bg-blue-700 focus:ring focus:ring-blue-300"
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : 'Send'}
                </button>
            </div>
        </form>
    );
};

export default ContactForm;
