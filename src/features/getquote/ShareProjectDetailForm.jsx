import React, { useState } from 'react';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';


export default function ShareProjectDetailForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    services: [],
  });
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const title = "Let’s Turn Your Vision Into a Powerful Reality";
  const body =
    "Share your project details, and we’ll provide a tailored quote that aligns with your goals and budget. Our team is ready to bring your ideas to life with creativity, strategy, and precision.";

  const servicesList = [
    'UI/UX Design',
    'Brand Design',
    'Webflow Development',
    'No-code Development',
  ];

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

  return (
    <div className="main">
      <div className="content-wrapper flex flex-col items-center justify-center my-4">
        <div className="title-text text-center text-4xl md:text-6xl mb-4 md:w-1/2">{title}</div>
        <div className="body-text text-center px-2 text-lg md:w-1/2">{body}</div>
      </div>

      <div className="m-2 max-w-2xl md:mx-auto bg-white p-4 md:p-8 rounded-2xl border border-gray-200 mb-8 sm:m-[0.5em]">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium">
              Your name <span className="text-red-500">*</span>
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
              Your email <span className="text-red-500">*</span>
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
                Phone number <span className="text-red-500">*</span>
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
            <label className="block mb-2 font-medium">
              Select your services <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-3">
              {servicesList.map((service, idx) => (
                <label
                  key={idx}
                  className="flex justify-between items-center border border-gray-300 rounded-md p-3 cursor-pointer"
                >
                  {service}
                  <input
                    type="checkbox"
                    checked={formData.services.includes(service)}
                    onChange={() => handleServiceChange(service)}
                  />
                </label>
              ))}
            </div>
            {errors.services && <p className="text-red-500 text-sm mt-1">{errors.services}</p>}
          </div>

          <div>
            <label className="block mb-1 font-medium">
              Briefly describe your project
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
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
