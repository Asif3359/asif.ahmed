import { Box } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/alogo.png";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EastIcon from '@mui/icons-material/East';

const Banner = () => {
    return (
        <div className='bg-gradient-to-r from-[#00000094] '>
            <div className="hero min-h-screen  bg-fixed hero-overlay opacity-90" style={{ backgroundImage: `url(${logo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container mx-auto px-2 ">
                    <div className="text-white w-full flex flex-col md:flex-row justify-between items-center gap-10 ">
                        <Box className=" w-full sm:w-3/5" >
                            <h1 className="mb-5 text-3xl font-bold">Hi , <br /> I am Asif Ahammed</h1>
                            <h1 className="mb-5 text-3xl font-bold">A dedicated Web Developer </h1>
                            <p className="mb-5">I specialize in designing and developing websites that not only look great but also help businesses generate leads and sales.</p>
                            <Box className="flex items-center justify-start gap-3 mb-8">
                                <Link href="https://www.facebook.com/1nothing90" >
                                    <Facebook />
                                </Link>
                                <Link href="/" >
                                    <Instagram />
                                </Link>
                                <Link href="/" >
                                    <Twitter />
                                </Link>
                                <Link href="https://github.com/Asif3359" >
                                    <GitHub />
                                </Link>
                                <Link href="https://www.linkedin.com/in/asif-ahammed-622a85264/" >
                                    <LinkedIn />
                                </Link>
                            </Box>
                            <Box className="flex items-center justify-start gap-3">
                                <Link href="/" className='btn btn-sm text-white hover:text-black  btn-outline' >
                                    <MailOutlineIcon /> Contact
                                </Link>
                                <Link href="/" className='btn btn-sm text-white hover:text-black  btn-outline' >
                                    <ArrowCircleDownIcon /> CV
                                </Link>
                                <Link href="/" className='btn btn-sm text-white hover:text-black  btn-outline' >
                                    <EastIcon /> Project
                                </Link>
                            </Box>
                        </Box>
                        <Box className=" w-full sm:w-2/5 ">
                            <Box className="w-fit bg-white z-10 relative rounded-full overflow-hidden">
                                <Box className='rounded-full overflow-hidden cursor-pointer hover:scale-125  transition-transform duration-300'>
                                    <Link href="/">
                                        <Image src={logo} height={500} width={500} alt='logo' />
                                    </Link>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;