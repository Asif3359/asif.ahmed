"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
// import useProjects from '../Hooks/useProjects';

const ProjectHome = ({ Projects }) => {


    console.log(Projects);

    return (
        <div className='container mx-auto my-6 '>
            <div>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper "
                >
                    {
                        Projects.slice().reverse().map((item) => <SwiperSlide className='' key={item._id}>
                            <Box className="flex gap-5 justify-between lg:items-center flex-col lg:flex-row px-5 lg:px-10 min-h-[70vh] py-4 lg:py-10 ">
                                <Box className=" space-y-4 w-full lg:w-3/5">
                                    <Typography variant='h3' >{item.Title}</Typography>
                                    <Typography variant='p' >{item.Description}</Typography>
                                    <Typography>
                                        <Link href={item.LiveLink} className='btn btn-sm text-black  hover:text-white hover:bg-black  btn-outline' >
                                            View Live Demo
                                        </Link>
                                    </Typography>
                                </Box>
                                <Swiper
                                    slidesPerView={3}
                                    spaceBetween={10}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper w-full lg:w-2/5"
                                >
                                    {
                                        item?.Images?.map((image, index) => <SwiperSlide key={index}>
                                            <Box className='rounded-lg'>
                                                <Image className='rounded-lg w-full ' src={image} width={1000} height={400} alt="My Cover" />
                                            </Box>
                                        </SwiperSlide>)
                                    }

                                </Swiper>

                            </Box>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
}
export default ProjectHome;