import ContactForm from '@/components/ContactForm/ContactForm';
import ContactDetails from '@/components/contactDetails/ContactDetails';
import React from 'react';

const ContactPage = () => {
    return (
        <div className=' min-h-screen  flex justify-center items-center' >
            <div className=" container mx-auto flex justify-between flex-col md:flex-row items-center   p-3 lg:gap-10">
                <ContactDetails></ContactDetails>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default ContactPage;