import React from "react";

import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
export default function ContactPage(){
    return(
        <div className="contact-page-main">
            <div className="contact-page-outer">
                <ContactForm />
                <ContactCard />
            </div>
        </div>
    )
}