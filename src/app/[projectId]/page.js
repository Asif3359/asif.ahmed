import ProjectSwiper from "@/components/ProjectSwiper/ProjectSwiper";
import { Box, Typography } from "@mui/material";
import dynamic from "next/dynamic";
import Link from "next/link";

const NoSSR = dynamic(() => import("@/components/ProjectSwiper/ProjectSwiper"), { ssr: false })

const page = async ({ params }) => {
    const res = await fetch(`https://asif-server-site.vercel.app/projects/${params.projectId}`);
    const project = await res.json();
    // console.log(project);
    return (
        <Box className=" px-3pb-2 space-y-10 ">
            {/* <NoSSR Item={project.Images} ></NoSSR> */}
            <ProjectSwiper Item={project.Images}></ProjectSwiper>
            <div className="container mx-auto">
                <h1 className="font-bold text-5xl" >{project.Title}</h1>
                <p variant="p" sx={{ marginTop: 10 }} >{project.Description}</p>
                <Box className="flex flex-col lg:flex-row justify-between items-start gap-4  ">
                    <Typography variant="ul " className="lg:w-1/4" >
                        <h3 variant="h4" className="font-bold  text-3xl" >Project Features</h3>
                        {
                            project?.Features?.map((item, index) =>
                                <li className="ml-5 mt-2" variant="li" key={index}>
                                    <span >{item}</span>
                                </li>
                            )
                        }
                    </Typography>
                    <Box className=" border-2 rounded-lg border-black w-full lg:flex-1">
                        <div className="flex px-2 py-1 mb-2 items-center gap-3">
                            <h3 variant="h4" className="font-bold  text-3xl  " >Live Demo</h3>
                            <Link href={project.LiveLink} className="btn btn-sm hover:bg-black hover:text-white text-black bg-white border-black ">View Full Page</Link>
                        </div>
                        <object className="w-full min-h-[70vh] lg:min-h-[80vh] rounded-lg -2 border-black " data={project.LiveLink} ></object>
                    </Box>
                    <Typography variant="ul" className="lg:w-1/5" >
                        <h3 variant="h4" className="font-bold  text-3xl" >Tools</h3>
                        {
                            project?.Tools?.map((item, index) =>
                                <li className="ml-5 mt-2" variant="li" key={index}>
                                    <span >{item}</span>
                                </li>
                            )
                        }
                    </Typography>
                </Box>
            </div>
        </Box>
    );
};

export default page;