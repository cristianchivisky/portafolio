'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-10 lg:px-20 lg:py-10">
            <section id="contact" className="w-full max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Contacto</h2>
                <p className="text-center mb-8 text-lg">
                    Si tienes alguna pregunta, propuesta de proyecto o simplemente deseas conocer más de mí, no dudes en ponerte en contacto a través del siguiente formulario. Estoy siempre abierto a nuevas oportunidades y colaboraciones.
                </p>
                <ContactForm />
            </section>
        </div>
    );
}
