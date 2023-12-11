"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import HTML from '@/assets/HTML.png';
import JS from '@/assets/JS.png';
import CSS from '@/assets/CSS.png';
import NODEJS from '@/assets/NODEJS.png';
import MONGO2 from '@/assets/MONGO2.jpg';
import REACT from '@/assets/REACT.jpg';
import EXPRESS from '@/assets/EXPRESS.jpg';
import Tailwind from '@/assets/Tailwind.jpg';

const WorkingTools = () => {
    return (
        <div className='container mx-auto'>
            <div className='mb-5'>
                <h2 className='text-4xl font-bold text-center'>My Working Tools</h2>
            </div>
            <Swiper
                slidesPerView={5}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mt-5 py-4  max-w-[650px] mx-auto border-l-2 border-r-2 border-black "
            >
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'   src={REACT} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'   src={MONGO2} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'  src={CSS} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'  src={JS} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'  src={NODEJS} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'  src={EXPRESS} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'  src={HTML} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
                <SwiperSlide className='py-5 px-2' >
                    <Image className='rounded-full'  src={Tailwind} width={150} height={200} alt='HTML Logo'></Image>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default WorkingTools;