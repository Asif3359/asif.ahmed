'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, IconButton } from '@mui/material';
import Image from 'next/image';
import myImage from '@/assets/my-image.jpg'
import { Email, Facebook, GitHub, Instagram, LinkedIn, Twitter } from '@mui/icons-material';
import Link from 'next/link';

const navItems = [
    {
        "id": 1,
        "item": "Home",
        "link": "/"
    },
    {
        "id": 2,
        "item": "About",
        "link": "/about"
    },
    {
        "id": 3,
        "item": "Contact",
        "link": "/contact"
    },
];

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Footer = () => {
    return (
        <Box sx={{ width: "full", backgroundColor: "black", paddingY: 10 }} >
            <Container sx={{ display: "flex", justifyContent: "center" }} className=" text-white p-3">
                <Box sx={{ flexGrow: 1 }} className="container mx-auto" >
                    <div className=' flex flex-col md:flex-row justify-between items-center '>

                        <div className='flex flex-col justify-center items-center md:flex-row' >
                            <Image src={myImage} width={100} height={100} alt='my image' className='rounded-full' ></Image>
                        </div>
                        <div className='flex justify-center items-center'>
                            <Box className=" flex flex-col justify-center items-center" >
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    {navItems.map((item) => (
                                        <Link href={item.link} key={item.id} sx={{ color: '#fff' }} className='hover:underline ' >
                                            {item.item}
                                        </Link>
                                    ))}
                                </Box>
                                <Box sx={{ display: 'flex', gap: 2, marginTop: 3 }}>
                                    <Link href="https://www.facebook.com/1nothing90" >
                                        <Facebook />
                                    </Link>
                                    <Link href="mailto:asifahammendishst@gmail.com" >
                                        <Email />
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

                            </Box>

                        </div>
                    </div>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;