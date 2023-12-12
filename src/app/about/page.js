import React from 'react';
import Asif from '@/assets/my-image.jpg'
import Asificpc from '@/assets/asif_icpc.jpg'
import Image from 'next/image';
import { Typography } from '@mui/material';
import Link from 'next/link';
import ResumeSection from '@/components/ResumeSection/ResumeSection';
import ContactDetails from '@/components/contactDetails/ContactDetails';
import ContactForm from '@/components/ContactForm/ContactForm';
const AboutPage = () => {
    return (
        <div className=''>
            <div className=' bg-black glass ' >
                <div className="hero min-h-screen  px-2 lg:px-5 container mx-auto ">
                    <div className="flex justify-between items-center flex-col gap-5 lg:flex-row">
                        <div className=' flex-1 '>
                            <Image src={Asif} className='w-full lg:w-3/4 rounded-full ' width={1000} height={500} alt='My Image'></Image>
                        </div>
                        <div className='w-full lg:w-3/5 text-white'>
                            <div className="flex-1  md:text-left space-y-3">
                                <Typography variant="h2" className="py-2 font-medium ">I am Asif Ahammed</Typography>
                                <p className='py-2'>
                                    A highly motivated and detail-oriented Computer Science student at Bangladesh University of Business and Technology <Link href="https://www.bubt.edu.bd/" className=' text-blue-600 hover:underline' >(BUBT)</Link> with a strong foundation in programming languages including C, C++, and JavaScript. Eager to apply my academic knowledge and programming skills to real-world projects, contributing to innovative solutions and gaining practical experience in the field of Computer Science.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-5 lg:mt-10 container mx-auto '>
                <div className="hero   px-2 lg:px-5 ">
                    <div className="flex justify-between items-center flex-col-reverse gap-5 lg:flex-row">
                        <div className='w-full lg:w-3/5  '>
                            <div className="flex-1  md:text-left space-y-3">
                                <Typography variant="h2" className="py-2 font-medium ">ICPC 2023 Contest: A Journey into the World of Competitive Programming</Typography>
                                <p className='py-2'>
                                    As the curtains fell on the International Collegiate Programming Contest (ICPC) 2023, I find myself reflecting on the incredible journey that unfolded during this prestigious competition. The ICPC, known for its challenging problem-solving tasks and fierce competition, brought together some of the brightest minds in the world of computer science. In this article, I&apos; ll share my experience participating in the ICPC 2023 contest and the valuable lessons learned along the way.
                                </p>
                            </div>
                        </div>
                        <div className=' flex-1 flex justify-center items-center'>
                            <Image src={Asificpc} className='w-full lg:w-3/4 rounded-full ' width={1000} height={500} alt='My Image'></Image>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <ResumeSection></ResumeSection>
            </div>
            <div className=" container mx-auto flex justify-between flex-col lg:flex-row items-center lg:items-start  p-3 lg:gap-10">
                <ContactDetails></ContactDetails>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
};

export default AboutPage;