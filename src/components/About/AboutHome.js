import { Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import cover from "@/assets/AsifCover.png"

const AboutHome = () => {
    return (
        <div className='container mx-auto my-5'>
            <div className='flex flex-col-reverse lg:flex-row gap-10 justify-between items-center p-5 '>
                <div className='w-full lg:w-2/5 rounded-lg'>
                    <Image className='rounded-lg' src={cover} width={1000} height={400} alt="My Cover" />
                </div>
                <div className='w-full lg:w-3/5'>
                    <div className="flex-1  md:text-left space-y-3">
                        <Typography variant="h2" className="py-2 font-medium ">I am Asif Ahammed</Typography>
                        <p className='py-2'>
                            A highly motivated and detail-oriented Computer Science student at Bangladesh University of Business and Technology <Link href="https://www.bubt.edu.bd/" className=' text-blue-600 hover:underline' >(BUBT)</Link> with a strong foundation in programming languages including C, C++, and JavaScript. Eager to apply my academic knowledge and programming skills to real-world projects, contributing to innovative solutions and gaining practical experience in the field of Computer Science.
                        </p>
                        <Link href="" className="btn bg-black text-white ">Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutHome;