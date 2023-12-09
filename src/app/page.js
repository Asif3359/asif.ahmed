import AboutHome from "@/components/About/AboutHome";
import Banner from "@/components/Banner/Banner";
import { Box } from "@mui/material";

const HomePage = () => {
  return (
    <Box component="section" >
      <Banner></Banner>
      <AboutHome></AboutHome>
    </Box>
  );
};

export default HomePage;