import Image from 'next/image';
import React from 'react';
import Asif from "@/assets/my-image.jpg"
import HomeIcon from '@mui/icons-material/Home';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const ContactDetails = () => {
    return (
        <div className='container mx-auto  w-full space-y-3 justify-center items-center text-center '>
            <div className='flex justify-center items-center'>  <Image src={Asif} className='max-w-[200px] rounded-full ' alt='MyImage' width={400} height={400} ></Image></div>
            <h1 className='text-2xl'>Name: Asif Ahammed</h1>
            <h1>Email: asifahammednishst@gmail.com </h1>
            <h1>Phone: 01789846204</h1>
            <div>
                <h3 className=" text-base font-bold"><LocationOnIcon></LocationOnIcon> Present Address </h3>
                <p className="ml-6">  Mirpur, Dhaka, Bangladesh</p>
            </div>
        </div>
    );
};

export default ContactDetails;