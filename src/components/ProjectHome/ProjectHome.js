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
        <div className='container mx-auto my-6 px-2 ' id='project'>
            <h1 className='font-bold text-2xl lg:text-4xl mt-5 lg:ml-10' >My Projects </h1>
            <h1 className='font-bold sm:mt-5 sm:ml-5 lg:ml-10' >You Can See All This Project </h1>

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
                            <Box className="flex gap-5 lg:justify-between lg:items-center flex-col lg:flex-row  lg:px-10 min-h-[80vh] py-4 lg:py-10 ">
                                <Box className=" flex flex-col justify-between gap-2 w-full lg:w-3/5">
                                    <h1 className='font-bold text-xl  lg:text-4xl' >{item.Title}</h1>
                                    <p >{item.Description}</p>
                                    <div className='flex flex-col sm:flex-row justify-start gap-3'>
                                        <Link href={item.LiveLink} className='btn w-32 lg:w-40 btn-sm text-black  hover:text-white hover:bg-black  btn-outline' >
                                            Live Demo
                                        </Link>
                                        <Link href={`/${item._id}`} className='btn w-32 lg:w-40 btn-sm text-black  hover:text-white hover:bg-black  btn-outline' >
                                            Details
                                        </Link>
                                    </div>
                                </Box>
                                <Swiper
                                    slidesPerView={2.5}
                                    spaceBetween={7}
                                    pagination={{
                                        clickable: true,
                                    }}
                                    modules={[Pagination]}
                                    className="mySwiper w-full lg:w-3/4 min-h-fit bg-black  rounded-sm   "
                                >
                                    {
                                        item?.Images?.map((image, index) => <SwiperSlide className='sm:py-5 sm:px-2 ' key={index}>
                                            <Box className=' border '>
                                                <Image className='' src={image} width={400} height={600} alt="My Cover" />
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