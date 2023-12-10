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


    // console.log(Projects);

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
                        Projects.map((item) => <SwiperSlide className='' key={item._id}>
                            <Box className="flex gap-5 lg:justify-between lg:items-center flex-col lg:flex-row px-5 lg:px-10 min-h-[80vh] py-4 lg:py-10 ">
                                <Box className=" flex flex-col justify-between gap-2 w-full lg:w-3/5">
                                    <Typography variant='h3' className='font-bold' >{item.Title}</Typography>
                                    <Typography variant='p' >{item.Description}</Typography>
                                    <Typography className='flex justify-start gap-3'>
                                        <Link href={item.LiveLink} className='btn btn-sm text-black  hover:text-white hover:bg-black  btn-outline' >
                                            View Live Demo
                                        </Link>
                                        <Link href={`/${item._id}`} className='btn btn-sm text-black  hover:text-white hover:bg-black  btn-outline' >
                                            See Details
                                        </Link>
                                    </Typography>
                                </Box>
                                <Swiper
                                    slidesPerView={2.5}
                                    spaceBetween={7}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper w-full lg:w-3/4 min-h-fit bg-black  rounded-lg   "
                                >
                                    {
                                        item?.Images?.map((image, index) => <SwiperSlide className='py-5 px-2 ' key={index}>
                                            <Box className='rounded-lg border '>
                                                <Image className='rounded-lg' src={image} width={400} height={600} alt="My Cover" />
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