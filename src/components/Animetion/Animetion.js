'use client'
import { Box } from '@mui/material';
// components/GradientTextAnimation.js
import { motion } from 'framer-motion';
import Link from 'next/link';
import logo from "@/assets/alogo.png";
import { Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import EastIcon from '@mui/icons-material/East';
import AttachmentIcon from '@mui/icons-material/Attachment';
import DownloadLink from '../DownloadLink/DownloadLink';

const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.4 } },
};

const wordVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const GradientTextAnimation = () => {
    return (
        <motion.div
            className=" text-gradient space-y-4"
            variants={textVariants}
            initial="hidden"
            animate="visible"
        >
            {/* A dedicated Web Developer */}

            <h1 className='text-4xl font-bold'><motion.span variants={wordVariants}>Hi,</motion.span>{' '}</h1>

            <div className='text-4xl font-bold'>
                <motion.span variants={wordVariants}>I</motion.span>{' '}
                <motion.span variants={wordVariants}>AM</motion.span>{' '}
                <motion.span variants={wordVariants}>ASIF</motion.span>{' '}
                <motion.span variants={wordVariants}>ASIFAHAMMED</motion.span>{' '}
            </div>
            <div>
                <motion.span variants={wordVariants}>A</motion.span>{' '}
                <motion.span variants={wordVariants}>dedicated</motion.span>{' '}
                <motion.span variants={wordVariants}>Web</motion.span>{' '}
                <motion.span variants={wordVariants}>Developer</motion.span>{' '}
            </div>
            <p className="mb-5">
                <motion.span variants={wordVariants}>As</motion.span>{' '}
                <motion.span variants={wordVariants}>Junior</motion.span>{' '}
                <motion.span variants={wordVariants}>Web</motion.span>{' '}
                <motion.span variants={wordVariants}>Developer</motion.span>{' '}
                <motion.span variants={wordVariants}>.</motion.span>{' '}
                <motion.span variants={wordVariants}>I</motion.span>{' '}
                <motion.span variants={wordVariants}>want</motion.span>{' '}
                <motion.span variants={wordVariants}>want</motion.span>{' '}
                <motion.span variants={wordVariants}>to</motion.span>{' '}
                <motion.span variants={wordVariants}>learn</motion.span>{' '}
                <motion.span variants={wordVariants}>Many</motion.span>{' '}
                <motion.span variants={wordVariants}>things</motion.span>{' '}
                <motion.span variants={wordVariants}>.</motion.span>{' '}
            </p>
            <Box className="flex items-center justify-start gap-3 mb-8">
                <motion.span variants={wordVariants}> <Link href="https://www.facebook.com/1nothing90" ><Facebook /></Link> </motion.span>{' '}
                <motion.span variants={wordVariants}> <Link href="/" ><Instagram /></Link> </motion.span>{' '}
                <motion.span variants={wordVariants}> <Link href="/" ><Twitter /></Link> </motion.span>{' '}
                <motion.span variants={wordVariants}> <Link href="https://github.com/Asif3359" ><GitHub /></Link> </motion.span>{' '}
                <motion.span variants={wordVariants}> <Link href="https://www.linkedin.com/in/asif-ahammed-622a85264/" ><LinkedIn /></Link> </motion.span>{' '}
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
        </motion.div>
    );
};

export default GradientTextAnimation;