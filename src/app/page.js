import AboutHome from "@/components/About/AboutHome";
import Banner from "@/components/Banner/Banner";
import useProjects from "@/components/Hooks/useProjects";
import ProjectHome from "@/components/ProjectHome/ProjectHome";
import { Box } from "@mui/material";

const HomePage = async () => {
  const Projects = await  useProjects();

  // console.log(Projects);

  return (
    <Box component="section" >
      <Banner></Banner>
      <AboutHome></AboutHome>
      <ProjectHome Projects={Projects}></ProjectHome>
      {/* <a href="https://raw.githubusercontent.com/Asif3359/Asif-Ahammed-Profile/167a12c39b095535d3f95d0fdadbc1d0af03f3e5/public/AsifAhammed.pdf"></a> */}
    </Box>
  );
};

export default HomePage;