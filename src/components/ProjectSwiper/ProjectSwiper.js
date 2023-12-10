'use client'
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';

const ProjectSwiper = ({ Item }) => {
    // console.log(Item);
    return (
        <Swiper
            slidesPerView={2.5}
            spaceBetween={7}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper w-full border border-black min-h-fit bg-black   "
        >
            {
                Item?.map((image, index) => <SwiperSlide className='py-5 px-2 ' key={index}>
                    <Box className='rounded-lg border '>
                        <Image className='rounded-lg' src={image} width={1000} height={400} alt="My Cover" />
                    </Box>
                </SwiperSlide>)
            }

        </Swiper>
    );
};

export default ProjectSwiper;