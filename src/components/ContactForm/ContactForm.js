'use client'
import { useState } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        selectStatus: false,
        replayStatus: false
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormData({
            name: '',
            email: '',
            message: '',
        });
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
                toast.success('Send Successfully', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });

            } else {
                // console.error('Submission failed');
                toast.error('Something Error to Send Email', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <div id='contact' className='container mx-auto flex items-center justify-center  mt-10 py-4 w-full rounded-lg '>
            <form onSubmit={handleSubmit} className='space-y-3 bg-black px-3 lg:px-8 py-3 rounded-lg   lg:py-8 text-white' >
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