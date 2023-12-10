import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from "@/assets/alogo.png";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EastIcon from '@mui/icons-material/East';
import AttachmentIcon from '@mui/icons-material/Attachment';

import dynamic from 'next/dynamic'
import DownloadLink from '../DownloadLink/DownloadLink';

const NoSSR = dynamic(() => import("@/components/AnalogClock/AnalohgClock"), { ssr: false })


const Banner = () => {

    return (
        <div className='bg-gradient-to-r from-[#00000094]  '>
            <div className="hero min-h-screen  bg-fixed hero-overlay opacity-90 py-3" style={{ backgroundImage: `url(${logo.src})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container mx-auto px-2 ">
                    <div className="text-white w-full flex flex-col-reverse md:flex-row justify-between items-center gap-10 ">
                        <Box className=" w-full sm:w-3/5 space-y-7" >
                            <Typography variant="h2" className="py-2 font-bold text-3xl sm:text-5xl  ">HI, I am Asif Ahammed</Typography>
                            <Typography variant="h4" className="mb-5 text-3xl sm:text-5xl font-bold">A dedicated Web Developer </Typography>
                            <p className="mb-5">As a Junior Web Developer .I want want to learn Many things. </p>
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
                            <Box className="flex flex-col sm:flex-row sm:items-center justify-start gap-3">
                                <Link href="mailto:asifahammendishst@gmail.com" className='btn btn-sm text-white hover:text-black hover:bg-white  btn-outline' >
                                    <MailOutlineIcon /> Contact
                                </Link>
                                <Link href="/mycv" download="./AsifAhammed.pdf" className='btn btn-sm text-white hover:text-black hover:bg-white  btn-outline' >
                                    <DownloadLink></DownloadLink>
                                </Link>
                                <Link href="/" className='btn btn-sm text-white hover:text-black hover:bg-white  btn-outline' >
                                    <EastIcon /> Project
                                </Link>
                            </Box>
                        </Box>
                        <Box className=" w-full sm:w-2/5 flex justify-center md:justify-end pt-5 ">
                            <Box className=" bg-white z-10 relative rounded-full overflow-hidden">
                                <Box className='rounded-full overflow-hidden cursor-pointer  text-black'>
                                    {/* <Link href="/">
                                    <Image src={logo} height={500} width={500} alt='logo' />
                                </Link> */}
                                    {/* <ReactClock></ReactClock> */}
                                    <NoSSR></NoSSR>

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