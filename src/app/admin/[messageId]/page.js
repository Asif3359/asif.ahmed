'use client'
import { useEffect, useState } from 'react';

const EmailForm = ({ params }) => {
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [submitEmail, setSubmitEmail] = useState({});

    useEffect(() => {
        fetch(`https://asif-server-site.vercel.app/message/${params.messageId}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setSubmitEmail(data);
                setEmail(data.email);
            })
    }, [params.messageId])



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('https://asif-server-site.vercel.app/replay', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, subject, message }),
            });

            const data = await response.json();

            if (response.ok) {
                alert(data.message);
                setSubject('')
                setMessage('')
            } else {
                alert(`Error: ${data.message}`);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    return (
        <div className='container mx-auto mt-5 min-h-[80vh] flex flex-col md:flex-row md:items-start py-5 gap-5 justify-center items-center  lg:mt-10'>

            <div className=' w-full md:w-2/5'>
                <h1 className='font-bold text-2xl'>Message :</h1>
                <p>{submitEmail.message} </p>
            </div>

            <form onSubmit={handleSubmit} className="bg-black flex-1 text-white p-1 md:p-5 rounded shadow mx-auto w-full md:w-3/4 ">
                <label className="block mb-4 ">
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="block w-full mt-1 text-black p-2 border rounded"
                        required
                    />
                </label>
                <label className="block mb-4">
                    Subject:
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="block w-full mt-1 text-black p-2 border rounded"
                        required
                    />
                </label>
                <label className="block mb-4">
                    Message:
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="block text-black  w-full h-32 mt-1 p-2 border rounded"
                        required
                    />
                </label>
                <button type="submit" className="bg-white btn btn-sm w-full text-black py-2 px-4 rounded hover:bg-gray-300">
                    Send Email
                </button>
            </form>
        </div>
    );
};

export default EmailForm;
