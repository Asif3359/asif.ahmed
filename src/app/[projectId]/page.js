import { Box, Typography } from "@mui/material";

const page = async ({ params }) => {
    const res = await fetch(`http://localhost:5000/projects/${params.projectId}`);
    const project = await res.json();
    // console.log(project);
    return (
        <Box className="container mx-auto px-3 pt-2 space-y-5 ">
            <h1 className="font-bold text-5xl" >{project.Title}</h1>
            <p variant="p" sx={{ marginTop: 10 }} >{project.Description}</p>
            <h3 variant="h4" className="font-bold  text-3xl" >Project Features</h3>
            <Typography variant="ul" >
                {
                    project?.Features?.map((item, index) =>
                        <li className="ml-5" variant="li" key={index}>
                            <span >{item}</span>
                        </li>
                    )
                }
            </Typography>
        </Box>
    );
};

export default page;