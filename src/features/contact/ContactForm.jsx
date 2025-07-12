import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';


export default function ContactForm(){

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        services: [],
    });
    const [phone, setPhone] = useState('');
    const [errors, setErrors] = useState({});


    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' });
    };

    const handleServiceChange = (value) => {
        const updated = formData.services.includes(value)
        ? formData.services.filter((s) => s !== value)
        : [...formData.services, value];

        setFormData({ ...formData, services: updated });
        setErrors({ ...errors, services: '' });
    };

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid.';
        }
        if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
        if (formData.services.length === 0) newErrors.services = 'Select at least one service.';
        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        return;
        }

        if (!phone.trim()) {
            errors.phone = "Phone number is required";
        }
    };

    return(
        <div className="contact-form-wrapper-main">
            <div className="contact-form-wrapper-outer">
                <div className="contact-form-wrapper-inner w-full flex flex-col md:flex-row justify-center py-16">

                    <div className="content-wrapper md:w-1/2 flex flex-col items-center justify-center px-8">
                        <div className="title-text md:text-center text-4xl md:text-6xl mb-8">Let's Build Something Awesome!</div>
                        <div className="title-text md:text-center text-base md:text-lg mb-8">Got a project that needs pixel-perfect design or bulletproof code? Drop us a line—we reply within 24 hours.</div>
                    </div>

                    <div className="form-data-wrapper md:w-1/2">
                        <div className="max-w-2xl mx-auto bg-white mb-8 px-8">
                            <form className="space-y-6 pb-3 border-b border-gray-300" onSubmit={handleSubmit}>
                            <div>
                                <label className="block mb-1 font-medium">
                                Your Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                name="name"
                                type="text"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your name"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">
                                Your Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Enter your email"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block mb-1 font-medium">
                                    Phone Number <span className="text-red-500">*</span>
                                </label>
                                <PhoneInput
                                    country={'in'}
                                    value={phone}
                                    onChange={setPhone}
                                    inputClass="!w-full !h-[52px] !text-base !border-gray-300 focus:!ring-2 focus:!ring-black"
                                    inputStyle={{ width: '100%' }}
                                    specialLabel={''}
                                    containerClass="w-full"
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>

                            <div>
                                <label className="block mb-1 font-medium">
                                Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-md p-3 min-h-[120px] focus:outline-none focus:ring-2 focus:ring-black"
                                placeholder="Your message..."
                                />
                            </div>

                            <div>
                                <button
                                type="submit"
                                className="bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800 transition"
                                >
                                Submit Enquiry
                                </button>
                            </div>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}