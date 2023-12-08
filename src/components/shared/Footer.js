'use client'
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Container, IconButton } from '@mui/material';
import Image from 'next/image';
import myImage from '@/assets/my-image.jpg'
import { Facebook } from '@mui/icons-material';
import Link from 'next/link';

const navItems = [
    {
        "item": "Home",
        "link": "/"
    },
    {
        "item": "Contact",
        "link": "/contact"
    },
    {
        "item": "About",
        "link": "/about"
    }
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
        <Box sx={{ width: "full", backgroundColor: "black",paddingY:10 }} >
            <Container sx={{ display: "flex", justifyContent: "center" }} className=" text-white p-3">
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>

                        <Grid item xs={4}>
                            <Image src={myImage} width={70} height={70} alt='my image' className='rounded-full' ></Image>
                        </Grid>
                        <Grid item xs={8} >
                            <Box className=" flex flex-col justify-center items-center" >
                                <Box sx={{ display: 'flex', gap: 2 }}>
                                    {navItems.map((item) => (
                                        <Link href={item.link} key={item} sx={{ color: '#fff' }} className='hover:underline ' >
                                            {item.item}
                                        </Link>
                                    ))}
                                </Box>
                                <Box sx={{ display: 'flex' }}>
                                    <IconButton>
                                        <Facebook sx={{ color: "white" }} ></Facebook>
                                    </IconButton>
                                    <IconButton>
                                        <Facebook sx={{ color: "white" }} ></Facebook>
                                    </IconButton>
                                    <IconButton>
                                        <Facebook sx={{ color: "white" }} ></Facebook>
                                    </IconButton>
                                </Box>
                            </Box>

                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;