import React, { useState } from 'react';

export default function ShareProjectDetailForm() {
  const [services, setServices] = useState([]);

  const title = "Let’s Turn Your Vision Into a Powerful Reality";
  const body = "Share your project details, and we’ll provide a tailored quote that aligns with your goals and budget. Our team is ready to bring your ideas to life with creativity, strategy, and precision.";


  const handleServiceChange = (value) => {
    setServices((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className='main'>
        <div className='content-wrapper flex flex-col items-center justify-center my-4'>
            <div className="title-text text-center text-6xl mb-4 w-1/2">{title}</div>
            <div className="body-text text-center text-lg w-1/2">{body}</div>
        </div>

        <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl border border-gray-200 mb-8">
            <form className="space-y-6">
                <div>
                    <label className="block mb-1 font-medium">
                        Your name <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="text"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter your name"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Your email <span className="text-red-500">*</span>
                    </label>
                    <input
                        type="email"
                        className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-black"
                        placeholder="Enter your email"
                    />
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Phone number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex items-center border border-gray-300 rounded-md p-3">
                        <span className="mr-2">+91</span>
                        <input
                        type="tel"
                        className="w-full outline-none"
                        placeholder="Phone number"
                        />
                    </div>
                </div>

            <div>
                <label className="block mb-2 font-medium">
                    Select your services <span className="text-red-500">*</span>
                </label>

                <div className="grid grid-cols-2 gap-3">
                    {[
                    'UI/UX Design',
                    'Brand Design',
                    'Webflow Devlopment',
                    'No-code Development',
                    ].map((service, idx) => (
                        <label
                            key={idx}
                            className="flex justify-between items-center border border-gray-300 rounded-md p-3 cursor-pointer"
                        >
                        {service}
                        <input
                        type="checkbox"
                        checked={services.includes(service)}
                        onChange={() => handleServiceChange(service)}
                        className="form-checkbox"
                        />
                        </label>
                        ))}
                    </div>
                </div>

                <div>
                    <label className="block mb-1 font-medium">
                        Briefly describe your project
                    </label>
                    <textarea
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
