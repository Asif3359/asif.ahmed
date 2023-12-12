'use client'
import { useState } from 'react';
import Swal from 'sweetalert2';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://asif-server-site.vercel.app/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log(response);
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your Message has been send",
                    showConfirmButton: false,
                    timer: 1500
                });
                setFormData({
                    name: '',
                    email: '',
                    message: '',
                });
            } else {
                // console.error('Submission failed');
                Swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Something Error to send",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div id='contact' className='container mx-auto  mt-10 py-4 w-full rounded-lg '>
            <form onSubmit={handleSubmit} className='space-y-3 bg-black px-8 rounded-lg   py-8 text-white' >
                <div>
                    <label htmlFor="name" className='py-2' >Enter Your Name :</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className='border-2 text-black border-black w-full rounded-lg px-2 py-1  Your Name '
                        placeholder='your Name'
                    />
                </div>

                <div>
                    <label htmlFor="email" className='py-2'>Enter Your Email :</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className='border-2 text-black border-black w-full rounded-lg px-2 py-1'
                        placeholder='your Email'
                    />
                </div>

                <div>
                    <label htmlFor="message">Write Your Message :</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className='border-2 text-black border-black w-full rounded-lg px-2 py-1 h-32'
                        placeholder='if you have any question ?..'
                    />
                </div>
                <input type="submit" value="Send Email" className='btn btn-sm w-full bg-black text-white border-white hover:text-black hover:border-black hover:bg-white ' />
            </form>
        </div>
    );
};

export default ContactForm;