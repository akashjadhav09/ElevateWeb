import React from "react";
import { FaTwitter, FaInstagram, FaWhatsapp, FaFacebookF } from "react-icons/fa";

export default function ContactCard() {
  const Data = [
    {
      title: "20 Cooper Square",
      body: "238 1st Ave, New York (By appointment only)",
    },
    {
      title: "Remote Teams",
      body: "We work with clients in 12+ timezones (EST to GMT+5:30).",
    },
    {
      title: "Follow us",
      body: "", 
    },
  ];

  return (
    <div className="contact-card_main py-8 px-4 flex justify-center">
      <div className="contact-card-outer grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl w-full">
        {Data.map((item, index) => (
          <div
            key={index}
            className="contact-card-inner bg-white shadow-md border border-gray-200 rounded-xl py-16 md:p-6 md:py-16 text-center"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>

            {item.body ? (
              <p className="text-gray-600 text-sm px-2">{item.body}</p>
            ) : (
              <div className="flex justify-center gap-4 mt-2 text-gray-600 text-xl">
                <a href="#" aria-label="Twitter" className="hover:text-blue-500">
                  <FaTwitter />
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-pink-500">
                  <FaInstagram />
                </a>
                <a href="#" aria-label="WhatsApp" className="hover:text-green-500">
                  <FaWhatsapp />
                </a>
                <a href="#" aria-label="Facebook" className="hover:text-blue-700">
                  <FaFacebookF />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
