import AboutHome from "@/components/About/AboutHome";
import Banner from "@/components/Banner/Banner";
import ContactForm from "@/components/ContactForm/ContactForm";
import useProjects from "@/components/Hooks/useProjects";
import ProjectHome from "@/components/ProjectHome/ProjectHome";
import ResumeSection from "@/components/ResumeSection/ResumeSection";
import ShowQuestion from "@/components/ShowQuestion/ShowQuestion";
import TakeQuestion from "@/components/TakeQuestion/TakeQuestion";
import WorkingTools from "@/components/WorkingTools/WorkingTools";
import ContactDetails from "@/components/contactDetails/ContactDetails";
import { Box } from "@mui/material";

const HomePage = async () => {
  const Projects = await useProjects();

  // console.log(Projects);

  return (
    <Box component="section" >
      <Banner></Banner>
      <AboutHome></AboutHome>
      <ProjectHome Projects={Projects}></ProjectHome>
      <WorkingTools></WorkingTools>
      <ResumeSection></ResumeSection>
      <div className="container mx-auto flex justify-between flex-col lg:flex-row items-center lg:items-start p-3 lg:gap-10 mt-5 mb-5 lg:mt-10">
        <ShowQuestion></ShowQuestion>
        {/* <TakeQuestion></TakeQuestion> */}
      </div>
      <div className=" container mx-auto flex justify-between flex-col lg:flex-row items-center lg:items-start  p-3 lg:gap-10">
        <ContactDetails></ContactDetails>
        <ContactForm></ContactForm>
      </div>
    </Box>
  );
};

export default HomePage;