import HeadComponent from "..//components/Head";
import AppbarComponent from "../components/AppbarComponent";
import GridComponent from "../components/GridComponent";
import Footer from "../components/FooterComponent";
import ImageCard from "../components/ImageCard";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../src/theme";

import { Zen_Old_Mincho } from "next/font/google";
const mincho = Zen_Old_Mincho({ weight: "400", subsets: ["latin"] });

import { Box } from "@mui/material";

const HomePage: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box className={`${mincho.className}`}>
        <HeadComponent />

        <AppbarComponent />
        <ImageCard imageUrl="topimage.svg" title="" />
        <GridComponent />
        <Footer />
      </Box>
    </ThemeProvider>
  );
};

export default HomePage;
