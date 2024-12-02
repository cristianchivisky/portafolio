'use client';

import React from 'react';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {

    return (
        <div className="flex min-h-screen flex-col items-center justify-between p-10 lg:px-20 lg:py-10">
            <section id="contact" className="w-full max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-4">Contact</h2>
                <p className="text-center mb-8 text-lg">
                    If you have any questions, project proposals, or simply want to learn more about me, feel free to reach out through the form below. I am always open to new opportunities and collaborations.
                </p>
                <ContactForm />
            </section>
        </div>
    );
}
/**      <div className="flex min-h-[90vh] flex-col items-center justify-between p-10 lg:p-20">
 */