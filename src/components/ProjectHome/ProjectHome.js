"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export default function ProjectHome() {
    return (
        <div className='container mx-auto my-6 '>
            <div>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper min-h-[70vh]"
                >
                    <SwiperSlide>
                        <Box className="flex justify-between lg:items-center flex-col lg:flex-row ">
                            <Box>
                                <Typography variant='h2' >Project Title</Typography>
                                <Typography variant='p' >Project description</Typography>
                            </Box>
                            <Box className='w-full rounded-lg'>
                                <Image className='rounded-lg w-full' src="https://github.com/Asif3359/Asif3359/blob/main/img/Cover-Photo.png?raw=true" width={1000} height={400} alt="My Cover" />
                            </Box>
                        </Box>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}