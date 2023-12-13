import { Box, Typography } from '@mui/material';
import React from 'react';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import StarsIcon from '@mui/icons-material/Stars';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const ResumeSection = () => {
    return (
        <section className="container mx-auto my-4">
            <div className="first-resume-container">
                <h2 className="text-2xl lg:text-4xl font-extrabold text-center py-5 my-5">A summary of My Resume</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">

                    <div className="space-y-5 flex-1">
                        <div className=" flex flex-col lg:flex-row  gap-3 justify-center items-center md:justify-start md:items-start p-5 lg:p-0 text-center  md:text-start ">
                            <div>
                                <SchoolIcon></SchoolIcon>
                            </div>
                            <div>
                                <h2 className="text-xl font-extrabold mb-3"> Education</h2>
                                <h3 className=" text-base font-bold">SSC : Sristy Academic School Tangail </h3>
                                <span>2018 - 2019</span>
                                <p className=""> <LocationOnIcon></LocationOnIcon> Tangail, Dhaka, Bangladesh</p>

                                <h3 className=" text-base font-bold mt-3">HSC : Dhaka Commerce College  </h3>
                                <span>2019 - 2020</span>
                                <p className=""> <LocationOnIcon></LocationOnIcon> Mirpur, Dhaka, Bangladesh</p>

                                <h3 className=" text-base font-bold mt-3">BSC : Bangladesh University Of Business and Technology </h3>
                                <h4 className=" font-semibold">BSc. in. Computer Science Engineering</h4>
                                <span>2022 - </span>
                                <p className=""> <LocationOnIcon></LocationOnIcon> Mirpur, Dhaka, Bangladesh</p>

                            </div>
                        </div>
                    </div>

                    <div className="space-y-5 flex-1">
                        <div className=" flex flex-col lg:flex-row  gap-3 justify-center items-center md:justify-start md:items-start lg:p-5 p-0 text-center  md:text-start ">
                            <div>
                                <WorkIcon></WorkIcon>
                            </div>
                            <div>
                                <h2 className="text-xl font-extrabold mb-3"> Work Experience</h2>
                                <h3 className=" text-base ">I am looking for a job</h3>
                                <h4 className=" ">I have No job Experience Yet . But i complete some project</h4>

                            </div>
                        </div>

                        <div className=" flex flex-col lg:flex-row  gap-3 justify-center items-center md:justify-start md:items-start lg:p-5 p-0 text-center  md:text-start ">
                            <div>
                                <StarsIcon></StarsIcon>
                            </div>
                            <div>
                                <h2 className="text-xl font-extrabold mb-3"> Skills</h2>
                                <h3 className=" ">I have Well Concept In </h3>
                                <h4 className=" ">C, C++, HTML, CSS,TailwindCss, JavaScript, NodeJs, React.Js, MongoDB, Express.js</h4>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ResumeSection;