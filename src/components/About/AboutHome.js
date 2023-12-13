import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cover from "@/assets/AsifCover.png"
import Asif from "@/assets/my-image.jpg"

const AboutHome = () => {
    return (
        <div className='container mx-auto my-5 px-1  w-full '>
            <div className='flex flex-col-reverse lg:flex-row gap-10 justify-between items-center md:p-5 '>
                <div className='w-full lg:w-2/5 rounded-lg'>
                    <Image className='rounded-full' src={Asif} width={1000} height={400} alt="My Cover" />
                </div>
                <div className='w-full lg:w-3/5'>
                    <div className="flex-1  md:text-left space-y-3">
                        <h1  className="py-2 text-xl lg:text-4xl font-medium ">I am Asif Ahammed</h1>
                        <p className='py-2'>
                            A highly motivated and detail-oriented Computer Science student at Bangladesh University of Business and Technology <Link href="https://www.bubt.edu.bd/" className=' text-blue-600 hover:underline' >(BUBT)</Link> with a strong foundation in programming languages including C, C++, and JavaScript. Eager to apply my academic knowledge and programming skills to real-world projects, contributing to innovative solutions and gaining practical experience in the field of Computer Science.
                        </p>
                        <Link href="/about" className="btn btn-sm hover:bg-black hover:text-white text-black bg-white border-black ">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;