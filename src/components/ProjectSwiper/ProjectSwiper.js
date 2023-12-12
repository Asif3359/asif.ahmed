'use client'
import Image from "next/image";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Box } from "@mui/material";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
const ProjectSwiper = ({ Item }) => {
    // console.log(Item);
    return (
        <div className="bg-black ">
            <Swiper

                slidesPerView={2.5}
                spaceBetween={7}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper container mx-auto w-full bg-black  lg:max-h-fit  px-10   "
            >
                {
                    Item?.map((image, index) => <SwiperSlide className='py-5 px-2 ' key={index}>
                        <Box className=' border  '>
                            <Image className=' w-full h-3/4 ' src={image} width={1000} height={400} alt="My Cover" />
                        </Box>
                    </SwiperSlide>)
                }

            </Swiper>
        </div>
    );
};

export default ProjectSwiper;